

const employees = [
  {
    id: 1,
    firstName: "Sachin",
    email: "sachin@e.com",
    password: "123",
    taskStats: { active: 2, newTask: 10, completed: 8, failed: 0},
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue where users can't login with correct credentials",
        date: "2025-07-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update user profile UI",
        description: "Redesign the profile section as per new Figma file",
        date: "2025-07-12",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Write unit tests for the authentication module",
        date: "2025-07-10",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "priya@e.com",
    password: "123",
    taskStats: { active: 1, newTask: 4, completed: 2, failed: 1},
    tasks: [
      {
        title: "Database backup",
        description: "Schedule and test daily database backup",
        date: "2025-07-14",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add search filter",
        description: "Implement filter functionality in the dashboard search",
        date: "2025-07-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API response check",
        description: "Ensure all APIs return valid status codes and messages",
        date: "2025-07-09",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Client meeting",
        description: "Attend the weekly sync-up with the client team",
        date: "2025-07-08",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Aman",
    email: "aman@e.com",
    password: "123",
    taskStats: { active: 2, newTask: 2, completed: 2, failed: 1},
    tasks: [
      {
        title: "Design new dashboard",
        description: "Create a modern dashboard UI for admins",
        date: "2025-07-13",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix image upload",
        description: "Resolve image upload issue on mobile",
        date: "2025-07-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Typography update",
        description: "Update font styles as per branding guide",
        date: "2025-07-11",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Accessibility audit",
        description: "Check app for WCAG 2.1 compliance",
        date: "2025-07-12",
        category: "Audit",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Optimize images",
        description: "Compress and lazy load all images",
        date: "2025-07-13",
        category: "Performance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "neha@e.com",
    password: "123",
    taskStats: { active: 1, newTask: 3, completed: 1, failed: 1, total: 3 },
    tasks: [
      {
        title: "Fix console errors",
        description: "Remove all console errors in dev tools",
        date: "2025-07-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Set up CI/CD",
        description: "Automate deployment process for staging branch",
        date: "2025-07-11",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "User feedback analysis",
        description: "Summarize feedback from recent beta test",
        date: "2025-07-12",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Ravi",
    email: "ravi@e.com",
    password: "123",
    taskStats: { active: 0, newTask: 3, completed: 2, failed: 1},
    tasks: [
      {
        title: "Bug triage",
        description: "Review and categorize bugs from bug tracker",
        date: "2025-07-13",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Security patch",
        description: "Apply latest security patch to the server",
        date: "2025-07-12",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write documentation",
        description: "Document the new API endpoints",
        date: "2025-07-11",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create test cases",
        description: "Prepare test cases for new features",
        date: "2025-07-10",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Anjali",
    email: "anjali@e.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return {employees, admin}
}