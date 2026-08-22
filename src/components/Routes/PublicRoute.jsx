import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


export default function PublicRoute() {
  const { id } = useAuth();

  if (id) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}