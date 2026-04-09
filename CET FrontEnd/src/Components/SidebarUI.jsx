import React, { useContext, useState } from "react";
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
  CalendarRange,
  Frame,
  ChartNoAxesCombined,
  Activity
} from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AccountProvidor";
import { SettingsContext } from "../Context/SettingsProvidor";


const SidebarUI = () => {
  const { isLoggedIn, googlePopUpLogin, accountDetails, googleSignOut } = useContext(AuthContext)

  const [activeProject, setActiveProject] = useState(null);

  console.log("User Logged in?", accountDetails)

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
    { icon: Activity, label: "Insights", to: "/Dashboard/Users" },
    { icon: Bell, label: "Notification" }
  ];
  const systemMenu = [
    // { icon: Home, label: "Home" },
    { icon: Frame, label: "Backlog", to: "/Dashboard/Projects" },
    { icon: Settings, label: "Settings", to: "/Dashboard" },
    { icon: Info, label: "Help", to: "/Dashboard/Projects" },
  ];

  return (
    <div className="w-64 h-screen bg-white flex flex-col font-jukarta border-r border-[#e5e7eb] fixed left-0 top-0 z-100">

      <div className="border-b border-[#e5e7eb] p-4 flex items-center justify-center">
        <h2 className="flex items-center gap-2 font-bold text-2xl text-blue-500">
          TrackLio
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
      <div className="mt-2 p-4 border-t border-[#e5e7eb] hidden">

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


      <div className="  h-full flex items-center  p-4 flex-col gap-5 justify-end border-t border-[#e5e7eb]">


        {
          isLoggedIn ?
            <div className="w-full">
              <div className="border border-gray-200 rounded-sm flex items-center w-full px-2 mb-1">
                <div className="h-10 w-10 bg-gray-200 rounded-lg overflow-hidden">
                  <img src={accountDetails?.photoURL} alt="" />
                </div>

                <div className="text-left p-2">
                  <p className="text-sm text-gray-600">Logged in as</p>
                  <h2 className="font-bold text-md">{accountDetails?.displayName}</h2>
                </div>
              </div>

              <button className="btn bg-indigo-500 text-white border-0  w-full " onClick={googleSignOut}>
                Log Out
              </button>
            </div> :
            <button className="btn bg-white text-black border-[#e5e5e5] " onClick={googlePopUpLogin}>
              <svg aria-label="Google logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
        }
      </div>

    </div>
  );
};

export default SidebarUI;