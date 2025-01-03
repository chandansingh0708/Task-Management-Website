import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useDataContext } from '../useContext/Context';
import Employeestasks from '../EmployeesComponents/Employeestasks'; // Ensure correct import path
import Cards from '../EmployeesComponents/Card';

export default function Employees(props) {
    const { allData, handleLogout, loggedInUser, updateTasks,callMessage  } = props; // Ensure updateTasks is received as a prop
    const [updatedTasks, setUpdatedTasks] = useState([]);

    useEffect(() => {
        // Check if allData and loggedInUser exist to prevent errors
        if (allData && loggedInUser && allData.Employees) {
            // Find the tasks for the logged-in user and update the state
            const userTasks = allData.Employees.find(emp => emp.id.toString() === loggedInUser.id.toString())?.tasks || [];
            setUpdatedTasks(userTasks);
        }
    }, [allData, loggedInUser]); // Dependency array to listen for changes in allData and loggedInUser

    return (
        <div className=''>
            <Header allData={loggedInUser} handleLogout={handleLogout} />
            {/* Only render Employeestasks if tasks are available */}
            {updatedTasks.length > 0 ? (
                <Employeestasks tasks={updatedTasks} userId={loggedInUser.id} updateTasks={updateTasks} />
            ) : (
                <p>No tasks available.</p> // Handle the case when there are no tasks
            )}
            <Cards allData={updatedTasks} callMessage={callMessage} userId={loggedInUser.id} />
        </div>
    );
}
