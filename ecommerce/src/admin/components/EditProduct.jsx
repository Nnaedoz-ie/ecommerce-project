import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [rating, setRating] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  // const [description, setDescription] = useState('');

  // Fetch existing product details from items array
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
        setThumbnail(data.thumbnail ? data.thumbnail.join(', ') : '');
        // setDescription(data.description);
      } catch (error) {
        console.error('Error fetching product:', error);
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
      thumbnail: thumbnail.split(',').map((t) => t.trim()), // convert string back to array
      // description,
    };

    try {
      await fetch(`http://localhost:5000/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      navigate('/admin/products'); // navigate back to products page
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Edit Product</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Product Name</label>
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Brand</label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Image URL</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{ width: '100%', padding: '8px' }} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Rating</label>
        <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} style={{ width: '100%', padding: '8px' }} />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Thumbnail URLs (comma separated)</label>
        <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} style={{ width: '100%', padding: '8px' }} />
      </div>

      {/* <div style={{ marginBottom: '10px' }}>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={{ width: '100%', padding: '8px', height: '150px' }} />
      </div> */}

      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
