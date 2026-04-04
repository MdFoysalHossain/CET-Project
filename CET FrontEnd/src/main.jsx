import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import HomeRoot from "./Root/HomeRoot.jsx";
import DashboardHome from "./Pages/Dashboard/DashboardHome.jsx";
import DashbordProjects from "./Pages/Dashboard/DashbordProjects.jsx";
import ProjectInputForm from "./Pages/Dashboard/Components/Projects/ProjectInputForm.jsx";
import SingleProjectPage from "./Pages/Dashboard/Components/SingleProject/SingleProjectPage.jsx";
import TaskPage from "./Pages/TaskPage/TaskPage.jsx";
import CalendarPage from "./Pages/Calander/CalendarPage.jsx";
import Allusers from "./Pages/Users/Allusers.jsx";

const router = createBrowserRouter([
  {
    path: "/Dashboard",
    element: <HomeRoot/>,
    children: [
      {
        index: true,
        element: <DashboardHome/>
      },
      {
        path: "/Dashboard/Projects",
        element: <DashbordProjects/>
      },
      {
        path: "/Dashboard/Projects/:id",
        element: <SingleProjectPage/>
      },
      {
        path: "/Dashboard/Projects/create",
        element: <ProjectInputForm/>
      },
      {
        path: "/Dashboard/Projects/MyTasks",
        element: <TaskPage/>
      },
      {
        path: "/Dashboard/Calendar",
        element: <CalendarPage/>
      },
      {
        path: "/Dashboard/Users",
        element: <Allusers/>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
