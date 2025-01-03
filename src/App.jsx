import React, { useEffect, useState } from 'react';
import Login from './LoginPage/Login';
import Register from './Register/Registrer';
import Employees from './Admin&Employees/Employees';
import { CallLocalStorage, GetLocalStorage } from './AllData/LocalStorage';
import TaskForm from './Admin&Employees/Admin';

function App() {
  const [allData, setAllData] = useState({ Employees: [], Admin: [] });
  const [isAccount, setAccount] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("Fetching data from localStorage");
  
    // Directly fetch data without delay
    const data = GetLocalStorage() || { Employees: [], Admin: [] };
    console.log("Fetched allData:", data);
    setAllData(data);
  
    // Retrieve logged-in user from localStorage
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      console.log("Fetched loggedInUser:", storedUser);
      setLoggedInUser(JSON.parse(storedUser));
    }
  
    // Retrieve messages from localStorage
    const storedMessages = localStorage.getItem('employeesMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  
    // Add a delay before setting loading to false
  
      setLoading(false);
      console.log("Loading set to false");
  // 1 second delay
  }, []);
  
  const Storagecall = (newUser) => {
    const updatedEmployees = [...allData.Employees, newUser];
    const updatedAllData = {
      ...allData,
      Employees: updatedEmployees,
    };

    setAllData(updatedAllData);
    localStorage.setItem('allData', JSON.stringify(updatedAllData));
  };

  const addTask = (newTask, userId) => {
    // Check if updatedEmployees exist in localStorage, otherwise fallback to allData
    const storedData = localStorage.getItem('allData');
    let employeesData = storedData ? JSON.parse(storedData).Employees : allData.Employees;

    // Create a new Employees array with the updated task for the specific employee
    const updatedEmployees = employeesData.map(emp => {
      if (emp.id.toString().toLowerCase() === userId.toLowerCase()) { // Ensure userId is a string comparison
        return {
          ...emp,
          tasks: [...(emp.tasks || []), newTask], // Add the new task to the existing tasks
        };
      }
      return emp;
    });

    // Create a new object for allData with the updated Employees list
    const updatedAllData = {
      ...allData,
      Employees: updatedEmployees,
    };

    // Update the state with the new allData
    setAllData(updatedAllData);

    // Save the updated allData to localStorage
    localStorage.setItem('allData', JSON.stringify(updatedAllData));

    console.log("Updated Employees:", updatedEmployees);
  };

  const updateTasks = (tasks, userId) => {
    const updatedEmployees = allData.Employees.map(emp => {
      if (emp.id === userId) {
        return {
          ...emp,
          tasks: tasks,
        };
      }
      return emp;
    });

    const updatedAllData = {
      ...allData,
      Employees: updatedEmployees,
    };

    setAllData(updatedAllData);
    localStorage.setItem('allData', JSON.stringify(updatedAllData));
  };

  // Message for admin
  const callMessage = (messageContent, userId) => {
    // Retrieve existing messages from localStorage
    const storedMessages = localStorage.getItem('employeesMessages');
    const messagesArray = storedMessages ? JSON.parse(storedMessages) : [];

    // Create a new message object
    const newMessage = {
        content: messageContent,
        senderId: userId,
    };

    // Add new message to array
    const updatedMessages = [...messagesArray, newMessage];

    // Update state and localStorage
    setMessages(updatedMessages);
    localStorage.setItem("employeesMessages", JSON.stringify(updatedMessages));
};

  const handleLogin = (user) => {
    setLoggedInUser(user);
    // Save logged-in user to localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    // Clear logged-in user from localStorage
    localStorage.removeItem('loggedInUser');
  };

  // Get allData from localStorage if it exists, else fallback to state
  const storedData = localStorage.getItem('allData');
  const passedData = storedData ? JSON.parse(storedData) : allData;

  if (loading) {
    return (
      <div className='bg-black w-full h-screen flex justify-center items-center'>
        <p className='text-white text-lg'>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {!loggedInUser ? (
        isAccount ? (
          <Login setAccount={setAccount} allData={allData} onLogin={handleLogin} />
        ) : (
          <Register setAccount={setAccount} allData={allData} Storagecall={Storagecall} />
        )
      ) : (
        <div className='bg-black h-screen'>
          {loggedInUser.role === 'Admin' ? (
            <TaskForm allData={passedData} loggedInUser={loggedInUser} handleLogout={handleLogout} addTask={addTask} messages={messages} />
          ) : (
            <Employees 
              allData={passedData} // Pass the correct allData (from localStorage or state)
              handleLogout={handleLogout} 
              loggedInUser={loggedInUser} 
              updateTasks={updateTasks} 
              callMessage={callMessage} // Pass the callMessage function
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
