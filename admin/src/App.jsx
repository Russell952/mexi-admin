import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminRoute from "./components/AdminRoute";

import Dashboard
from "./Dashboard";

import AdminProducts
from "./Products";

import Upload
from "./Upload";

import Orders
from "./Orders";

import Analytics
from "./Analytics";

import Settings
from "./Settings";

function App() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <BrowserRouter>

      <Routes>

         <Route
    path="/"
    element={<Navigate to="/admin" replace />}
  />

        <Route 
        path="/admin" 
        element={ 
        <ProtectedRoute>

          <AdminRoute>

            <Dashboard />

          </AdminRoute>

        </ProtectedRoute>
         } 
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>

              <AdminRoute>

                <Dashboard />

              </AdminRoute>

            </ProtectedRoute>
           }
        />


        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              
              <AdminRoute>

                <AdminProducts />
                
              </AdminRoute>

            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/upload"
          element={
            <ProtectedRoute>
              
              <AdminRoute>

                <Upload />

              </AdminRoute>

            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute>
              
              <AdminRoute>

                <Orders />

              </AdminRoute>

            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              
              <AdminRoute>

                <Analytics />
                
              </AdminRoute>

            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              
              <AdminRoute>

                <Settings />

              </AdminRoute>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
    
  );

}

export default App;