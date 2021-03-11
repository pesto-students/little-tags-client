import React from "react";
import { ProductCarousel } from "../product-carousel/ProductCarousel";
import "./product.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { FormattedMessage } from "react-intl";

const Product = () => {
  return (
    <>
      <div className="product-container">
        <div className="half">
          {/* <img src={first} alt="first"/> */}
          <ProductCarousel />
          
        </div>
        <div className="half">
          <h2>TODOS Running Shoe For Men</h2>
          <p>
            This is a genuine product of Nike India Private Limited. The product
            comes with a standard brand warranty of 180 days.</p>
            <p>The Meteor NU IDP Running Shoes features fine mesh knitted upper and chunky rubber outsole. The silhouette of these shoes is unmatchable with sleek and edgy toe cap. </p>
          
          <span className="product-discounted-price">Rs 1399</span> &nbsp;
          <span>
            <del>Rs 3999</del>
          </span>
          &nbsp;
          <span className="discount">Rs 2600 (off)</span>
          <p className="tax"><FormattedMessage id="tax"/></p>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button>XS</Button>
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
            <Button>XL</Button>
          </ButtonGroup>
          <div className="action-buttons">
            <Button
              variant="contained"
              size="large"
              className="add-to-bag"
              startIcon={<ControlPointIcon />}
            >
              <FormattedMessage id="add-to-bag"/>
            </Button>
            <Button className="wishlist" variant="contained" size="medium" color="default" startIcon={<FavoriteBorderOutlinedIcon />}>
            <FormattedMessage id="wishlist"/>
            </Button>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Product;
