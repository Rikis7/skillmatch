import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import React, { JSX } from "react";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { currentUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return currentUser ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
