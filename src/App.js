import "./App.css";
import Navbar from "./component/layout/Navbar";
import HomePage from "./component/pages/HomePage";
import Checkout from "./component/checkout/Checkout";
import Cart from "./component/cart/Cart";
import Wishlist from "./component/wishlist/Wishlist";
import Payment from "./component/payment/Payment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import React from "react";
import langs from "./assets/language.json";
//redux
import { Provider } from "react-redux";
import store from "./store";
import ProductList from "./component/product-list/ProductList";
import Product from "./component/product/Product";

function App() {
  const [locale, setLocale] = React.useState("en");
  return (
    <IntlProvider locale={locale} messages={langs[locale]}>
      <Provider store={store}>
        <Router>
          <Navbar handleLanguageChange={(lang) => setLocale(lang)} />
          <Route exact path="/" component={HomePage} />
          <Switch>
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/product/:product_id" component={Product} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
        </Router>
      </Provider>
    </IntlProvider>
  );
}

export default App;
