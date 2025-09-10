import aboutVideo from "../assets/1.mp4";
import Delivery from "../assets/Nationwide-delivery.jpg";
import Online from "../assets/Easy Online Orders.jpg";
import Affordable from "../assets/Affordable Prices.jpg";
import Exclusive from "../assets/Exclusive Promotions.jpg";
import Satisfaction from "../assets/Customer Satisfaction.jpg";
import Store from "../assets/About our store.jpg";

const AboutCard = () => {
  return (
    <div>
      <main className="about-page">
        {/* Hero Section */}
        <section id="page-header" className="about-header">
          <h2>#KnowUs</h2>
          <p>Discover who we are and why thousands trust us for their shopping needs.</p>
        </section>

        {/* About Section */}
        <section id="about-head" className="section-p1">
          <img src={Store} alt="About our store" />
          <div>
            <h2>Who Are We?</h2>
            <p>
              We are an innovative online store dedicated to bringing you top-quality
              products at the best prices. Our journey began with a simple vision:
              make shopping easy, affordable, and accessible to everyone.
            </p>
            <p>
              Over the years, we’ve grown into a trusted platform serving customers
              nationwide with fast delivery, reliable service, and a wide selection
              of items to choose from.
            </p>
            <abbr>
              Our goal is to create a shopping experience where convenience meets
              quality — right at your fingertips.
            </abbr>
            <br />
            <br />
            <marquee style={{ backgroundColor: "#ccc" }} loop="-1" scrollAmount="5" width="100%">
              Shop smart. Save more. Experience better.
            </marquee>
          </div>
        </section>

        <section id="about-app" className="section-p1">
          <h1>
            Download Our <a href="#">Mobile App</a>
          </h1>
          <p>
            Shop on the go with our easy-to-use mobile app. Track orders, browse
            products, and unlock exclusive app-only deals.
          </p>
          <div className="video">
            <video autoPlay loop muted>
               <source src={aboutVideo} type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Features */}
        <section id="feature" className="section-p1">
          <div className="fe-box">
            <img src={Delivery} alt="Delivery" />
            <h6>Nationwide Delivery</h6>
          </div>

          <div className="fe-box">
            <img src={Online} alt="Order" />
            <h6>Easy Online Orders</h6>
          </div>


          <div className="fe-box">
            <img src={Exclusive} alt="Promotions" />
            <h6>Exclusive Promotions</h6>
          </div>

          <div className="fe-box">
            <img src={Satisfaction} alt="Happy Sell" />
            <h6>Customer Satisfaction</h6>
          </div>

        </section>

        
      </main> 
    </div>
  )
}
export default AboutCard