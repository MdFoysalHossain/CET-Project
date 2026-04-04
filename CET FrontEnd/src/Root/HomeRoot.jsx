import React from 'react';
import { Outlet } from 'react-router';
import SidebarUI from '../Components/SidebarUi';

const HomeRoot = () => {
  return (
    <div className="flex h-screen w-screen gap-0 overflow-hidden ">
      
      {/* Sidebar */}
      <div className=" h-screen bg-gray-50 shrink-0">
        <SidebarUI />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto bg-gray-50">
        <Outlet />
      </div>

    </div>
  );
};

export default HomeRoot;