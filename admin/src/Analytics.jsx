import { useEffect, useState } from "react";

import API from "../services/api";

import AdminLayout
from "../components/AdminLayout";

function Analytics() {
  

  const [products, setProducts] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    fetchAnalytics();

  }, []);

  async function fetchAnalytics() {

    try {

      const productRes =
        await API.get("/products");

      const orderRes =
        await API.get("/orders", {
          headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")}`
          }
        });

      setProducts(productRes.data);
      setOrders(orderRes.data);

    } catch (error) {

      console.log(error);

    }

  }

  // Total revenue
  const revenue =
    orders.reduce(
      (acc, order) => acc + order.total,
      0
    );

  return (

    <AdminLayout>

      <h1 className="admin-title">
        Analytics
      </h1>

      <div className="stats-grid">

        <div className="stat-card">

          <h3>
            Total Products
          </h3>

          <p>
            {products.length}
          </p>

        </div>

        <div className="stat-card">

          <h3>
            Total Orders
          </h3>

          <p>
            {orders.length}
          </p>

        </div>

        <div className="stat-card">

          <h3>
            Revenue
          </h3>

          <p>
            ₦{revenue.toLocaleString()}
          </p>

        </div>

      </div>

      <div className="analytics-section">

        <h2>
          Recent Orders
        </h2>

        {orders.slice(0,5).map(order => (

          <div
            key={order._id}
            className="activity-card"
          >

            <p>

              <strong>
                {order.user?.name || "Customer"}
              </strong>

              {" "}placed an order of

              {" "}₦{order.total}

            </p>

          </div>

        ))}

      </div>

    </AdminLayout>

  );

}

export default Analytics;