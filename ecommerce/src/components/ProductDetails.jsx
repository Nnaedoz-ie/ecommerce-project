import { useState } from "react";

const ProductDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.imageUrl)
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">
      {/* Left: Big image */}
      <div className="product-image-section">
        <img src={mainImage} alt={product.product} className="main-image" />

        {/* Optional thumbnails */}
        <div className="thumbnail-row">
          {product.thumbnail &&
            product.thumbnail.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`thumbnail-${index}`}
                className="thumbnail-img"
                onClick={() => setMainImage(thumb)} 
              />
            ))}
        </div>
      </div>

      {/* Right: Details */}
      <div className="product-info-section">
        <h2 className="product-title">{product.product}</h2>
        <p className="rating">{product.rating} (78 reviews)</p>
        <h3 className="price">{product.price}</h3>
        <h4 className="brand">Brand: {product.brand}</h4>

        <p className="description">
          Experience pure sound like never before with the {product.product},
          the industry-leading wireless noise-canceling headphones designed
          for an immersive audio experience.
        </p>

        {/* Coupon */}
        <div className="coupon-section">
          <input type="text" placeholder="Enter coupon code" />
          <span className="coupon-status">Available</span>
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button className="btn add-to-cart">Add to Cart</button>
          <button className="btn continue">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
