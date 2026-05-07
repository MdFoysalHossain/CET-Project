import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import SidebarUI from '../Components/SidebarUi';
import { AuthContext } from '../Context/AccountProvidor';

const HomeRoot = () => {
  const { sessionChecked, accountLoading, accountDetails} = useContext(AuthContext);
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const bothDone = sessionChecked && !accountLoading;
    if (!bothDone) return;

    console.log("BOTH CHECKED", bothDone)
    setChecked(bothDone)


  }, [sessionChecked, accountLoading, checked]);
  return (
    <div className="flex h-screen w-screen gap-0 overflow-hidden ">

      {/* Sidebar */}
      <div className="w-[260px] -mr-0 h-screen bg-gray-50 shrink-0">
        <SidebarUI />
      </div>

      {
        checked && !accountDetails ?
          <div className="flex items-center justify-center h-screen w-screen bg-white absolute z-1000">
            <span className="loading loading-infinity loading-xl text-indigo-500 scale-200"></span> {/* or your spinner component */}
          </div>
          :
          <div className="flex-1 h-screen overflow-y-auto bg-gray-50">
            <Outlet />
          </div>
      }

      {/* Main Content */}


    </div>
  );
};

export default HomeRoot;