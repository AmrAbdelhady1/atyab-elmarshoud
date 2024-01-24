'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { PreLoader } from '@/components';
import OrderItem from './OrderItem';
import PageHeader from '@/components/PageHeader';


import { TitleLineSvg } from "@/public/assets/svg/FragranceTypesSvgs";
import { MdOutlineDiscount } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
import { addData } from "@/axios/axiosClient";
import toast from "react-hot-toast";


interface Phone {
	id: number;
	country_key: string;
	number: string;
}

interface Currency {
	id: number;
	name: string;
	global_code: string;
	code: string;
	image: string;
	fees: number;
	currency_digits: number;
}

interface Country {
	id: number;
	name: string;
	iso: string;
	currency: Currency;
	phone_key: string;
	start_delivery_range: number;
	end_delivery_range: number;
}

interface Address {
	id: number;
	user_id: number;
	country_id: number;
	city_id: number;
	name: string;
	address_line_1: string;
	zip_code: string | null;
	notes: string | null;
	country_name: string;
	city: string;
	phone: Phone;
	country: Country;
}

interface Gallery {
	url: string;
	name: string | null;
}

interface Category {
	id: number;
	name: string;
	image: string;
	featured: number;
	active: number;
	sort: number;
}

interface Product {
	id: number;
	category_id: number;
	name: string;
	image: string;
	price: number;
	purchasable_type: string;
	purchusable: number;
	quantity: number;
	weight: number;
	featured: boolean;
	views: number;
	sort: number;
	sold: number;
	gallery: Gallery[];
	is_favorite: boolean;
	ingredients: string;
	description: string;
	discount: number;
	category: Category;
	url: string;
}

interface cartItem {
	id: number;
	cart_id: number;
	product_id: number;
	price: number;
	currency_iso: string;
	quantity: number;
	product: Product;
}

interface CheckoutPageProps {
	addressData: Address[];
	checkoutData: any;
	paymentMethods: any;
	currency: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
	addressData,
	checkoutData,
	paymentMethods,
	currency,
}) => {
	const t = useTranslations();
	const cart = useSelector((state: any) => state.CartReducer);
	const cartItems = cart.items;


  const [isCouponFormOpen, setIsCouponFormOpen] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const handleSubmit = async () => {
    try{
      const res = await addData({ payment_method_id:  paymentMethod.id}, "submit-checkout");
      
      if (res?.data) {
        window.open(res.data.paymentUrl, "_self");
      }else{
        toast.error(res.response.data.errors.message[0]);
      }

    }catch{
    }
  };


	return (
		<>
			<PreLoader />

			{addressData.length === 0 && (
				<div className='w-[90%] h-[90vh] flex items-center justify-start mx-14 max-md:mx-5'>
					<div className='h-[50%] flex flex-col gap-20 items-start w-full'>
						<div className='flex items-center gap-5 border border-[#6396d0] w-full p-5 rounded-md'>
							<IoIosInformationCircleOutline color='#6396d0' size={30} />
							<p className='font-nunito text-[#616161] text-lg'>
								{t('You have no saved Address, Add one then proceed to checkout')}
							</p>
						</div>
						<Link
							href='/profile'
							className='border border-black font-raleway font-bold text-sm py-5 px-10 hover:text-white hover:bg-black transition-all duration-300'>
							{t('ADD ADDRESS')}
						</Link>
					</div>
				</div>
			)}

			{cartItems.length === 0 && (
				<div className='w-[90%] h-[90vh] flex items-center justify-start mx-14 max-md:mx-5'>
					<div className='h-[50%] flex flex-col gap-20 items-start w-full'>
						<div className='flex items-center gap-5 border border-[#6396d0] w-full p-5 rounded-md'>
							<IoIosInformationCircleOutline color='#6396d0' size={30} />
							<p className='font-nunito text-[#616161] text-lg'>
								{t('Your cart is currently empty')}
							</p>
						</div>
						<Link
							href='/category/5'
							className='border border-black font-raleway font-bold text-sm py-5 px-10 hover:text-white hover:bg-black transition-all duration-300'>
							{t('RETURN TO SHOP')}
						</Link>
					</div>
				</div>
			)}

			{cartItems.length !== 0 && (
				<>
					{/* Header */}
					<PageHeader
						bgImgClassName='header-img'
						firstText='Organic Cosmetic'
						firstTextClassName='font-quentin'
						secondText='Shop Checkout'
					/>

					{/* Content Wrapper */}
					<div className='mx-[119.6px] my-[150px] max-w-full max-lg:mx-2'>
						{/* Coupon Bar */}
						{/* <div className='w-full flex items-center gap-5 border-2 border-[#6396d0] px-4 py-6 mb-20 rounded-md'>
							<MdOutlineDiscount color='#6396d0' size={30} />
							<p className='text-[#616161] text-lg font-medium font-nunito'>
								{t('Have a coupon?')}{' '}
								<a
									className='text-[#232323] text-lg font-bold font-nunito cursor-pointer hover:text-[#6396d0] transition-all duration-500'
									onClick={() => setIsCouponFormOpen(!isCouponFormOpen)}>
									{t('Click here to enter your code')}
								</a>
							</p>
						</div> */}

						{/* Coupon Form */}
						{/* <AnimatePresence mode='popLayout'>
							{isCouponFormOpen && (
								<motion.div
									transition={{ duration: 0.5 }}
									initial={{ y: -100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -100, opacity: 0 }}
									className='w-full flex flex-col items-start gap-5 border border-[#e0e0e0] px-4 py-6 mb-20'>
									<p className='font-nunito font-normal text-lg text-[#616161]'>
										{t('If you have a coupon code, please apply it below')}
									</p>
									<div className='flex flex-wrap gap-5 w-full'>
										<input
											type='text'
											placeholder={t('Coupon code')}
											className='border border-[#e0e0e0] px-[17px] py-4 h-[56px] w-[70%] font-nunito text-lg'
										/>
										<button className='animate-button'>{t('APPLY COUPON')}</button>
									</div>
								</motion.div>
							)}
						</AnimatePresence> */}

            {/* Billing Details and Your Order */}
            <motion.div className="flex gap-8 max-lg:flex-col" layout>
              {/* Billing Details */}
              <div className="flex-[0.68] flex flex-col gap-2">
                {/* <TitleLineSvg /> */}
                <h2 className="font-raleway text-3xl">{t("Your Address")}</h2>
                <div className="flex flex-col gap-2 mt-4 border-2 border-[#6396d0] rounded-md shadow-md p-5">
                  <div className="flex gap-2 items-center">
                    <h2 className="font-nunito text-xl">Country: </h2>
                    <p className="font-nunito text-lg font-light">
                      {addressData[0].country_name}
                    </p>
                  </div>
                  <hr />
                  <div className="flex gap-2 items-center">
                    <h2 className="font-nunito text-xl">City: </h2>
                    <p className="font-nunito text-lg font-light">
                      {addressData[0].city}
                    </p>
                  </div>
                  <hr />
                  <div className="flex gap-2 items-center">
                    <h2 className="font-nunito text-xl">Address Name: </h2>
                    <p className="font-nunito text-lg font-light">
                      {addressData[0].name}
                    </p>
                  </div>
                  <hr />
                  <div className="flex gap-2 items-center">
                    <h2 className="font-nunito text-xl">Address Line: </h2>
                    <p className="font-nunito text-lg font-light">
                      {addressData[0].address_line_1}
                    </p>
                  </div>
                  <hr />
                  <div className="flex gap-2 items-center">
                    <h2 className="font-nunito text-xl">Zip Code: </h2>
                    <p className="font-nunito text-lg font-light">
                      {addressData[0].zip_code}
                    </p>
                  </div>
                  <hr />
                  <div className="flex gap-2 items-center">
                    <h2 className="font-nunito text-xl">Phone Number: </h2>
                    <p className="font-nunito text-lg font-light">
                      {addressData[0].phone.country_key +
                        " " +
                        addressData[0].phone.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Your Order */}
              <div className="flex-[0.32]">
                {/* <TitleLineSvg /> */}
                <h2 className="font-raleway text-3xl my-5">
                  {t("Your order")}
                </h2>
                <div className="flex flex-col gap-5">
                  {cartItems!.map((cartItem: cartItem) => (
                    <OrderItem key={cartItem.product_id} cartItem={cartItem} currency={currency} />
                  ))}
                </div>
                <div className="mt-20">
                  {/* <TitleLineSvg /> */}
                  <h2 className="font-raleway text-3xl mt-5 mb-8">
                    {t("Cart Total")}
                  </h2>
                  <div className="flex justify-between mb-3">
                    <p className="font-nunito font-semibold text-xl">
                      {t("Subtotal")}
                    </p>
                    <p className="font-nunito font-semibold text-xl">
                      {cart.total} {currency}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-nunito font-semibold text-xl">
                      {t("Total")}
                    </p>
                    <p className="font-nunito font-semibold text-xl">
                      {cart.sub_total} {currency}
                    </p>
                  </div>
                </div>
                <div className="mt-20">
                  {/* <TitleLineSvg /> */}
                  <h2 className="font-raleway text-3xl mt-5 mb-8">
                    {t("Payment Method")}
                  </h2>
                  <div className="flex gap-5 flex-col">
                    {paymentMethods.map((item: any) => (
                      <div
                        key={item.id}
                        onClick={() => setPaymentMethod(item)}
                        className="cursor-pointer flex flex-col gap-2 text-center w-fit"
                      >
                        <div className="flex items-center gap-3">
                          <label className="container">
                            <input
                              type="checkbox"
                              checked={
                                item.id === paymentMethod.id ? true : false
                              }
                            />
                            <span className="checkmark"></span>
                          </label>
                          <div className="flex flex-col gap-4">
                            <Image
                              src={item.image}
                              alt="p-me"
                              priority
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <p className="font-bold text-[#b8860b]">{item.name}</p>
                      </div>
                    ))}
                  </div>
                  {/* <div className='flex items-start gap-2 border border-[#6396d0] w-full py-5 px-2'>

										<IoIosInformationCircleOutline
											color='#6396d0'
											size={30}
											className='flex-[0.1]'
										/>
										<p className='flex-[0.9] [font-nunito text-[#616161] text-lg'>
											{t('payment-message')}
										</p>
									</div> */}

                </div>
                <div className="mt-20">
                  <p className="font-nunito font-normal text-[#616161] text-lg pr-6 mb-5">
                    {t(
                      "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our"
                    )}{" "}
                    <a className="text-black cursor-pointer hover:text-[#6396d0] transition-all duration-300">
                      {t("privacy policy")}
                    </a>
                    .
                  </p>
                  <div className="mb-5 flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="termsandconditions"
                      id="terms"
                      className="mt-2"
                    />
                    <p className="font-nunito font-normal text-[#616161] text-lg">
                      {t("I have read and agree to the website")}{" "}
                      <a className="text-black cursor-pointer hover:text-[#6396d0] transition-all duration-300">
                        {t("terms and conditions")}
                      </a>
                      <span className="text-orange-600">*</span>
                    </p>
                  </div>
                  <button
                    className="animate-button !w-full !py-4"
                    onClick={handleSubmit}
                  >
                    {t("PLACE ORDER")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );

};

export default CheckoutPage;
