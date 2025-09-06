import React from "react";

const HeroSection = () => {
  return (
    <section className="hero" data-aos="fade-up"
      data-aos-duration="80"
      data-aos-delay="10">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Discover the Future of Shopping with{" "}
            <span className="highlight">DozieStore</span>
          </h1>
          <p>
            We connect you to quality, style, and convenience. 
          </p>

          <div className="hero-buttons">
            <button className="btn primary" >Start Shopping</button>
            <button className="btn secondary">Browse Categories</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
