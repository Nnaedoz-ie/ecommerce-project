import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/items/${id}`);
        const data = await res.json();
        setProduct(data.product);
        setBrand(data.brand);
        setPrice(data.price);
        setImageUrl(data.imageUrl);
        setRating(data.rating);
        setThumbnail(data.thumbnail ? data.thumbnail.join(", ") : "");
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      product,
      brand,
      price,
      imageUrl,
      rating,
      thumbnail: thumbnail.split(",").map((t) => t.trim()),
    };

    try {
      await fetch(`http://localhost:5000/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      navigate("/admin/products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="add-product">
      <form onSubmit={handleSubmit} className="add-product-form">
        <h2>Edit Product</h2>

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Thumbnail URLs (comma separated)</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-add">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
