import { BASE_URL } from "@/constants/constants";
import AboutUs from "./AboutUs";

async function getAboutUs(locale: string) {
  try {
    const response = await fetch(`${BASE_URL}/about-us`, {
      headers: {
        locale,
      },
      cache: "force-cache",
    });
    const aboutUs = await response.json();
    return aboutUs.data;
  } catch (error) {
    console.log("Error fetching aboutUs.");
    console.log(error);
  }
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const data = await getAboutUs(locale);

  return <AboutUs data={data} />;
};

export default page;
