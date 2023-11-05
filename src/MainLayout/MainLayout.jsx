import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="Raleway max-w-7xl mx-auto bg-gray-100">
      <Navbar />
      <Outlet />
      <h2>This is footer</h2>
    </div>
  );
};

export default MainLayout;
