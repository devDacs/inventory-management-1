"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useEffect } from "react";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`text-gray-90 flex min-h-screen w-full bg-gray-50`}>
      {/* SIDEBAR */}
      <Sidebar />

      <main
        className={`flex h-full w-full flex-col bg-gray-50 px-9 py-7 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        {/* NAVBAR */}
        <Navbar />

        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
