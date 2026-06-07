import React from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App";

import "./src/styles/global.css";
import "./src/styles/admin.css";
import "./src/styles/responsive.css";

import CartProvider from "./src/context/CartContext";

import AuthProvider from "./src/context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <AuthProvider>

      <CartProvider>

        <App />

      </CartProvider>

    </AuthProvider>

  </React.StrictMode>

);