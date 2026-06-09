import { useEffect, useState } from "react";
import API from "./services/api";
import SideBar from "./components/SideBar";
import Topbar from "./components/TopBar";
import AdminLayout from "./components/AdminLayout";


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");

      const productRes = await API.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const orderRes = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(productRes.data);
      setOrders(orderRes.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const totalRevenue = orders.reduce(
    (acc, order) => acc + order.total,
    0
  );

  return (
    <AdminLayout>

    <div className="admin-layout">

      <main className="admin-main">
        <h1 className="admin-title">
          Dashboard
        </h1>

        {loading ? (
          <p>Loading dashboard...</p>
        ) : (
          <>
            <div className="stats-grid">

              <div className="stat-card">
                <h2>Total Products</h2>
                <p>{products.length}</p>
              </div>

              <div className="stat-card">
                <h2>Total Orders</h2>
                <p>{orders.length}</p>
              </div>

              <div className="stat-card">
                <h2>Total Revenue</h2>
                <p>₦{totalRevenue}</p>
              </div>

            </div>

            <div className="recent-section">

              <div className="recent-card">
                <h2>Recent Products</h2>

                {products.slice(0, 5).map((product) => (
                  <div
                    key={product._id}
                    className="recent-item"
                  >
                    <p>{product.name}</p>
                    <span>₦{product.price}</span>
                  </div>
                ))}
              </div>

              <div className="recent-card">
                <h2>Recent Orders</h2>

                {orders.slice(0, 5).map((order) => (
                  <div
                    key={order._id}
                    className="recent-item"
                  >
                    <p>
                      {order.user?.name || "Unknown User"}
                    </p>

                    <span>₦{order.total}</span>
                  </div>
                ))}
              </div>

            </div>
          </>
        )}
      </main>
    </div>
    </AdminLayout>
  );
};

export default Dashboard;