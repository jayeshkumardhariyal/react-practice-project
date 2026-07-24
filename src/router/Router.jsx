import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllEmployees from "../pages/AllEmployees";
import CreateEmployee from "../pages/CreateEmployee";
import EditEmployees from "../pages/EditEmployees";
import Layout from "../components/Layout";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/create",
        element: <CreateEmployee />,
      },
      {
        path: "/all",
        element: <AllEmployees />,
      },
      {
        path: "/edit/:id",
        element: <EditEmployees />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
