import React from "react";
import "./cart-product-card.css";
import one from "../../assets/product/1.jpeg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const CartProductCard = () => {
  const divStyle = {
    backgroundImage: "url(" + one + ")",
  };

  const [quantity, setQuantity] = React.useState(1);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <div className="cart-product-container">
      <div className="cart-product-image" style={divStyle}></div>
      <div className="cart-product-details">
        <h2 className="cart-product-heading">
          Mens Casual Premium Slim Fit T-Shirts
        </h2>
        <div className="cart-price-calculator">
          <FormControl className="">
            <Select
              value={quantity}
              onChange={handleChange}
              displayEmpty
              className=""
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
          <span className="cart-product-price">Rs 2600</span>
        </div>
        <div className="cart-call-to-action">
          <Button
            variant="contained"
            color="secondary"
            className=""
            startIcon={<DeleteIcon />}
          >
            Remove
          </Button>
          <Button
            variant="contained"
            className=""
            startIcon={<FavoriteBorderOutlinedIcon />}
          >
            Move to wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
