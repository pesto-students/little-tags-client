import { Link } from "react-router-dom";
import "./wishlist-product-card.css";
import Button from "@material-ui/core/Button";
import one from "../../assets/product/1.jpeg";

const WishlistProductCard = () => {
  const rowStyle = {
    backgroundImage: "url(" + one + ")",
  };
  const id = 1;

  return (
    <div className="wishlist-card-container">
      <Link
        exact="true"
        to={`/product/${id}`}
        className="wishlist-product-container"
      >
        <div className="wishlist-row" style={rowStyle}></div>

        <div className="wishlist-product-title">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </div>
        <div className="wishlist-price-container">
          <span className="wishlist-discounted-price">Rs.100</span> &nbsp;
          <span>
            <del>Rs.200</del>
          </span>
          &nbsp;
          <span className="wishlist-discount">(Rs.100 off)</span> &nbsp;
        </div>
        
      </Link>
        <div className="wishlist-cta">
          <Button variant="contained" color="secondary">
            Move TO BAG
          </Button>
          <Button size="small" variant="contained" color="default">
            Remove
          </Button>
        </div>
    </div>
  );
};

export default WishlistProductCard;
