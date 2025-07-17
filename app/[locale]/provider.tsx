
import { useCountries, useCategories, useProfile } from "../useLayoutData";
import { getCookie } from "../actions";
import ReduxProvider from "./reduxProvider";

const Provider = async ({ child, lang }: any) => {
  const token = await getCookie("auth-token");
  const countryId = await getCookie("country_id");
  // const countries = await useCountries(lang);
  // const categories = await useCategories(lang);
  // const username = await useProfile(token);

  // console.log({username});
  // console.log({countries});
  // console.log({categories});

  return (
      <ReduxProvider
        child={child}
        // countries={countries}
        // categories={categories}
        // username={username}
        lang={lang}
        countryId={countryId}
      />
  );
};

export default Provider;
