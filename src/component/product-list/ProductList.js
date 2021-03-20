import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./ProductList.css";
import { getProductByCategory } from "../../actions/product";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductCard from "./ProductCard";

const ProductList = ({
  getProductByCategory,
  product: { products, loading },
  location,
}) => {
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword");
    if (keyword) {
      //perform product list by search with keyword
      getProductByCategory(keyword);
    } else {
      // perform product listing with category
      let category = params.get("category");

      getProductByCategory(category);
    }
  }, []);

  const product_list = products.map((item) => {
    return (
      <ProductCard
        id={item.id}
        src={item.image}
        title={item.title}
        subHeader={item.category}
        discountedPrice={item.price}
        price={item.price * 2}
        discount={item.price}
        key={item.id}
      />
    );
  });

  return (
    <div className="products-container">
      {loading ? (
        <CircularProgress color="inherit" className="spinner" />
      ) : (
        product_list
      )}
    </div>
  );
};

ProductList.propTypes = {
  getProductCategories: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProductByCategory })(ProductList);
