import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default RootLayout;
