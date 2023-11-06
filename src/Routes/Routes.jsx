import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import AddFood from "../Componets/AddFood/AddFood";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Componets/AvailableFoods/AvailableFoods";
import FoodDetails from "../Pages/Home/FoodDetails";
import AvailableFoodDetails from "../Componets/AvailableFoods/AvailableFoodDetails";
import RequestFoods from "../Componets/RequestFoods/RequestFoods";

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
        path: "/highestQuantity/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/highestQuantity/${params.id}`),
      },
      {
        path: "/availableFoods/:id",
        element: <AvailableFoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },

      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/foodRequest",
        element: <RequestFoods />,
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
