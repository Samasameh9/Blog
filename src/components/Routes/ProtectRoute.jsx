import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


export default function ProtectedRoute() {
  const { id } = useAuth();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}