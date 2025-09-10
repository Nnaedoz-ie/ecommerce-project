import { Link } from "react-router-dom"
import "./header.css"

const Header =()=>{
return(
  <div className="header-container">
    <nav className="header">
        <Link to="/"><h1>E-Commerce</h1></Link>
        <span className="header-Links">
        
          <Link to="/" >Home</Link>
          <Link to="">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about" >About</Link>
          <Link to="/admin">Admin</Link>
        </span>

    </nav>
    </div>
)
}

export default Header;