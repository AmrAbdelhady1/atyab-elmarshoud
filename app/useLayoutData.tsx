import { BASE_URL } from "@/constants/constants";

export async function useCountries(locale: string) {
  try {
    const countriesResponse = await fetch(`${BASE_URL}/countries`, {
      headers: {
        locale,
      },
      cache: "force-cache",
    });

    const countries = await countriesResponse.json();

    return countries.data;
  } catch (error) {
    console.log("Error fetching countries.");
    console.log(error);
  }
}

export async function useCategories(locale: string) {
  try {
    const categoriesResponse = await fetch(`${BASE_URL}/categories`, {
      headers: {
        locale,
      },
      cache: "force-cache",
    });

    const categories = await categoriesResponse.json();

    return categories.data;
  } catch (error) {
    console.log("Error fetching categories.");
    console.log(error);
  }
}

export async function useProfile(token: any) {
  if (token) {
    try {
      const profileResponse = await fetch(`${BASE_URL}/show-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "force-cache",
      });

      const profile = await profileResponse.json();

      return profile.data.first_name + " " + profile.data.last_name;
    } catch (error) {
      console.log("Error fetching profile.");
      console.log(error);
    }
  }
  return "";
}
