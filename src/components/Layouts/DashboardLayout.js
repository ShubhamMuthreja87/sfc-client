import DashboardNavbar from "../pageComponents/dashboardLayout/DashboardNavbar";
import DashboardSidebar from "../pageComponents/dashboardLayout/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
