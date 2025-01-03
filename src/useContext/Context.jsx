import React, { createContext, useContext, useState, useEffect } from 'react';
import { CallLocalStorage, GetLocalStorage } from '../AllData/LocalStorage';

const DataContext = createContext();

export function DataProvider({ children }) {
    const [data, setData] = useState({ Employees: [], Admin: [] });

    useEffect(() => {
        const { Employees, Admin } = GetLocalStorage();
        setData({ Employees, Admin });
        console.log("DataProvider initialized data:", { Employees, Admin }); // Log the data fetched from local storage
    }, []);

    const updateData = (updatedEmployees, updatedAdmin) => {
        setData({ Employees: updatedEmployees, Admin: updatedAdmin });
        CallLocalStorage(updatedEmployees, updatedAdmin);
    };

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => {
    return useContext(DataContext);
};
