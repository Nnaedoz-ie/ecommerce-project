import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLayout from './admin/pages/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import AddProduct from './admin/components/AddProducts';
import EditProduct from './admin/components/EditProduct';
import ProductDetailsPage from './pages/ProductDetailPage';
import Products from './admin/pages/Products';
import AOS from "aos";
import Footer from './components/footer';
import Header from './components/header';
import "aos/dist/aos.css";
import About from './pages/About';

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
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>
          </Routes>
        </div>
            <Footer />
      </div>
    </div>
  );
}

export default App;