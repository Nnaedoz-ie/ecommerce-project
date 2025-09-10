import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
const NewArrivals = ({ move }) => {
  const navigate = useNavigate()
  return (
    <>
      {move.slice(9,17).map((arrival, index) => (
        <div className="pro" key={index} onClick={() => navigate(`/product/${arrival.id}`)}>
          <img src={arrival.imageUrl} alt={arrival.product} />

          <div className="des">
            <span>{arrival.brand}</span>
            <h5>{arrival.product}</h5>
            <h4>{arrival.rating}</h4>
            <h4>{arrival.price}</h4>
          </div>

          <a href="#" onClick={(e) => e.stopPropagation()}>
            <i className="bx bxs-cart cart"></i>
          </a>
        </div>
      ))}
    </>
  );
};

export default NewArrivals;

