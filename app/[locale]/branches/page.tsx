import { BASE_URL } from "@/constants/constants";
import BranchesPage from "./BranchesPage";

async function getBranches(locale: string) {
  try {
    const response = await fetch(`${BASE_URL}/branches`, {
      headers: {
        locale,
      },
      cache: "force-cache",
    });
    const branches = await response.json();
    return branches.data;
  } catch (error) {
    console.log("Error fetching branches.");
    console.log(error);
  }
}

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const branchesData = await getBranches(locale);
  return (
    <>
      <BranchesPage branchesData={branchesData} />
    </>
  );
};

export default page;
