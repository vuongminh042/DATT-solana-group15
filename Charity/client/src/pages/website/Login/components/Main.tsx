import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const mutation = useMutation(
        async () => {
            const response = await axios.post("http://localhost:8000/api/auth/login", { email, password });
            return response.data;
        },
        {
            onSuccess: (data) => {
                toast.success("Login successful!");
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/dashboard");
            },
            onError: (error) => {
                console.error("Login failed:", error);
                toast.error("Login failed. Please check your credentials.");
            },
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate();
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-400 focus:outline-none focus:bg-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-400 focus:outline-none focus:bg-white"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Don't have an account? <Link to='/register' className="text-blue-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
