import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RegisterData {
    name: string;
    email: string;
    password: string;
    phone: string;
    nickname: string;
    role: "member" | "admin";
    profile_picture: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<RegisterData>({
        name: "",
        email: "",
        password: "",
        phone: "",
        nickname: "",
        role: "member",
        profile_picture: "",
    });
    const navigate = useNavigate();

    // Cập nhật dữ liệu trong form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const mutation = useMutation(
        async (newUser: RegisterData) => {
            const response = await axios.post("http://localhost:8000/api/auth/register", newUser);
            return response.data;
        },
        {
            onSuccess: () => {
                toast.success("Registration successful!");
                navigate("/login");
            },
            onError: (error) => {
                console.error("Registration failed:", error);
                toast.error("Registration failed. Please try again.");
            },
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-400 focus:outline-none focus:bg-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-400 focus:outline-none focus:bg-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-400 focus:outline-none focus:bg-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-400 focus:outline-none focus:bg-white"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600">Nickname</label>
                        <input
                            type="text"
                            name="nickname"
                            placeholder="Enter your nickname"
                            value={formData.nickname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-400 focus:outline-none focus:bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
