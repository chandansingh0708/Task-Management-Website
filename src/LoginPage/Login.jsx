import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { useDataContext } from '../useContext/Context';

const Login = (props) => {
    const { setAccount, allData, onLogin } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { data } = useDataContext();

    const handleLogin = (e) => {
        e.preventDefault();
    
        // Merge employees and admins into a single array
        const users = [...data.Employees, ...data.Admin];
        console.log(users, "users array");

        // Find the user by username/email and password
        const user = users.find(user => 
            (user.email.toLowerCase() === username.toLowerCase() || 
             user.firstName.toLowerCase() === username.toLowerCase()) && 
            user.password === password
        );

        if (user) {
            onLogin(user);
        } else {
            alert('Login failed: Invalid username or password');
        }
    };

    const handleRegister = () => {
        setAccount(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full">
            <div className="relative bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
                    <Logo />
                </h1>
                <h2 className="text-2xl font-semibold mb-6 text-center text-[#1D4ED8]">Login to Your Account!!</h2>
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="text-[#1D4ED8] font-medium mb-1" htmlFor="username">
                            Username or Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border mt-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="username"
                            type="text"
                            placeholder="Enter your username or email"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-[#1D4ED8] block font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-[4rem]"
                                id="password"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-500 hover:underline" onClick={handleRegister}>Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
