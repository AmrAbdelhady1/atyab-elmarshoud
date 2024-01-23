import { BASE_URL } from "@/constants/constants";
import { PreLoader } from "@/components";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

async function getCountries(locale: string) {
  try {
    const response = await fetch(`${BASE_URL}/countries`, {
      headers: {
        locale,
      },
    });
    const countries = await response.json();
    return countries.data;
  } catch (error) {
    console.log("Error fetching countries.");
    console.log(error);
  }
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const countriesData = await getCountries(locale);

  return (
    <div className="flex flex-wrap gap-10 lg:gap-64 justify-center py-10">
      <PreLoader />
      <LoginForm />
      <RegisterForm countries={countriesData} />
    </div>
  );
};

export default page;
