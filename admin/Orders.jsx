import {
  useEffect,
  useState
} from "react";

import API from "../../client/src/services/api";

import AdminLayout
from "./AdminLayout";



function Orders() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchOrders();

  }, []);

  async function fetchOrders() {

    try {

      const res = await API.get(

        "/orders",

        {
          headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")}`
          }
        }

      );

      setOrders(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  async function markDelivered(id) {

    try {

      const updatedOrders =
        orders.map(order => {

          if(order._id === id){

            return {
              ...order,
              status:"Delivered"
            };

          }

          return order;

        });

      setOrders(updatedOrders);

    } catch (error) {

      console.log(error);

    }

  }

  if(loading){

    return (

      <AdminLayout>

        <h2>
          Loading orders...
        </h2>

      </AdminLayout>

    );

  }

  return (

    <AdminLayout>

      <h1 className="admin-title">
        Orders
      </h1>

      <div className="orders-container">

        {orders.length === 0 ? (

          <p>
            No orders yet.
          </p>

        ) : (

          orders.map(order => (

            <div
              key={order._id}
              className="order-card"
            >

              <div className="order-top">

                <h3>
                  {order.user?.name || "Customer"}
                </h3>

                <span
                  className={
                    order.status === "Delivered"
                    ? "status delivered"
                    : "status pending"
                  }
                >

                  {order.status || "Pending"}

                </span>

              </div>

              <p>
                <strong>Total:</strong>

                {" "}₦{order.total}
              </p>

              <p>
                <strong>Items:</strong>

                {" "}{order.items.length}
              </p>

              <div className="order-items">

                {order.items.map(item => (

                  <div
                    key={item._id}
                    className="order-item"
                  >

                    <p>
                      {item.name}
                    </p>

                    <small>
                      Qty: {item.quantity}
                    </small>

                  </div>

                ))}

              </div>

              <button

                className="deliver-btn"

                onClick={() =>
                  markDelivered(order._id)
                }

              >

                Mark Delivered

              </button>

            </div>

          ))

        )}

      </div>

    </AdminLayout>

  );

}

export default Orders;