import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetailPage from './pages/PostDetailPage';
import AdminLayout from './admin/pages/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import AddProduct from './admin/components/AddProducts';
import EditProduct from './admin/components/EditProduct';
import ProductDetailsPage from './pages/ProductDetailPage';
import Products from './admin/pages/Products';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // default duration for all animations
      once: true,     // run animation only once
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div className='original-div'>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="add-product" element={<AddProduct />} />
              {/* <Route path="manage-posts" element={<ManagePosts />} /> */}
              {/* <Route path="add-post" element={<AddPostPage />} /> */}
              {/* <Route path="edit-post/:id" element={<EditPostPage />} /> */}
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;