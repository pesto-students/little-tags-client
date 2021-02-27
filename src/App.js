import "./App.css";
import Navbar from "./component/layout/Navbar";
import HomePage from "./component/pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import React from "react";

const langs = {
  en: {
    welcome: "Welcome to OneTagShop",
    cart: "Cart",
    account: "Sign in",
    language: "English",
    search: "Search your product",
  },
  hi: {
    welcome: "OneTagShop में आपका स्वागत है",
    cart: "कार्ट",
    account: "साइन इन करें",
    language: "हिन्दी",
    search: "अपना उत्पाद खोजें",
  },
};

function App() {
  const [locale, setLocale] = React.useState("hi");
  return (
    <IntlProvider locale={locale} messages={langs[locale]}>
      <Router>
        <Navbar handleLanguageChange={(lang) => setLocale(lang)} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </IntlProvider>
  );
}

export default App;
