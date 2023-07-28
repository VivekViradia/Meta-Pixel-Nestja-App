"use client";
import React from "react";
// import ProductData from "../../../Data/ProductData.json";
import ProductData from "../../Data/ProductData.json";
import { useRouter } from "next/navigation";

export const ProductPage = () => {
  const router = useRouter();
  const handleProductId = (id) => {
    return router.push(`/productPage/${id}`);
  };

  return (
    <div className='container pl-[15px] pr-[15px] mx-auto'>
      <div aria-labelledby='products-heading' className='mt-[20px]'>
        <h2 id='products-heading' className='sr-only'>
          Products
        </h2>
        <div className='flex flex-wrap ml-[-15px] mr-[-15px]'>
          <div className='w-full lg:w-9/12 pl-[15px] pr-[15px]'>
            <div className='mt-[32px] relative' id='gridview'>
              <div className='relative w-full pb-[24px] -mb-6'>
                <ul
                  role='list'
                  className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-6 lg:gap-8 mb-[32px]'
                >
                  {ProductData.map((product, index) => {
                    return (
                      <li
                        className='text-center'
                        key={index}
                        onClick={() => handleProductId(product.id)}
                      >
                        <div className=''>
                          <div className='flex text-center lg:w-auto'>
                            <div className='relative border border-gray-200 pb-[30px]'>
                              <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                                <a className='relative'>
                                  <img
                                    src='./images/1040623_25528_STH.jpg'
                                    alt=''
                                    className='w-auto h-auto max-h-max'
                                  />
                                </a>
                                <div className='absolute top-1 right-1 text-gray-800 p-1 z-5'>
                                  <a className='text-primary hover:text-secondary'>
                                    <span className='material-icons-outlined'>
                                      favorite_border
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className='mt-[24px] pl-[8px] pr-[8px]'>
                                <div className='mt-[14px] text-anchor hover:text-anchor-hover h-[44px] text-ellipsis overflow-hidden line-clamp-2 text-small-text tracking-[1.4px]'>
                                  <a className='relative underline text-[#006cd1]'>
                                    <span className='absolute inset-0'></span>
                                    {product.productname}
                                  </a>
                                </div>
                                <div className='mt-[12px] text-[#000000] text-normal-text text-medium-text tracking-wider'>
                                  <span className='font-semibold'>
                                    MSRP ${product.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
