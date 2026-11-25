"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900 light">
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
