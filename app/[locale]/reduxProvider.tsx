"use client";

import { Footer, Navbar, TopBar } from "@/components";
import { Provider } from "react-redux";
import store from "@/redux/store";

const ReduxProvider = ({
  child,
  countries,
  categories,
  username,
  lang,
  countryId
}: any) => {
  return (
    <Provider store={store}>
      <TopBar lang={lang} countries={countries} username={username} countryId={countryId} />
      <Navbar lang={lang} categories={categories} />
      {child}
      <Footer lang={lang} />
    </Provider>
  );
};

export default ReduxProvider;
