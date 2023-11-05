import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import AddFood from "../Componets/AddFood/AddFood";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Componets/AvailableFoods/AvailableFoods";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;
