import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BASE_URL } from "@/constants/constants";
import headerImage from "@/public/assets/images/my-orders/header.jpg";
import product1Image from "@/public/assets/images/order-details/product1.jpg";
import product2Image from "@/public/assets/images/order-details/product2.jpg";
import OrderDetailsItem from "./OrderDetailsItem";
import OrderDetailsItemMobile from "./OrderDetailsItemMobile";
import { PreLoader } from "@/components";
import OrderDetailsMobile from "./OrderDetailsMobile";
import PageHeader from "@/components/PageHeader";
import { getCookie } from "@/app/actions";

const orderItems = [
  {
    image: product1Image,
    product: "Marshoud4 White",
    quantity: 1,
    price: "89 USD",
    size: "undef",
  },
  {
    image: product2Image,
    product: "Marshoud4 Black",
    quantity: 2,
    price: "89 USD",
    size: "undef",
  },
];

async function getOrder(locale: string, order_id: string) {
  try {
    const token = await getCookie("auth-token");
    const response = await fetch(`${BASE_URL}/orders/${order_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        locale,
      },
      cache: "force-cache",
    });
    const order = await response.json();
    return order.data;
  } catch (error) {
    console.log("Error fetching order.");
    console.log(error);
  }
}

const page = async ({
  params: { locale, order_id },
}: {
  params: { locale: string; order_id: string };
}) => {
  const orderDetails = await getOrder(locale, order_id);
  console.log("amr", orderDetails.items);
  const t = await getTranslations();
  return (
    <>
      <PreLoader />

      {/* Header */}
      <PageHeader
        bgImgClassName="header-img"
        firstText="Organic Cosmetic"
        firstTextClassName="font-quentin"
        secondText="Order Details"
      />

      {/* Content */}
      <div className="mx-[119.6px] my-[150px] max-w-full flex flex-col gap-10 items-start justify-center max-lg:mx-2">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-raleway text-3xl">{t("Shipping Address")}</h2>
          <p>
            {orderDetails?.country}, {orderDetails?.city}
          </p>
          <p>
            {t("Phone : ")}
            {orderDetails?.phone_code} {orderDetails?.phone}
          </p>
          <p>
            {t("Address Line 1 : ")}
            {orderDetails?.address_line_1}
          </p>
        </div>

        {/* Normal View  */}
        <div className="p-5 bg-gray-50 shadow-md rounded-md w-full max-lg:hidden">
          <table className="w-full border-t-[1px] border-[#e0e0e0]" key="t1">
            <thead>
              <tr className="text-left flex items-center justify-between py-6 border-b-[1px] border-[#e0e0e0]">
                <th className="font-raleway text-xl font-medium flex-[0.125] max-lg:text-base">
                  #
                </th>
                <th className="font-raleway text-xl font-medium flex-[0.25] max-lg:text-base">
                  {t("Reference Number")}
                </th>
                <th className="font-raleway text-xl font-medium flex-[0.25] max-lg:text-base">
                  {t("Payment ID")}
                </th>
                <th className="font-raleway text-xl font-medium flex-[0.125] max-lg:text-base">
                  {t("Quantity")}
                </th>
                <th className="font-raleway text-xl font-medium flex-[0.125] max-lg:text-base">
                  {t("Products Total")}
                </th>
                <th className="font-raleway text-xl font-medium flex-[0.125] max-lg:text-base">
                  {t("Order Placed")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left flex items-center justify-between py-6 border-b-[1px] border-[#e0e0e0]">
                <td className="font-nunito text-lg font-semibold flex-[0.125] max-lg:text-base">
                  {orderDetails?.id}
                </td>
                <td className="font-nunito text-lg font-semibold flex-[0.25] max-lg:text-base">
                  {orderDetails?.reference_id}
                </td>
                <td className="font-nunito text-lg font-semibold flex-[0.25] max-lg:text-base">
                  {orderDetails?.payment_id}
                </td>
                <td className="font-nunito text-lg font-semibold flex-[0.125] max-lg:text-base">
                  {orderDetails?.orders_products_count}
                </td>
                <td className="font-nunito text-lg font-semibold flex-[0.125] max-lg:text-base">
                  {orderDetails?.sub_total} {" "}
                  {orderDetails?.currency?.code}
                </td>
                <td className="font-nunito text-lg font-semibold flex-[0.125] max-lg:text-base">
                  {orderDetails?.created_at}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="w-full lg:hidden">
          <OrderDetailsMobile
            orderNumber={orderDetails?.id}
            referenceNumber={orderDetails?.reference_id}
            paymentId={orderDetails?.payment_id}
            quantity={orderDetails?.orders_products_count}
            productsTotal={orderDetails?.sub_total + " " + orderDetails?.currency?.code}
            orderPlaced={orderDetails?.created_at}
          />
        </div>

        {/* Normal View */}

        <div className="w-full flex gap-5 max-md:flex-col max-lg:hidden">
          <div className="flex-[0.7]">
            <div className="p-5 bg-gray-50 shadow-md rounded-md w-full">
              <h2 className="font-raleway text-lg font-semibold pb-5">
                {t("Products")}
              </h2>
              <table
                className="w-full border-t-[1px] border-[#e0e0e0]"
                key="t2"
              >
                <thead>
                  <tr className="text-center flex items-center justify-between py-6 border-b-[1px] border-[#e0e0e0]">
                    <th className="text-white font-raleway text-base font-medium flex-[0.15] max-lg:text-base">
                      {t("Image")}
                    </th>
                    <th className="font-raleway text-base font-medium flex-[0.4] max-lg:text-base">
                      {t("Product")}
                    </th>
                    <th className="font-raleway text-base font-medium flex-[0.15] max-lg:text-base">
                      {t("Quantity")}
                    </th>
                    <th className="font-raleway text-base font-medium flex-[0.15] max-lg:text-base">
                      {t("Price")}
                    </th>
                    {/* <th className="font-raleway text-base font-medium flex-[0.15] max-lg:text-base">
                      {t("Size")}
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {orderDetails?.items.map((order:any, index:number) => (
                    <OrderDetailsItem
                      key={index}
                      image={order?.product?.image}
                      product={order?.product?.name}
                      quantity={order?.quantity}
                      price={order?.price}
                      currency={orderDetails?.currency?.code}
                    />
                  ))}
                  <tr className="flex-1 flex items-center justify-center mt-5">
                    <td>
                      <button className="animate-button !bg-transparent !w-[150px] !h-[50px]">
                        {t("Re-Order")}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex-[0.3] flex flex-col gap-5 bg-gray-50 shadow-md border border-gray-100 rounded-md py-4 px-2 h-fit max-md:flex-1">
            <h2 className="px-2 font-raleway font-semibold text-lg">
              {t("Payment Summary")}
            </h2>
            <div className="flex flex-col gap-3 bg-white rounded-md p-3">
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Products Total")}</p>
                <p className="font-nunito font-bold">{orderDetails?.total} {orderDetails?.currency?.code}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Shipping Fees")}</p>
                <p className="font-nunito font-bold">{orderDetails?.delivery} {orderDetails?.currency?.code}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Discount")}</p>
                <p className="font-nunito font-bold">{orderDetails?.discount} {orderDetails?.currency?.code}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Total")}</p>
                <p className="font-nunito font-bold">{orderDetails?.sub_total} {orderDetails?.currency?.code}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col w-full lg:hidden">
          <div className="mb-5">
            {orderDetails?.items.map((order:any, index:number) => (
              <OrderDetailsItemMobile
							key={index}
							image={order?.product?.image}
							product={order?.product?.name}
							quantity={order?.quantity}
							price={order?.price}
							currency={orderDetails?.currency?.code}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5 bg-gray-50 shadow-md border border-gray-100 rounded-md py-4 px-2 h-fit max-md:flex-1">
            <h2 className="px-2 font-raleway font-semibold text-lg">
              {t("Payment Summary")}
            </h2>
            <div className="flex flex-col gap-3 bg-white rounded-md p-3">
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Products Total")}</p>
                <p className="font-nunito font-bold">{orderDetails?.total} {orderDetails?.currency?.code}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Shipping Fees")}</p>
                <p className="font-nunito font-bold">{orderDetails?.delivery} {orderDetails?.currency?.code}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Discount")}</p>
                <p className="font-nunito font-bold">{orderDetails?.discount} {orderDetails?.currency?.code}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-raleway">{t("Total")}</p>
                <p className="font-nunito font-bold">{orderDetails?.sub_total} {orderDetails?.currency?.code}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
