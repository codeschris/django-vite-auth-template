import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../lib/auth';
import { toast } from 'sonner';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const user = await login(formData.username, formData.password);

            toast.success(`Welcome ${user.username || user.email}!`);
            navigate('/user/profile');
        } catch (err: any) {
            toast.error('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="p-10 w-full max-w-md bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-center underline mb-6">Log in to the Simple System</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-blue-600 hover:underline">
                            Register here!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;