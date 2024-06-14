import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AdminDashboard from "../Pages/AdminDashboard";
import Otp from "../Pages/Otp";
import UserDashboard from "../Pages/UserDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/optverify',
        element: <Otp />
      },
      {
        path: '/admin/dashboard',
        element: <AdminDashboard />
      },
      {
        path: '/user/dashboard',
        element: <UserDashboard />
      }
    ],
  },
]);
