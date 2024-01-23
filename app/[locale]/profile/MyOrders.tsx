import { useTranslations } from "next-intl";

import React from "react";
import OrderItem from "./OrderItem";

interface Orders {
  id: number;
  orders_products_count: number;
  total: number;
  status: string;
  created_at: string;
  currency: {
    code: string;
  };
}

interface Props {
  orders: Orders[];
}

const MyOrders = ({ orders }: Props) => {
  const t = useTranslations();
  return orders?.length > 0 ? (
    <div className="w-full bg-slate-50 rounded-md flex flex-col gap-3 p-3">
      <h1 className="text-xl font-raleway font-semibold">{t("My Orders")}</h1>
      <table className="w-full border-t-[1px] border-[#e0e0e0]">
        <thead>
          <tr className="text-center flex items-center justify-between py-4 border-b-[1px] border-[#e0e0e0] max-sm:hidden">
            <th className="font-raleway text-base font-medium flex-1 max-lg:text-base">
              #
            </th>
            <th className="font-raleway text-base font-medium flex-1 max-lg:text-base">
              {t("Items")}
            </th>
            <th className="font-raleway text-base font-medium flex-1 max-lg:text-base">
              {t("Amount")}
            </th>
            <th className="font-raleway text-base font-medium flex-1 max-lg:text-base">
              {t("Status")}
            </th>
            <th className="font-raleway text-base font-medium flex-1 max-lg:text-base">
              {t("Date")}
            </th>
            <th className="text-white flex-1 max-lg:text-base">
              {t("view order")}
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h1 className="text-center text-2xl">{t("You don't make any order yet")}</h1>
  );
};

export default MyOrders;
