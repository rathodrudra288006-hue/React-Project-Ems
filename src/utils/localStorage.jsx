const employee = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription:
          "Create a responsive login page for the EMS application.",
        taskDate: "2026-09-20",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription:
          "Fix the navigation bar alignment and responsive issues.",
        taskDate: "2026-09-21",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Homepage",
        taskDescription:
          "Develop the main homepage layout for the application.",
        taskDate: "2026-09-18",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect the employee dashboard with the backend API.",
        taskDate: "2026-09-23",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        taskDescription: "Configure the initial employee database tables.",
        taskDate: "2026-09-17",
        category: "Database",
      },
    ],
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build the employee dashboard with task statistics.",
        taskDate: "2026-09-20",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Cards",
        taskDescription: "Create reusable cards for displaying employee tasks.",
        taskDate: "2026-09-22",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Router",
        taskDescription:
          "Configure routes for login, dashboard and profile pages.",
        taskDate: "2026-09-18",
        category: "React",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test all dashboard components and fix UI issues.",
        taskDate: "2026-09-24",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Profile Page",
        taskDescription:
          "Create an employee profile page with personal information.",
        taskDate: "2026-09-16",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Logout Function",
        taskDescription: "Implement logout functionality for employees.",
        taskDate: "2026-09-25",
        category: "Authentication",
      },
    ],
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Registration Form",
        taskDescription: "Develop a registration form for new employees.",
        taskDate: "2026-09-21",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription:
          "Add validation for email, password and required fields.",
        taskDate: "2026-09-19",
        category: "JavaScript",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Authentication",
        taskDescription:
          "Implement employee authentication using email and password.",
        taskDate: "2026-09-23",
        category: "Authentication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Mobile Layout",
        taskDescription: "Make the application responsive on mobile devices.",
        taskDate: "2026-09-15",
        category: "CSS",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Error Handling",
        taskDescription: "Add proper error messages for failed login attempts.",
        taskDate: "2026-09-26",
        category: "JavaScript",
      },
    ],
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee List",
        taskDescription:
          "Display all employees in a table on the admin dashboard.",
        taskDate: "2026-09-20",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Search Employees",
        taskDescription: "Add a search feature to find employees quickly.",
        taskDate: "2026-09-22",
        category: "JavaScript",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Employee Table",
        taskDescription: "Create the basic employee table structure.",
        taskDate: "2026-09-18",
        category: "UI",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Filter Tasks",
        taskDescription: "Add filters for active, completed and failed tasks.",
        taskDate: "2026-09-24",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Sorting Feature",
        taskDescription: "Add sorting functionality to the employee table.",
        taskDate: "2026-09-17",
        category: "JavaScript",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Admin Dashboard",
        taskDescription: "Build the main dashboard for the administrator.",
        taskDate: "2026-09-27",
        category: "Dashboard",
      },
    ],
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate employee task performance reports.",
        taskDate: "2026-09-21",
        category: "Reports",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Task Statistics",
        taskDescription:
          "Display total, active, completed and failed task counts.",
        taskDate: "2026-09-19",
        category: "Analytics",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Chart",
        taskDescription: "Create charts to display employee performance.",
        taskDate: "2026-09-23",
        category: "Analytics",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Export Report",
        taskDescription: "Add functionality to export employee reports.",
        taskDate: "2026-09-25",
        category: "Reports",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Notification System",
        taskDescription: "Implement notifications for newly assigned tasks.",
        taskDate: "2026-09-16",
        category: "Notifications",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
