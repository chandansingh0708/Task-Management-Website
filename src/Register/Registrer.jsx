import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { GetLocalStorage } from '../AllData/LocalStorage';

const Register = (props) => {
    const { setAccount, Storagecall } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [id, setId] = useState(''); // Changed from userId to id

    const handleSubmit = (e) => {
        e.preventDefault();
        const { Employees } = GetLocalStorage(); // Retrieve current Employees data

        // Check if id includes 'B322108', ensure it's unique and passwords match
        const userExists = Employees.some(user => user.id === id);
        if (id.includes('B3220') && !userExists && password === confirmPassword) {
            const newUser = {
                id: id, // Use the provided id
                firstName: name,
                email: email,
                password: password,
                taskCounts: {
                    active: 0,
                    newTask: 0,
                    completed: 0,
                    failed: 0
                },
                tasks: []
            };

            const updatedEmployees = [...Employees, newUser]; // Using spread operator to add new user

            localStorage.setItem("Employees", JSON.stringify(updatedEmployees)); // Update localStorage with new user data
            console.log('Updated Employees Data:', updatedEmployees);

            Storagecall(newUser);
        } else if (userExists) {
            alert('User ID already exists. Please use a different User ID.');
        } else if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match.');
        } else {
            alert('User ID is incorrect.');
        }
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setId(''); // Reset form fields
    };

    const handleLogin = () => {
        setAccount(true);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="relative bg-white p-8 rounded-xl shadow-lg w-full max-w-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mt-5 mb-5">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-900"><Logo /></h1>
                <h2 className="text-2xl text-[#1D4ED8] font-semibold mb-6 text-center">Create an Account!!</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[#1D4ED8] font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#1D4ED8] font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#1D4ED8] font-medium mb-2" htmlFor="id">
                            User ID
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="id"
                            type="text"
                            placeholder="Enter your User ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            maxLength={7}
                            minLength={7}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[#1D4ED8] font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[#1D4ED8] font-medium mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                className="w-full px-3 py-2 pr-[4rem] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="confirm-password"
                                type={confirmPasswordVisible ? "text" : "password"}
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {confirmPasswordVisible ? <i className="bi bi-eye-slash-fill"></i> : <i className="bi bi-eye-fill"></i>}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Already have an account? <a href="#" className="text-blue-500 hover:underline" onClick={handleLogin}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
