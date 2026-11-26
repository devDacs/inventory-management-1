"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div
      className={`fixed z-40 flex h-full flex-col overflow-hidden bg-white shadow-md transition-all duration-300 ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"}`}
    >
      {/* TOP LOGO */}
      <div
        className={`flex items-center justify-between gap-3 pt-8 md:justify-normal ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={`text-2xl font-extrabold ${isSidebarCollapsed ? "hidden" : "block"}`}
        >
          DACSTOCK
        </h1>

        <button
          className="rounded-full bg-gray-100 px-3 py-3 hover:bg-blue-100 md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="mt-8 flex-grow"></div>

      {/* FOOTER */}
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2026 DacStock
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
