import "boxicons/css/boxicons.min.css";
import f1 from "../assets/f1.jpg"
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ id, titlename, image, brand, rate, price }) => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <section id="product1" className="section-p1"> */}
        {/* <div className="pro-container"> */}
          <div className="pro" onClick={() => navigate(`/product/${id}`)}>
            <img src={image} alt="Cartoon Astronaut T-Shirt" />

            <div className="des">
              <span>{brand}</span>
              <h5>{titlename}</h5>
              <h4>{rate}</h4>
              <h4>{price}</h4>
            </div>
            <a href="#"><i className="bx bxs-cart cart"></i></a>
          </div>
        {/* </div> */}
      {/* </section> */}

    </div>
  )
}
export default ProductCard