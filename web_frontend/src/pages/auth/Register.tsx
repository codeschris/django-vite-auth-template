import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-between">
            <div className="p-10 border-1 md:mx-auto mx-4 my-10 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="font-black pb-4 underline">Register an account here</h1>
                    <form>
                        <div className="mb-4 w-full">
                            <label htmlFor="first_name" className="block text-gray-700 mb-2">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                className="w-full px-8 py-2 border rounded focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <label htmlFor="last_name" className="block text-gray-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                className="w-full px-8 py-2 border rounded focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <label htmlFor="username" className="block text-gray-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-8 py-2 border rounded focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-8 py-2 border rounded focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-8 py-2 border rounded focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <button className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Register</button>
                    </form>
                    <div className="mt-4">
                        <p>You have an account? <span className="text-gray-400 hover:text-blue-700"><Link to="/auth/login">Log in here!</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;