import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

import { FaEye } from "react-icons/fa";

interface Order {
  id: number;
  orders_products_count: number;
  total: number;
  status: string;
  created_at: string;
  currency: {
    code: string;
  };
}

interface OrderItemProps {
  order: Order;
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const t = useTranslations();
  return (
    <tr className="text-center flex items-center justify-between py-4 border-b-[1px] border-[#e0e0e0] max-sm:flex-col max-sm:items-stretch">
      <td className="font-nunito text-base font-semibold flex-1 max-lg:text-base max-sm:flex max-sm:items-center max-sm:justify-between">
        <p className="sm:hidden">#: </p>
        {order?.id}
      </td>
      <td className="font-nunito text-base font-semibold flex-1 max-lg:text-base max-sm:flex max-sm:items-center max-sm:justify-between">
        <p className="sm:hidden">{t("Items")}: </p>
        {order?.orders_products_count}
      </td>
      <td className="font-nunito text-base font-semibold flex-1 max-lg:text-base max-sm:flex max-sm:items-center max-sm:justify-between">
        <p className="sm:hidden">{t("Amount")}: </p>
        {order?.total} {order?.currency?.code}
      </td>
      <td className="font-nunito text-base font-semibold flex-1 max-lg:text-base max-sm:flex max-sm:items-center max-sm:justify-between">
        <p className="sm:hidden">{t("Status")}: </p>
        {order?.status}
      </td>
      <td className="font-nunito text-base font-semibold flex-1 max-lg:text-base max-sm:flex max-sm:items-center max-sm:justify-between">
        <p className="sm:hidden">{t("Date")}: </p>
        {order?.created_at}
      </td>
      <td className="flex items-center justify-center flex-1 max-lg:text-base cursor-pointer hover:scale-110 transition-all ease-in-out">
        <Link href="order-details">
          <FaEye size={25} />
        </Link>
      </td>
    </tr>
  );
};

export default OrderItem;
