import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

import AdminRoute from "../components/AdminRoute";

import Dashboard
from "./src/Dashboard";

import AdminProducts
from "./src/Products";

import Upload
from "./src/Upload";

import Orders
from "./src/Orders";

import Analytics
from "./src/Analytics";

import Settings
from "./src/Settings";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/admin"
          element={
            user?.role === "admin"
              ? <Dashboard />
              : <Navigate to="/" />
          }
        />


        <Route
          path="/admin/products"
          element={<AdminProducts />}
        />

        <Route
          path="/admin/upload"
          element={<Upload />}
        />

        <Route
          path="/admin/orders"
          element={<Orders />}
        />

        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
    
  );

}

export default App;