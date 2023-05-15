import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar user={user} />
      <Outlet />
    </div>
  );
};

export default RootLayout;
