import { getCookie } from "@/app/actions";

import { PreLoader, ProductCard } from "@/components";
import PageHeader from "@/components/PageHeader";

import { BASE_URL } from "@/constants/constants";

import product1Image from "@/public/assets/images/product/product1.jpg";

import "./style.css";

async function getProducts(locale: string, token: any) {
  try {
    const response = await fetch(`${BASE_URL}/show-favourites`, {
      headers: {
        Authorization: `Bearer ${token}`,
        locale,
      },
      cache: "force-cache",
    });
    const products = await response.json();
    return products.data;
  } catch (error) {
    console.log("Error fetching products.");
    console.log(error);
  }
}

const Wishlist = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const token = await getCookie("auth-token");
  const products = await getProducts(locale, token);
  console.log("amr", token);
  console.log("amr", products);

  return (
    <div>
      <PreLoader />

      <PageHeader
        bgImgClassName="header-img"
        firstText="Organic Perfumes"
        firstTextClassName="font-quentin"
        secondText="Shop Wishlist"
      />

      <div className="my-10 md:my-20 lg:my-32 xl:my-40 px-10 2xl:px-[300px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
          {products?.map((product: any) => (
            <ProductCard
              image={product1Image}
              productName="Perfect Concealer"
              price="$28.00"
              priceAfterDiscount="$0"
              sale={false}
              isWishlist={true}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
