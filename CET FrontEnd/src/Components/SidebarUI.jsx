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
  MessageSquareDot,
  Blocks,
  Settings,
  Info,
  CalendarRange
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
    { icon: Blocks, label: "Dashboard", to: "/Dashboard" },
    { icon: Folder, label: "Projects", to: "/Dashboard/Projects" },
    { icon: CheckSquare, label: "Tasks", to: "/Dashboard/Projects/MyTasks" },
    { icon: CalendarRange, label: "Schedule", to: "/Dashboard/Calendar" },
    { icon: Users, label: "Users", to: "/Dashboard/Users" },
    { icon: Bell, label: "Notification" }
  ];
  const systemMenu = [
    // { icon: Home, label: "Home" },
    { icon: Settings, label: "Settings", to: "/Dashboard" },
    { icon: Info, label: "Help", to: "/Dashboard/Projects" },
  ];

  return (
    <div className="w-64 h-screen bg-white flex flex-col font-jukarta border-r border-[#e5e7eb] fixed left-0 top-0">

      <div className="border-b border-[#e5e7eb] p-4 flex items-center justify-center">
        <h2 className="flex items-center gap-2 font-bold text-2xl text-blue-500">
          PROXT
        </h2>
      </div>

      {/* MENU */}
      <div className=" font-semibold text-black p-4 ">

        <div className="">
          <div className="text-left text-xs second-color font-semibold  uppercase mb-2">
            <span className="text-gray-500">General</span>
          </div>

          <div className="flex flex-col gap-1">
            {menu.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="flex justify-between text-[15px] text-black items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition font-semibold"
              >
                <div className="flex items-center gap-2">
                  <item.icon strokeWidth={2.25} size={16} />
                  {item.label}
                </div>

                <div className={`bg-gray-200 rounded-md h-6 w-6 flex justify-around items-center text-xs text-gray-700 ${item.label === "Notification" ? "block" : "hidden"}`}>
                  2
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>




      <div className=" font-semibold text-black p-4 border-t border-[#e5e7eb]">

        <div className="">
          <div className="text-left text-xs second-color font-semibold  uppercase mb-2">
            <span className="text-gray-500">System</span>
          </div>

          <div className="flex flex-col gap-1">
            {systemMenu.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="flex text-[15px] text-black items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition font-semibold"
              >
                <item.icon strokeWidth={2.25} size={16} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-2 p-4 border-t border-[#e5e7eb]">

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