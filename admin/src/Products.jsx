import {
  useEffect,
  useState
} from "react";

import API from "./services/api";

import AdminLayout
from "./components/AdminLayout";



function AdminProducts() {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  async function fetchProducts() {

    try {

      const res =
        await API.get("/products");

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }

  }

  async function deleteProduct(id) {

    try {

      await API.delete(

        `/products/${id}`,

        {
          headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")}`
          }
        }

      );

      setProducts(

        products.filter(
          product => product._id !== id
        )

      );

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <AdminLayout>

      <h1>
        Products
      </h1>

      <div className="product-grid">

        {products.map(product => (

          <div
            key={product._id}
            className="product"
          >

            <h3>
              {product.name}
            </h3>

            <p>
              ₦{product.price}
            </p>

            <button
              onClick={() =>
                deleteProduct(product._id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </AdminLayout>

  );

}

export default AdminProducts;