import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import HomeRoot from "./Root/HomeRoot.jsx";
import DashboardHome from "./Pages/Projects/DashboardHome.jsx";
import DashbordProjects from "./Pages/Projects/DashbordProjects.jsx";
import ProjectInputForm from "./Pages/Projects/Components/Projects/ProjectInputForm.jsx";
import SingleProjectPage from "./Pages/Projects/Components/SingleProject/SingleProjectPage.jsx";
import TaskPage from "./Pages/TaskPage/TaskPage.jsx";
import CalendarPage from "./Pages/Calander/CalendarPage.jsx";
import Allusers from "./Pages/Users/Allusers.jsx";
import DashboardPage from "./Pages/Dashboard/DashboardPage.jsx";
import AccountProvidor from "./Context/AccountProvidor.jsx";
import SettingsProvider from "./Context/SettingsProvidor.jsx";

const router = createBrowserRouter([
  {
    path: "/Dashboard",
    element: <HomeRoot />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "/Dashboard/Projects",
        element: <DashbordProjects />
      },
      {
        path: "/Dashboard/Projects/:id",
        element: <SingleProjectPage />
      },
      {
        path: "/Dashboard/Projects/create",
        element: <ProjectInputForm />
      },
      {
        path: "/Dashboard/Projects/MyTasks",
        element: <TaskPage />
      },
      {
        path: "/Dashboard/Calendar",
        element: <CalendarPage />
      },
      {
        path: "/Dashboard/Users",
        element: <Allusers />
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <SettingsProvider>
    <AccountProvidor>
      <RouterProvider router={router} />
    </AccountProvidor>
  </SettingsProvider>
  // <RouterProvider router={router} />,
);
