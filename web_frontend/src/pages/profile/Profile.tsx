import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteCarousel from "../../components/InfiniteCarousel";
import { getUser, logout } from "../../lib/auth";
import type { User } from "../../lib/types";

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/auth/login");
                    return;
                }

                const userData = await getUser();
                setUser(userData);
            } catch (err) {
                console.error("User fetch error:", err);
                setError("Could not fetch user");
                navigate("/auth/login");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/auth/login");
        } catch (err) {
            console.error("Logout error:", err);
            navigate("/auth/login");
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (error || !user) return <div className="min-h-screen flex items-center justify-center">{error}</div>;

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <InfiniteCarousel />

            <main className="flex flex-col md:flex-row px-4 py-8 gap-8">
                <div className="md:w-1/3 sticky top-8 self-start">
                    <div className="w-full bg-white shadow-md rounded-2xl p-8 text-left">
                        <h2 className="text-2xl font-extrabold text-gray-800">
                            {user.first_name} {user.last_name} (@{user.username})
                        </h2>
                        <p className="text-gray-600 mt-2"><span className="font-black">Email</span>: {user.email}</p>
                        <p className="text-gray-600 mt-2"><span className="font-black">Bio</span>: {user.bio || "No bio available"}</p>

                        <div className="mt-6">
                            <button
                                onClick={handleLogout}
                                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 space-y-6">
                    <div className="bg-white shadow rounded-xl p-6"
                    >
                        <h3 className="text-lg font-semibold text-gray-800">Welcome to the User Profile Page</h3>
                        <p className="text-gray-600 mt-2">
                            To begin with, this is a simple user profile page that displays your basic information. This page is protected, meaning
                            you need to be logged in to access it. If you are not logged in, you will be redirected to a "Not Found" page. This whole
                            concept will be explained in detail in the talk, where I will walk you through how I built this system.
                        </p>

                        <br/><br/>

                        <h3 className="text-lg font-semibold text-gray-800">What is this?</h3>
                        <p className="text-gray-600 mt-2">
                            It is part of a larger system that I built to demonstrate the principles of API-Driven Architecture. The system is designed to be modular, scalable, and maintainable, and it is built using
                            React (Vite) for the frontend and Django for the backend.
                        </p>

                        <br/><br/>

                        <h3 className="text-lg font-semibold text-gray-800">Where do I find this repository?</h3>
                        <p className="text-gray-600 mt-2">
                            You can find the repository on GitHub at <span className="underline cursor-alias bg-gray-400 px-3 py-1 rounded">@codeschris/django-vite-auth-template (GitHub)</span>. This repository will be converted to a Public Template Repository
                            as it is just a template for building a full-stack application with Django and React. You can use it as a starting point for your own projects. All the out-of-place
                            content will be removed, and the repository will be cleaned up to make it easier to use as a template.
                        </p>

                        <br/><br/>

                        <h3 className="text-lg font-semibold text-gray-800">Finally...</h3>
                        <p className="text-gray-600 mt-2">
                            The text slider at the top and bottom showcases some of the songs I was listening to while building this. Bad taste, I know,
                            but I hope you enjoy it if you give it a try! Most of the songs are dark and heavy, so be prepared for that.
                        </p>
                    </div>
                </div>
            </main>

            <InfiniteCarousel />
        </div>
    );
};

export default Home;