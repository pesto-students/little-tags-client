import React from "react";
import Products from "../products/Products";
import "./jeans.css";


class Jeans extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ items: json }));
  }
  
  render() {
    const products = this.state.items.map((item) => {
      return (
          <Products
            src={item.image}
            title={item.title}
            subHeader={item.category}
            discountedPrice={item.price}
            price={item.price*2}
            discount={item.price}
            key={item.id}
          />
      );
    });

    return (
      <div className="products-container">
        {products}
      </div>
     );
  }
}

export default Jeans;
