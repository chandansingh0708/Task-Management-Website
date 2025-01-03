const UsersData = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "employee1@company.com",
        "password": "123",
        "taskCounts": {
            "active": 5,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
       
            {
                "active": true,
                "failed": false,
                "taskTitle": "create a website",
                "taskDescription": "create only responsive header and footer.",
                "newTask": true,
                "completed": false,
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
         
            
            {
                "active": true,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "newTask": true,
                "completed": false,
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker and track user ip addresses and also track user mouseEvents.",
                "taskDate": "2024-10-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Bhavna",
        "email": "employee2@company.com",
        "password": "456",
        "taskCounts": {
            "active": 3,
            "newTask": 2,
            "completed": 5,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare quarterly report",
                "taskDescription": "Compile and analyze quarterly financial data",
                "taskDate": "2024-11-15",
                "category": "Finance" 
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Budget planning",
                "taskDescription": "Draft the budget plan for next fiscal year",
                "taskDate": "2024-12-01",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Team meeting",
                "taskDescription": "Weekly sync-up with the finance team",
                "taskDate": "2024-11-20",
                "category": "Meeting"
            }
            
        ]
    },
    {
        "id": 3,
        "firstName": "Khusi",
        "email": "employee3@company.com",
        "password": "789",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 4,
            "failed": 0
        },
        
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Server maintenance",
                "taskDescription": "Perform routine maintenance on servers",
                "taskDate": "2024-11-18",
                "category": "IT" 
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Network upgrade",
                "taskDescription": "Upgrade office network infrastructure",
                "taskDate": "2024-11-25",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Security audit",
                "taskDescription": "Conduct security audit and report findings",
                "taskDate": "2024-11-10",
                "category": "IT"
            }
        ]
    }
];
const defaultAdmin = [{
    id: 1,
    firstName: "Chandan Singh",
    email: "admin@example.com",
    password: "123",
    role: "Admin"
}];

export const GetLocalStorage = () => {
    let Employees = JSON.parse(localStorage.getItem("Employees")) || [];
    let Admin = JSON.parse(localStorage.getItem("Admin")) || [];
    
    if (Admin.length === 0) {
        Admin = defaultAdmin;
        localStorage.setItem("Admin", JSON.stringify(Admin));
       
    }

    if (Employees.length === 0) {
        Employees = UsersData;
        localStorage.setItem("Employees", JSON.stringify(Employees));
  // Log the initial data
    }
    
    return { Employees, Admin };
};

export const CallLocalStorage = (updatedEmployees, updatedAdmin) => {
    localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
    localStorage.setItem("Admin", JSON.stringify(updatedAdmin));
   
};

