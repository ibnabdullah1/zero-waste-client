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
import ManageFoods from "../Componets/ManageFoods/ManageFoods";
import FoodUpdate from "../Componets/FoodUpdate/FoodUpdate";
import ManageFood from "../Componets/ManageFood/ManageFood";
import RequestFoods from "../Componets/MyRequestFoods/RequestFoods";
import PrivateRoute from "./PrivateRoutes";

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
        element: (
          <PrivateRoute>
            {" "}
            <FoodDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://zero-waste-server.vercel.app/highestQuantity/${params.id}`
          ),
      },
      {
        path: "/availableFoods/:id",
        element: (
          <PrivateRoute>
            <AvailableFoodDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://zero-waste-server.vercel.app/foods/${params.id}`),
      },

      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/managefoods",
        element: (
          <PrivateRoute>
            {" "}
            <ManageFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/foodRequest",
        element: (
          <PrivateRoute>
            <RequestFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/managefoods/update/:_id",
        element: (
          <PrivateRoute>
            {" "}
            <FoodUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://zero-waste-server.vercel.app/managefoods/${params._id}`
          ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/managefood/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ManageFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://zero-waste-server.vercel.app/managefoods/${params.id}`
          ),
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
