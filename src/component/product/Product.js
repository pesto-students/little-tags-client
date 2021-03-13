import React, { useEffect } from "react";
import { ProductCarousel } from "./product-carousel/ProductCarousel";
import "./product.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProductById } from "../../actions/product";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const Product = ({
  getProductById,
  product: { product_data, loading },
  match,
}) => {
  useEffect(() => {
    getProductById(match.params.product_id);
  }, []);

  if (product_data == null) {
    return (
      <div className="product-container">
        <CircularProgress color="inherit" className="spinner" />
      </div>
    );
  }
  const { title, description, price, image } = product_data;
  return (
    <>
      <div className="product-container">
        {loading ? (
          <CircularProgress color="inherit" className="spinner" />
        ) : (
          <>
            <div className="half">
              <ProductCarousel images={[image, image, image, image, image]} />
            </div>
            <div className="half">
              <h2>{title}</h2>
              <p>{description}</p>
              <span className="product-discounted-price">
                Rs {parseInt(price) * 74 - 2600}
              </span>{" "}
              &nbsp;
              <span>
                <del>Rs {parseInt(price) * 74}</del>
              </span>
              &nbsp;
              <span className="discount">Rs 2600 (off)</span>
              <p className="tax">
                <FormattedMessage id="tax" />
              </p>
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
                  <FormattedMessage id="add-to-bag" />
                </Button>
                <Link exact="true" to={`/checkout`} className="buy-now-link">
                  <Button
                    className="buy-now"
                    variant="contained"
                    size="large"
                    color="default"
                    startIcon={<LocalMallOutlinedIcon />}
                  >
                    <FormattedMessage id="buy" />
                  </Button>
                </Link>
                
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

Product.propTypes = {
  getProductById: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProductById })(Product);
