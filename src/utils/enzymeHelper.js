import { IntlProvider } from "react-intl";
import React from "react";

import enTranslationData from "../assets/language.json";

function intl(component, locale) {
  return (
    <IntlProvider locale={locale} messages={enTranslationData[locale]}>
      {React.cloneElement(component)}
    </IntlProvider>
  );
}

export default intl;
