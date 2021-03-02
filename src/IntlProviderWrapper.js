import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import fr from "react-intl/locale-data/fr";
import enTranslation from "./intl/en.json";
import frTranslation from "./intl/fr.json";
import esTranslation from "./intl/es.json";

addLocaleData([...en, ...fr, ...es]);

const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
  constructor(...args) {
    super(...args);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: enTranslation });

    this.switchToFrench = () =>
      this.setState({ locale: "fr", messages: frTranslation });

    this.switchToSpanish = () =>
      this.setState({ locale: "es", messages: esTranslation });

    // pass everything in state to avoid creating object inside render method (like explained in the documentation)
    this.state = {
      locale: "en",
      messages: enTranslation,
      switchToEnglish: this.switchToEnglish, 
      switchToFrench: this.switchToFrench,
      switchToSpanish: this.switchToSpanish, 
    };
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Context.Provider value={this.state}>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    );
  }
}

export { IntlProviderWrapper, Context as IntlContext };