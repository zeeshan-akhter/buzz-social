import { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
