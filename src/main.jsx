import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import PublicRoute from "./components/Routes/PublicRoute.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/Routes/ProtectRoute.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register/>,
          },
        ],
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path: "/home",
            element: <Home/>,
          },
          {
            path: "/profile",
            element: <Profile/>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
