import React from "react";
import DashboardNav from "../components/Dashboard/DashboardNav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <DashboardNav />

      {children}
    </div>
  );
}

export default Layout;
