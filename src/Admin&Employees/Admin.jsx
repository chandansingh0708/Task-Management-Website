import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useDataContext } from '../useContext/Context';
import { GetLocalStorage } from '../AllData/LocalStorage';

const TaskForm = ({ addTask, allData, handleLogout, messages, loggedInUser }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [category, setCategory] = useState('');
    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle,
            taskDescription,
            taskDate,
            category
        };

        addTask(newTask, userId);

        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setCategory('');
        setUsername('');
        setUserId('');
    };

    // Get the last 5 messages
    const recentMessages = messages.slice(-5);

    return (
        <div className="task-form">
            <Header allData={loggedInUser} handleLogout={handleLogout} />
            <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row justify-between gap-6 p-6 bg-black rounded-lg shadow-md max-w-4xl mx-auto">
                <div className="flex flex-col flex-1 gap-4">
                    <input
                        type="text"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        required
                        maxLength={20}
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="date"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        required
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col flex-1 gap-4">
                    <textarea
                        placeholder="Task Description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Add Task
                    </button>
                </div>
            </form>
            <div className="messages text-white text-lg mt-6 flex justify-center">
                <div className="w-full max-w-xl bg-gray-800 p-4 rounded-lg shadow-md">
                    {recentMessages.length > 0 && <h3 className="text-xl mb-2 text-center text-yellow-400">Recent Messages:</h3>}
                    {recentMessages.map((message, index) => (
                        <div key={index} className="mb-1 p-2 rounded bg-green-500 text-white capitalize">
                            <p><strong>Employee ID:</strong> {message.senderId}</p>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskForm;
