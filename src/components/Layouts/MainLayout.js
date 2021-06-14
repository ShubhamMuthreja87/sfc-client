import { Outlet } from "react-router-dom";
import MainNavbar from "../pageComponents/mainLayout/MainNavbar";

const MainLayout = () => (
  <div>
    <MainNavbar />
    <Outlet />
  </div>
);

export default MainLayout;
