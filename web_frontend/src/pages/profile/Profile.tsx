import InfiniteCarousel from "../../components/InfiniteCarousel.tsx";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Top Carousel */}
            <InfiniteCarousel />

            {/* Center Content */}
            <div className="p-10 border-1 md:w-1/2 md:mx-auto mx-4 my-10 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">John Doe (@johndoe)</h1>
                    <p className="text-gray-600 mt-2">
                        Email: johndoe@example.com
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <Link to="/auth/login" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                            Logout
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