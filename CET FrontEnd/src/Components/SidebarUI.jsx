import React, { useState } from "react";
import {
  Home,
  LayoutDashboard,
  Folder,
  CheckSquare,
  BarChart3,
  Users,
  ChevronRight,
  Bell,
  BellDot,
  MessageSquare,
  MessageSquareDot 
} from "lucide-react";
import { Link } from "react-router";

const SidebarUI = () => {

  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { name: "Untitled UI icons", color: "bg-purple-500" },
    { name: "Marketing site 2.0", color: "bg-blue-500" },
    { name: "Blog navigation", color: "bg-green-500" },
    { name: "Design system", color: "bg-pink-500" },
    { name: "Waitlist pages", color: "bg-gray-400" }
  ];

  const menu = [
    // { icon: Home, label: "Home" },
    { icon: LayoutDashboard, label: "Dashboard", to: "/Dashboard" },
    { icon: Folder, label: "Projects", to: "/Dashboard/Projects"},
    { icon: CheckSquare, label: "Tasks" },
    { icon: BarChart3, label: "Reporting" },
    { icon: Users, label: "Users" },
    { icon: Bell, label: "Notification" }
  ];

  return (
    <div className="w-64 h-screen bg-white p-4 flex flex-col font-rubik border-r border-[#e5e7eb] fixed left-0 top-0">

      <h2 className="mb-6 flex items-center gap-2 font-bold">
        CET PROJECT
      </h2>

      {/* MENU */}
      <div className="space-y-2 font-semibold text-black">
        {menu.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="flex text-black items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
          >
            <item.icon strokeWidth={2.5} size={18} />
            {item.label}
          </Link>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="mt-8">
        
        <div className="flex justify-between items-center mb-3">
          <p className="text-xs second-color font-semibold">Clients</p>
          <div className="">
            <button className="main-color w-5 h-5 border flex justify-center items-center rounded-md text-lg cursor-pointer">+</button>
          </div>
        </div>

        <div className="space-y-2">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setActiveProject(p.name)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition ${activeProject === p.name ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${p.color}`} />
                <span className="second-color font-semibold">{p.name}</span>
              </div>

              <ChevronRight size={16} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SidebarUI;