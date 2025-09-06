import { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    product: "",
    brand: "",
    price: "",
    rating: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product added successfully!");
        setForm({
          product: "",
          brand: "",
          price: "",
          rating: "",
          imageUrl: "",
        });
      })
      .catch((err) => console.error("Error adding product:", err));
  };

  return (
    <div className="add-product">
      <form onSubmit={handleSubmit} className="add-product-form">
        <h2>Add New Product</h2>

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="text"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-add">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
