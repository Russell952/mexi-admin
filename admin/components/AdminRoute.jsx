import { useContext } from "react";

import {
  Navigate
} from "react-router-dom";

import {
  AuthContext
} from "../context/AuthContext";

function AdminRoute({ children }) {

  const { user } =
    useContext(AuthContext);

  // Not logged in
  if(!user){

    return <Navigate to="/login" />;

  }

  // Not admin
  if(user.role !== "admin"){

    return <Navigate to="/" />;

  }

  return children;

}

export default AdminRoute;