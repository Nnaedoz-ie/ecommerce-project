import {Link} from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-main">
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-newsletter">
        <div>
        <h2>Sign Up For Newsletters</h2>
        <p>Get E-mail updates on our latest shop and <span className="span">special offers</span> </p>
        </div>
       <div className="footer-input">
        <input type="text" placeholder="enter your email address"/>
        <div className="link">
            <Link to="/">Sign Up</Link>
        </div>
       </div>
      </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">

        
        <div className="footer-contacts">
        <div>
            <h2>E-Commerce</h2>
        </div>
        <div><h3>Contact</h3></div>
        <span><h4>Address :</h4><p>104 TechBrainiacs, New Horizon, NYC</p> </span>
        <span><h4>Phone :</h4> <p>(+234) 8063644308</p></span>
        <span><h4>Hours :</h4> <p>09:00 - 17:00, Mon - Sat</p></span>
        </div>
        <div className="footer-about">
        <div>
            <h3>About</h3>
        </div>
        <div><Link to="">About Us</Link></div>
        <div><Link to="">Delivery Information</Link></div>
        <div><Link to="">Privacy Policy</Link></div>
        <div><Link to="">Terms & Conditions</Link></div>
        <div><Link to="">Contact Us</Link></div>
        </div>
        <div className="footer-myaccount">
        <div>
            <h3>My Account</h3>
        </div>
        <div><Link to="">Sign in</Link></div>
        <div><Link to="">View Cart</Link></div>
        <div><Link to="">My Wishlist</Link></div>
        <div><Link to="">Track My Order</Link></div>
        <div><Link to="">Help</Link></div>
        </div>

        <div className="footer-left">
        <div>
            <h3>Install App</h3>
        </div>
        <div><p>Available on App Store & Google Play</p></div>
       
        </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p> &copy; 2025, TechBrainiacs</p>
      </div>
    </footer>
    </div>
  );
};
export default Footer;
