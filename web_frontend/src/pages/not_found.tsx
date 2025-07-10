import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="p-10 border-1 md:w-1/2 md:mx-auto mx-4 my-10 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">I see you tried to find a way around!</h1>
                    <p className="mt-5">
                        I am sorry but the route you tried to access is either protected (that is, you need to be logged in) or does not exist. Just create an account
                        or login to your account to access the system (which is not a bad idea, right?).

                        <br/><br/>

                        Click on the buttons below to either login or register an account.
                    </p>
                    <div className="mt-5">
                        <Link to="/auth/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                            Login
                        </Link>
                        <Link to="/auth/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;