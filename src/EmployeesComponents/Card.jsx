import React from 'react';
import MessageBox from './messageAdmin';

const Card = (props) => {
  const { allData,callMessage,userId } = props;
  
  
  // Filter tasks based on different criteria 
  const activeTasks =allData.filter(task => task.active).length;
  const newTasks = allData.filter(task => task.newTask).length;
  const completedTasks = allData.filter(task => task.completed).length; 
  const failedTasks = allData.filter(task => task.failed).length;
 




  return (
    <div className="responsive1">
      <div className="cardresp flex flex-col py-4 gap-y-5">
        <div className="w-[20vw] min-w-[200px] card bg-gray-200 border border-gray-300 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-700 hover:text-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
          <div className="flex justify-center gap-2 items-center w-full">
            <h2 className="card-title text-xs sm:text-sm md:text-base lg:text-lg">Active Task</h2>
            <p className="bg-black text-white px-2 rounded-full text-xs sm:text-sm md:text-base lg:text-lg">{activeTasks}</p>
          </div>
        </div>
        <div className="w-[20vw] min-w-[200px] card bg-gray-200 border border-gray-300 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-700 hover:text-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
          <div className="flex justify-center gap-2 items-center w-full">
            <h2 className="card-title text-xs sm:text-sm md:text-base lg:text-lg">Completed</h2>
            <p className="bg-black text-white px-2 rounded-full text-xs sm:text-sm md:text-base lg:text-lg">{completedTasks}</p>
          </div>
        </div>
        <div className="w-[20vw] min-w-[200px] card bg-gray-200 border border-gray-300 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-700 hover:text-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
          <div className="flex justify-center gap-2 items-center w-full">
            <h2 className="card-title text-xs sm:text-sm md:text-base lg:text-lg">Failed</h2>
            <p className="bg-black text-white px-2 rounded-full text-xs sm:text-sm md:text-base lg:text-lg">{failedTasks}</p>
          </div>
        </div>
        <div className="w-[20vw] min-w-[200px] card bg-gray-200 border border-gray-300 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-700 hover:text-white hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
          <div className="flex justify-center gap-2 items-center w-full">
            <h2 className="card-title text-xs sm:text-sm md:text-base lg:text-lg">New Task</h2>
            <p className="bg-black text-white px-2 rounded-full text-xs sm:text-sm md:text-base lg:text-lg">{newTasks}</p>
          </div>
        </div>
      </div>

      <MessageBox callMessage={callMessage} userId={userId}/>
    </div>
  );
}

export default Card;
