import React from 'react';
import { Outlet } from 'react-router';
import SidebarUI from '../Components/SidebarUi';

const HomeRoot = () => {
  return (
    <div className="flex items-start gap-[1px] h-screen w-screen">

      {/* Sidebar */}
      <div className="w-72 bg-white">
        <SidebarUI />
      </div>

      {/* Main Content */}
      <div className="w-full bg-white h-full">
        <Outlet />
      </div>

    </div>
  );
};

export default HomeRoot;