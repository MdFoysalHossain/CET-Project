import React, { use, useContext, useEffect, useRef, useState } from "react";
import { Home, LayoutDashboard, Folder, CheckSquare, BarChart3, Users, ChevronRight, Bell, BellDot, MessageSquare, MessageSquareDot, Blocks, Settings, Info, CalendarRange, Frame, ChartNoAxesCombined, Activity, CornerDownRight, FileBox, SquareTerminal, Terminal } from "lucide-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AccountProvidor";
import { SettingsContext } from "../Context/SettingsProvidor";
import Notification from "../Pages/Notification/Notification";

const SidebarUI = () => {
  const { sessionChecked, setSessionChecked, isLoggedIn, googlePopUpLogin, accountDetails, googleSignOut, accountLoading, setAccountDetails, setIsLoggedIn, setAccountLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const { backEndUrl } = useContext(SettingsContext)
  const [openMenu, setOpenMenu] = useState(null);
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [menu, setMenu] = useState([]);

  const [userData, setUserData] = useState(null)
  const [userType, setUserType] = useState(undefined)
  const [showNotifications, setShowNotifications] = useState(false);



  // 1️⃣ Fetch session user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(backEndUrl + "/me", { credentials: "include" });
        const data = await res.json();

        if (data.user) {
          setAccountDetails(data.user);
          setUserData(data.user);
          setUserType("user");
        }
      } catch {
        // network error etc.
      } finally {
        setSessionChecked(true); // ✅ /me is done regardless of result
      }
    };

    fetchUser();
  }, []);

  // 2️⃣ Handle Google login
  useEffect(() => {
    if (accountDetails?.displayName) {
      setUserData(accountDetails);
      setUserType("google");
    }
  }, [accountDetails]);

  // 3️⃣ Redirect — wait for BOTH /me AND Firebase auth to finish
  useEffect(() => {
    console.log("ACCOUNT DETAILS", accountDetails)


    const bothDone = sessionChecked && !accountLoading;
    if (!bothDone) return;
    if (accountDetails && Object.keys(accountDetails).length === 0) return;

    if (accountDetails?.displayName || userType === "user") return; // logged in ✅

    // Not sure yet — confirm 3 times before redirecting
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;

      if (accountDetails?.displayName || userType === "user") {
        clearInterval(interval); // found user, stop checking
        return;
      }

      if (attempts >= 3) {
        clearInterval(interval);
        navigate("/Login"); // confirmed: truly not logged in
      }
    }, 200); // check every 200ms, 3 times = 600ms max wait

    return () => clearInterval(interval);
  }, [sessionChecked, accountLoading, userType, accountDetails, navigate]);




  useEffect(() => {
    if (accountDetails?.accessToken) {
      setMenu(
        [
          { icon: Blocks, label: "Dashboard", to: "/Dashboard" },
          { icon: FileBox, label: "Client", to: "/Dashboard/Client" },
          { icon: Folder, label: "Projects", to: "/Dashboard/Projects" },
          { icon: CalendarRange, label: "Schedule", to: "/Dashboard/Calendar" },
          { icon: Users, label: "Users", to: "/Dashboard/Users" },
          { icon: Activity, label: "Insights", to: "/Dashboard/Insights" },
          {
            icon: Bell,
            label: "Notification", to: "/Dashboard/Notifications",
            onClick: () => setShowNotifications(prev => !prev)
          }
        ]
      )
    }

    if (accountDetails?._id) {
      setUserRole(accountDetails.role);

      fetch(backEndUrl + "/myProjects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 👈 this is the key
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          // console.log("Assigned Tasks:", data);

          const projectsWithUser = data.map((project) => ({
            label: project.name,
            to: `/Dashboard/Projects/${project._id}`,
          }));

          if (accountDetails.role === "PM") {
            setMenu([
              { icon: Blocks, label: "Dashboard", to: "/Dashboard" },
              { icon: Folder, label: "Projects", to: "/Dashboard/Projects" },
              { icon: CalendarRange, label: "Schedule", to: "/Dashboard/Calendar" },
              { icon: Activity, label: "Insights", to: "/Dashboard/Insights" },
              { icon: Users, label: "Users", to: "/Dashboard/Users" },
              {
                icon: Bell,
                label: "Notification", to: "/Dashboard/Notifications",
                onClick: () => setShowNotifications(prev => !prev)
              }
            ]
            )
          }
          else if (accountDetails.role === "QA" || accountDetails.role === "Developer" || accountDetails.role === "Designer") {
            setMenu([
              { icon: Blocks, label: "Dashboard", to: "/Dashboard" },
              // { icon: Folder, label: "Projects", to: "/Dashboard/Projects" },
              {
                icon: CheckSquare,
                label: "My Tasks",
                children: projectsWithUser?.length
                  && projectsWithUser.map(task => ({
                    label: task.label,
                    to: task.to
                  }))

              },
              { icon: CalendarRange, label: "Schedule", to: "/Dashboard/Calendar" },
              { icon: Activity, label: "Insights", to: "/Dashboard/Insights" },
              {
                icon: Bell,
                label: "Notification", to: "/Dashboard/Notifications",
                onClick: () => setShowNotifications(prev => !prev)
              }
            ]);
          } else if (accountDetails.role === "Client") {
            setMenu([
              { icon: Blocks, label: "Dashboard", to: "/Dashboard" },
              { icon: FileBox, label: "Projects", to: "/Dashboard/Client" },
              { icon: CalendarRange, label: "Schedule", to: "/Dashboard/Calendar" },
              {
                icon: Bell,
                label: "Notification", to: "/Dashboard/Notifications",
                onClick: () => setShowNotifications(prev => !prev)
              }
            ]
            )
          }
          setAssignedTasks(prev => [...prev, ...projectsWithUser]);
        });



    }
  }, [accountLoading, accountDetails, navigate, isLoggedIn, backEndUrl,]);



  const handleLogout = async () => {
    const res = await fetch(backEndUrl + "/Logout", {
      method: "POST",
      credentials: "include" // ⭐ important
    });

    const check = await res.json()

    if (check.message === "Logged out successfully") {
      console.log("LOGGED OUT")
      setAccountDetails(null);
      setIsLoggedIn(false);
      setUserData(null)
      setUserType("")
      navigate("/Login");
    }
  };

  // const menu =
  //   userRole === "PM" && [
  //     { icon: Blocks, label: "Dashboard", to: "/Dashboard" },
  //     { icon: FileBox, label: "Client", to: "/Dashboard/Client" },
  //     { icon: Folder, label: "Projects", to: "/Dashboard/Projects" },
  //     {
  //       icon: CheckSquare,
  //       label: "My Tasks",
  //       children: [
  //         { label: "bKash Website Redesign", to: "/Dashboard/Projects/MyTasks" },
  //         { label: "Rocket App Backend Design", to: "/Dashboard/Projects/MyTasks" },
  //         { label: "Nagad Attachement", to: "/Dashboard/Projects/MyTasks" }
  //       ]
  //     },
  //     { icon: CalendarRange, label: "Schedule", to: "/Dashboard/Calendar" },
  //     { icon: Users, label: "Users", to: "/Dashboard/Users" },
  //     { icon: Activity, label: "Insights", to: "/Dashboard/Insights" },
  //     {
  //   icon: Bell,
  //     label: "Notification", to: "/Dashboard/Notifications",
  //       onClick: () => setShowNotifications(prev => !prev)
  // }
  //   ];

  const systemMenu = [
    { icon: Frame, label: "Dev Logs", to: "/Dashboard/Projects" },
    { icon: Settings, label: "Settings", to: "/Dashboard" },
    { icon: Info, label: "Help", to: "/Dashboard/Projects" },
  ];





  // At the top of your component, before returning JSX
  if (!sessionChecked || accountLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white absolute z-1000">
        <span className="loading loading-infinity loading-xl text-indigo-500 scale-200"></span> {/* or your spinner component */}
      </div>
    )
  } else {
    return (
      <div className="w-64 h-screen bg-white flex flex-col font-jukarta border-r border-[#e5e7eb] left-0 top-0 z-100 relative">
        <div
          className={`fixed top-0 ${showNotifications ? "right-0" : "-right-[440px]"
            } bg-gray-50 transition-all duration-300 w-[440px] h-screen border-l border-gray-200 overflow-auto z-50`}
        >
          <Notification setShowNotifications={setShowNotifications} />
        </div>

        {/* HEADER */}
        <div className="border-b border-[#e5e7eb] p-4 flex items-center justify-center">
          <h2 className="flex items-center gap-2 font-bold text-2xl text-blue-500">
            TrackLio {userData?.role}
          </h2>
        </div>

        {/* MENU */}
        <div className="font-semibold text-black p-4">
          <div className="text-left text-xs uppercase mb-2 text-gray-500">
            General {}
          </div>

          <div className="flex flex-col gap-1">

            {menu?.map((item, i) => (
              <div key={i}>
                {/* PARENT */}
                {item.to && !item.children ? (
                  item.label === "Notification" ? (
                    <div
                      onClick={item.onClick}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-semibold text-[15px] cursor-pointer"
                    >
                      <item.icon strokeWidth={2.25} size={16} />
                      <span>{item.label}</span>
                      {console.log("ITEM LABEL", item.label)}
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition font-semibold text-[15px]"
                    >
                      <item.icon strokeWidth={2.25} size={16} />
                      <span>{item.label}</span>
                      {/* {console.log("ITEM LABEL 2",  item.label)} */}
                    </Link>
                  )
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

          {isLoggedIn && (
            <div className="w-full">
              <div className="border border-gray-200 rounded-sm flex items-center w-full px-2 mb-1">
                <div className="h-10 w-10 bg-indigo-200 rounded-lg overflow-hidden flex justify-center items-center text-xl text-indigo-500 font-bold">
                  {
                    accountDetails?._id ? accountDetails?.name[0] : <img src={accountDetails?.photoURL} alt="" />
                  }
                </div>

                <div className="text-left p-2">
                  <p className="text-sm text-gray-600">Logged in as</p>
                  <h2 className="font-bold text-md">
                    {
                      accountDetails._id ? accountDetails?.name : accountDetails?.displayName
                    }
                  </h2>
                </div>
              </div>


              {
                accountDetails._id ? <button to={"/Login"}
                  className="btn bg-indigo-500 text-white border-0 w-full"
                  onClick={handleLogout}
                >
                  Log Out
                </button> : <button to={"/Login"}
                  className="btn bg-indigo-500 text-white border-0 w-full"
                  onClick={googleSignOut}
                >
                  Log Out
                </button>

              }

            </div>
          )

            // : (
            //   <button
            //     className="btn bg-white text-black border-[#e5e5e5]"
            //     onClick={googlePopUpLogin}
            //   >
            //     Login with Google
            //   </button>
            // )

          }
        </div>

      </div>
    );
  }


};

export default SidebarUI;