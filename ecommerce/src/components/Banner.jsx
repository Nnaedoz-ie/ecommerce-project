import "./Banner.css"
import {Link} from "react-router-dom"

const Banner=({Banner})=>{
    return (
        <div className="top-banner-container" style={{background:`url(${Banner.imageUrl}) no-repeat center/cover`}}>
            <div className="">
          
            <p>{Banner.title}</p>
            <h2>{Banner.description}</h2>
            <Link>{Banner.read}</Link>
            </div>
      
        </div>
    );
}
export default Banner;