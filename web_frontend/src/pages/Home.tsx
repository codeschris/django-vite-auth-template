import InfiniteCarousel from "../components/InfiniteCarousel.tsx";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Top Carousel */}
            <InfiniteCarousel />

            {/* Center Content */}
            <div className="p-10 border-1 md:w-1/2 md:mx-auto mx-4 my-10 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">@codeschris (GitHub) / dice (gamertag) developed this for this specific occasion</h1>
                    <p className="text-gray-600 mt-2">
                        The talk is about API-Driven Architecture where I take you through how you develop systems that are
                        driven by APIs, focusing on the principles of modularity, scalability, and maintainability. The essence of this system
                        is to explain how I started building the system after planning out my API endpoints and how I used them to
                        build a full-stack application that is both efficient and easy to maintain.
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <Link to="/auth/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Login
                        </Link>
                        <Link to="/auth/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Register
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Carousel */}
            <InfiniteCarousel />
        </div>
    );
};

export default Home;