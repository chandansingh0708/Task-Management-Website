import React, { useState } from 'react';

export default function Employeestasks({ tasks, userId, updateTasks,}) {
    const [taskss, setTasks] = useState(tasks);

    const handleFailed = (index) => {
        const newTasks = [...taskss];
        newTasks[index].failed = true;
        newTasks[index].active = false;
        newTasks[index].completed = false; // Ensure completed is false when failed
        setTasks(newTasks);
        updateTasks(newTasks, userId); // Call updateTasks to save to localStorage and update App state
    };

    const handleCompleted = (index) => {
        const newTasks = [...taskss];
        newTasks[index].completed = true;
        newTasks[index].failed = false; // Ensure failed is false when completed
        newTasks[index].active = false; // Optionally, set active to false when completed
        setTasks(newTasks);
        updateTasks(newTasks, userId); // Call updateTasks to save to localStorage and update App state
    };

    const colors = ['bg-red-300', 'bg-blue-300', 'bg-yellow-300', 'bg-green-300'];

    return (
        <div className="allTasks items-center capitalize bg-black flex mx-9 gap-6 py-6 text-neutral-50 overflow-hidden overflow-x-scroll no-scrollbar relative">
            {taskss.map((task, index) => {
                const color = colors[index % colors.length]; // Rotate colors
                return (
                    <div key={index} className={`differentTasks relative ${color} grid gap-y-2 p-4 rounded-lg lg:min-w-[400px] lg:max-w-[400px] sm:min-w-[350px] sm:max-w-[400px] min-w-[320px] py-8`}>
                        <div className="tiltedis font-bold capitalize mt-2">
                            <p className='text-gray-900 px-1'>{task.taskTitle} <sup className='bg-[#EC4899] px-2 rounded-lg'>{task.taskDate}</sup></p>
                            <p className='rounded-lg font-normal py-2 px-3 break-words w-[60%] overflow-hidden overflow-y-scroll sm:h-[60px] lg:h-[11.8vh] bg-gray-900 h-[8.5vh] no-scrollbar mt-2'>{task.taskDescription}</p>
                        </div>
                        {task.active && <div className="activestatus absolute bg-green-500 rounded-tl-lg px-2">Active</div>}
                        <div className="category absolute right-0 bg-[#EC4899] p-2 rounded-bl-lg rounded-tr-lg">{task.category}</div>
                        <div className="buttons absolute left-[65%] transform -translate-x-1/5 top-[40%] -translate-y-1/5">
                            <button 
                                className="text-[120%] flex items-center font-[400] capitalize" 
                                onClick={() => handleCompleted(index)} 
                                disabled={task.failed || task.completed}
                            >
                                ✅<p className='text-sm bg-green-500 px-2 rounded-[2px] mt-0.5'>completed</p>
                            </button>
                        </div>
                        <div className="buttons absolute left-[65%] transform -translate-x-1/5 top-[60%] -translate-y-1/5">
                            <button 
                                className="text-[120%] flex items-center font-[400] capitalize" 
                                onClick={() => handleFailed(index)} 
                                disabled={task.failed || task.completed}
                            >
                                ❌<p className='text-sm bg-red-500 px-3 rounded-[2px] mt-0.5'>failed</p>
                            </button>
                        </div>
                        {(task.completed || task.failed) && (
                            <div className="task-status absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900 text-white text-lg font-bold rounded-lg ">
                               <span className={`p-3 rounded-lg  ${task.completed ? 'bg-green-500' : 'bg-red-500'}`}> {task.completed ? "Task Completed" : "Task Failed"} </span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
