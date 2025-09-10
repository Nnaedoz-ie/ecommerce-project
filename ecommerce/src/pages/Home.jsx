
import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import ProductCard from '../components/ProductCard.jsx';
import HeroSection from '../components/HeroSection.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import NewArrivals from '../components/NewArrivals.jsx';
import Banner from '../components/Banner.jsx';
import Bottombanner from '../components/bottombanner.jsx';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [items, setItems] = useState([]);
  const [why, setWhy] = useState([]);
  const [banner, setBanner] = useState([])
  const [loading, setLoading] = useState(true);
  const [loadingItems, setLoadingItems] = useState(true);
  const [loadingwhy, setLoadingwhy] = useState(true);
  const [loadingBanner, setLoadingBanner] = useState(true);
  const [error, setError] = useState(null);
  const [errorItems, setErrorItems] = useState(null);
  const [errorwhy, setErrorwhy] = useState(null);
  const [errorBanner, setErrorBanner] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchitems = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setErrorItems(error.message);
      } finally {
        setLoadingItems(false);
      }
    };

    const fetchwhy = async () => {
      try {
        const response = await fetch('http://localhost:5000/whyChooseUs');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setWhy(data);
      } catch (error) {
        setErrorwhy(error.message);
      } finally {
        setLoadingwhy(false);
      }
    };

    const fetchBanner = async () => {
      try {
        const response = await fetch('http://localhost:5000/Banner');
        if (!response.ok) {
          throw new Error('Failed to fetch banners');
        }
        const data = await response.json();
        setBanner(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingBanner(false);
      }
    };

    

    fetchPosts();
    fetchitems();
    fetchwhy()
    fetchBanner()
  }, []);

  if (loading || loadingItems || loadingwhy) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (errorItems) return <div>Error: {error}</div>;
  if (errorwhy) return <div>Error: {error}</div>;
  if (errorBanner) return <div>Error: {error}</div>;

  return (
    <div>
      
      <HeroSection />
      <section id="product1" className="section-p1"> 
        <h2>Products For You</h2>
        <p>Summer Collections New Modern Designs</p>
        <div className="pro-container" > 
      {
        items.slice(0, 8).map((each, index) => (
          <ProductCard key={index} id={each.id} titlename={each.product} image={each.imageUrl} brand={each.brand} rate={each.rating} price={each.price} />
        ))
      }
        </div>
      </section>
      
      <section>
        <section id="product12" className="section-p1">
          <h2>New Arrivals</h2>
          <p>Summer Collections New Modern Designs</p>
          <div className="pro-container">
            <NewArrivals move={items}/> 
          </div>
        </section>
        <WhyChooseUs move={why}/>
      </section>

        <div className="top-banner">
      {
        banner.filter(value=>value.imageUrl).map(value => (
          <Banner key={value.id} Banner={value} />
        ))
      }
      </div>
      <div className="bottom-banner">
      {
        banner.filter(value=>value.images).map(value => (
          <Bottombanner key={value.id} Banner={value} />
        ))
      }
      </div>


      
    </div>
  );
};

export default Home;
