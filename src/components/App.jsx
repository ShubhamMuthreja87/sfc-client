import Account from "./pages/Account";
import ClientList from "./pages/ClientList";
import CreateBranch from "./pages/CreateBranch";
import CreateClient from "./pages/CreateClient";
import CreateDriver from "./pages/CreateDriver";
import CreateUser from "./pages/CreateUser";
import CreateVehicle from "./pages/CreateVehicle"
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./Layouts/DashboardLayout";
import Driver from "./pages/Driver";
import DriverList from "./pages/DriverList"
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import React from "react";
import UpdateUploadLicence from "./pageComponents/createDriver/UpdateUploadLicence";
import UpdateUploadVehicle from "./pageComponents/createVehicle/UpdateUploadVehicle";
import Vehicle from "./pages/Vehicle";
import VehicleList from "./pages/VehicleList";
import { useRoutes } from "react-router";

const App = () => {
  const [tkn, stkn] = React.useState(sessionStorage.getItem("token"));
  function setToken(userToken) {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    stkn(userToken);
  }
  const routes = useRoutes([
    {
      path: "app",
      element: <DashboardLayout />,
      children: [
        {
          path: "account",
          element: tkn ? <Account /> : <Navigate to="/login" />,
        },
        {
          path: "createUser",
          element: tkn ? <CreateUser /> : <Navigate to="/login" />,
        },
        {
          path: "createVehicle",
          element: tkn ? <CreateVehicle /> : <Navigate to="/login" />,
        },
        {
          path: "createDriver",
          element: tkn ? <CreateDriver /> : <Navigate to="/login" />,
        },
        {
          path: "createBranch",
          element: tkn ? <CreateBranch /> : <Navigate to="/login" />,
        },
        {
          path: "createClient",
          element: tkn ? <CreateClient /> : <Navigate to="/login" />,
        },
        {
          path: "dashboard",
          element: tkn ? <Dashboard /> : <Navigate to="/login" />,
        },

        {
          path: "vehicles",
          element: tkn ? <VehicleList /> : <Navigate to="/login" />,
        },
        {
          path: "drivers",
          element: tkn ? <DriverList /> : <Navigate to="/login" />,
        },
        {
          path: "clients",
          element: tkn ? <ClientList /> : <Navigate to="/login" />,
        },
        {
          path: "vehicle/:slug",
          element: tkn ? <Vehicle /> : <Navigate to="/login" />
        },
        {
          path: "driver/:slug",
          element: tkn ? <Driver /> : <Navigate to="/login" />
        },
        // {
        //   path:"client/:slug",
        //   element:tkn ? <Client />:<Navigate to="/login"/>
        // },
        {
          path: "updateAndUploadVehicle/:id/:type",
          element: tkn ? <UpdateUploadVehicle /> : <Navigate to="/login" />
        },
        {
          path: "updateAndUploadLicence/:id",
          element: tkn ? <UpdateUploadLicence /> : <Navigate to="/login" />
        },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/",
      // element: <MainLayout />,
      children: [
        {
          path: "login",
          element: tkn ? (
            <Navigate to="/app/dashboard" />
          ) : (
            <Login setToken={setToken} />
          ),
        },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/app/dashboard" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);

  return routes;
};
export default App;
