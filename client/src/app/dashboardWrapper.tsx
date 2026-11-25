import Navbar from "@/components/Navbar";
import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900 light">
      {/* SIDEBAR */}

      <main className="flex h-full w-full flex-col bg-gray-50 px-9 py-7 md:pl-24">
        {/* NAVBAR */}
        <Navbar />

        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
