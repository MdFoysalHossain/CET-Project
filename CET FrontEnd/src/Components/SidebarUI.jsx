import React, { useContext, useEffect, useState } from "react";
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
  Activity,
  CornerDownRight,
  FileBox
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AccountProvidor";
import { SettingsContext } from "../Context/SettingsProvidor";

const SidebarUI = () => {
  const { isLoggedIn, googlePopUpLogin, accountDetails, googleSignOut, accountLoading, setAccountDetails, setIsLoggedIn, setAccountLoading } =
    useContext(AuthContext);



  const { backEndUrl } = useContext(SettingsContext)

  const [activeProject, setActiveProject] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Sidebar Rendered. isLoggedIn:", isLoggedIn, "accountDetails:", accountDetails, "accountLoading:", accountLoading);
    if (accountDetails) {
      setIsLoggedIn(true);
      setAccountLoading(false);
    } else if (!accountDetails && !accountLoading && !isLoggedIn) {
      navigate("/Login")
    }
  }, [isLoggedIn, navigate, accountLoading, accountDetails, setIsLoggedIn, setAccountLoading]);

  const handleLogout = async () => {
    await fetch(backEndUrl + "/Logout", {
      method: "POST",
      credentials: "include" // ⭐ important
    });

    setAccountDetails(null);
    setIsLoggedIn(false);

    navigate("/Login");
  };

  const projects = [
    { name: "Untitled UI icons", color: "bg-purple-500" },
    { name: "Marketing site 2.0", color: "bg-blue-500" },
    { name: "Blog navigation", color: "bg-green-500" },
    { name: "Design system", color: "bg-pink-500" },
    { name: "Waitlist pages", color: "bg-gray-400" }
  ];

  const menu = [
    { icon: Blocks, label: "Dashboard", to: "/Dashboard" },
    { icon: FileBox, label: "Client", to: "/Dashboard/Client" },
    { icon: Folder, label: "Projects", to: "/Dashboard/Projects" },
    {
      icon: CheckSquare,
      label: "My Tasks",
      children: [
        { label: "bKash Website Redesign", to: "/Dashboard/Projects/MyTasks" },
        { label: "Rocket App Backend Design", to: "/Dashboard/Projects/MyTasks" },
        { label: "Nagad Attachement", to: "/Dashboard/Projects/MyTasks" }
      ]
    },
    { icon: CalendarRange, label: "Schedule", to: "/Dashboard/Calendar" },
    { icon: Users, label: "Users", to: "/Dashboard/Users" },
    { icon: Activity, label: "Insights", to: "/Dashboard/Users" },
    { icon: Bell, label: "Notification" }
  ];

  const systemMenu = [
    { icon: Frame, label: "Backlog", to: "/Dashboard/Projects" },
    { icon: Settings, label: "Settings", to: "/Dashboard" },
    { icon: Info, label: "Help", to: "/Dashboard/Projects" }
  ];



  return (
    <div className="w-64 h-screen bg-white flex flex-col font-jukarta border-r border-[#e5e7eb] fixed left-0 top-0 z-100">

      {/* HEADER */}
      <div className="border-b border-[#e5e7eb] p-4 flex items-center justify-center">
        <h2 className="flex items-center gap-2 font-bold text-2xl text-blue-500">
          TrackLio
        </h2>
      </div>

      {/* MENU */}
      <div className="font-semibold text-black p-4">
        <div className="text-left text-xs uppercase mb-2 text-gray-500">
          General
        </div>

        <div className="flex flex-col gap-1">

          {menu.map((item, i) => (
            <div key={i}>

              {/* PARENT */}
              {item.to && !item.children ? (
                <Link
                  to={item.to}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-semibold text-[15px]"
                >
                  <item.icon strokeWidth={2.25} size={16} />
                  <span>{item.label}</span>
                </Link>
              ) : (
                <div
                  onClick={() =>
                    item.children
                      ? setOpenMenu(openMenu === item.label ? null : item.label)
                      : null
                  }
                  className="flex justify-between items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition font-semibold text-[15px]"
                >
                  <div className="flex items-center gap-2">
                    <item.icon strokeWidth={2.25} size={16} />
                    <span>{item.label}</span>
                  </div>

                  {item.children && (
                    <ChevronRight
                      size={16}
                      className={`transition ${openMenu === item.label ? "rotate-90" : ""
                        }`}
                    />
                  )}
                </div>
              )}

              {/* CHILDREN */}
              {item.children && openMenu === item.label && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  {item.children.map((child, idx) => (
                    <Link
                      key={idx}
                      to={child.to}
                      className="text-sm text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-100 flex items-center gap-2"
                    >
                      <CornerDownRight size={18} strokeWidth={2} />
                      <span className="line-clamp-1">{child.label}</span>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* SYSTEM MENU */}
      <div className="font-semibold text-black p-4 border-t border-[#e5e7eb]">
        <div className="text-left text-xs uppercase mb-2 text-gray-500">
          System
        </div>

        <div className="flex flex-col gap-1">
          {systemMenu.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-semibold text-[15px]"
            >
              <item.icon strokeWidth={2.25} size={16} />
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* USER SECTION */}
      <div className="h-full flex items-center p-4 flex-col gap-5 justify-end border-t border-[#e5e7eb]">

        {isLoggedIn ? (
          <div className="w-full">
            <div className="border border-gray-200 rounded-sm flex items-center w-full px-2 mb-1">
              <div className="h-10 w-10 bg-indigo-200 rounded-lg overflow-hidden flex justify-center items-center text-xl text-indigo-500 font-bold">
                {
                    accountDetails._id ? accountDetails.name[0] : accountDetails?.displayName[0] || <img src={accountDetails?.photoURL} alt="" /> 
                  }
              </div>

              <div className="text-left p-2">
                <p className="text-sm text-gray-600">Logged in as</p>
                <h2 className="font-bold text-md">
                  {/* {accountDetails?.displayName} */}
                  {
                    accountDetails._id ? accountDetails.name : accountDetails?.displayName
                  }
                </h2>
              </div>
            </div>


            {
              accountDetails._id ? <button
                className="btn bg-indigo-500 text-white border-0 w-full"
                onClick={handleLogout}
              >
                Log account Out
              </button> : <button
                className="btn bg-indigo-500 text-white border-0 w-full"
                onClick={googleSignOut}
              >
                Log Out
              </button>

            }

          </div>
        ) : (
          <button
            className="btn bg-white text-black border-[#e5e5e5]"
            onClick={googlePopUpLogin}
          >
            Login with Google
          </button>
        )}
      </div>

    </div>
  );
};

export default SidebarUI;