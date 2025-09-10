import { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/items");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Dashboard</h2>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
        <div className="card">
          <h3>Average Rating</h3>
          <p>
            {products.length > 0 ? "⭐".repeat(Math.round(products.reduce((sum, p) => sum + p.rating.length, 0) / products.length)) : "N/A"}
          </p>
        </div>
      </div>

      {/* Latest Products */}
      <div className="latest-products">
        <h3>Latest Products</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(-5).map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.product}</td>
                <td>{p.brand}</td>
                <td>{p.price}</td>
                <td>{p.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
