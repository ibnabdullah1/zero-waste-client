import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="Raleway max-w-7xl mx-auto bg-gray-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
