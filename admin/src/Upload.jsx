import { useState } from "react";

import API from "../services/api";

import AdminLayout
from "../components/AdminLayout";


function Upload() {

  const [formData, setFormData] =
    useState({

      name:"",
      price:"",
      category:"",
      description:""

    });

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  }

  function handleImage(e) {

    const file = e.target.files[0];

    setImage(file);

    if(file){

      setPreview(
        URL.createObjectURL(file)
      );

    }

  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      const data =
        new FormData();

      data.append(
        "name",
        formData.name
      );

      data.append(
        "price",
        formData.price
      );

      data.append(
        "category",
        formData.category.toLowerCase()
      );

      data.append(
        "description",
        formData.description
      );

      data.append(
        "image",
        image
      );

      await API.post(

        "/products",

        data,

        {
          headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")}`
          }
        }

      );

      alert(
        "Product uploaded successfully 🔥"
      );

      // Reset form
      setFormData({

        name:"",
        price:"",
        category:"",
        description:""

      });

      setImage(null);
      setPreview("");

    } catch (error) {

      console.log(error);

      alert("Upload failed ❌");

    } finally {

      setLoading(false);

    }

  }

  return (

    <AdminLayout>

      <div className="upload-page">

        <h1 className="admin-title">
          Upload Product
        </h1>

        <form
          className="upload-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="file"
            name="image"
            onChange={handleImage}
            required
          />

          {/* Image Preview */}

          {preview && (

            <img
              src={preview}
              alt="Preview"
              className="preview-image"
            />

          )}

          <button
            type="submit"
            disabled={loading}
          >

            {

              loading
              ? "Uploading..."
              : "Upload Product"

            }

          </button>

        </form>

      </div>

    </AdminLayout>

  );

}

export default Upload;