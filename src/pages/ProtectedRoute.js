import React from "react";
import { UserContext } from "../context/UserContext";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
}

export default ProtectedRoute;
