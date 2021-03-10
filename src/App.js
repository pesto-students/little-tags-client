import "./App.css";
import Navbar from "./component/layout/Navbar";
import HomePage from "./component/pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import React from "react";
import langs from "./assets/language.json";
//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [locale, setLocale] = React.useState("en");
  return (
    <IntlProvider locale={locale} messages={langs[locale]}>
      <Provider store={store}>
        <Router>
          <Navbar handleLanguageChange={(lang) => setLocale(lang)} />
          <Route exact path="/" component={HomePage} />
        </Router>
      </Provider>
    </IntlProvider>
  );
}

export default App;
