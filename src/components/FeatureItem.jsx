"use client";
import React from "react";
import { ProductData123 } from "@/constants";
import { useRouter } from "next/navigation";

const FeatureItem = () => {
  const router = useRouter();

  const handleProductId = (id) => {
    return router.push(`/productPage/${id}`);
  };

  return (
    <div>
      <section className='bg-white relative z-20 pt-20'>
        <div className='mainsection container bg-white mx-auto'>
          <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title text-center mb-4'>
            FEATURED ITEMS
          </div>
          <div className='flex flex-col md:flex-row md:-mr-px text-sm'>
            <div className='w-full'>
              <div className='text-center mx-auto pt-10'>
                <div
                  x-show='activeTab === 01'
                  className='panel-01 tab-content overflow-hidden'
                >
                  <div className='flex flex-wrap sm:-mx-3 gap-y-6'>
                    {ProductData123.map((product, index) => {
                      if (index < 4) {
                        return (
                          <div
                            className='w-full lg:w-1/4 sm:w-1/2 sm:px-3'
                            key={index}
                          >
                            <div className=''>
                              <div className='flex text-center lg:w-auto'>
                                <div className='relative border border-gray-200 pb-4'>
                                  <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                                    <img
                                      src='./images/1040623_25528_STH.jpg'
                                      alt="Front of men's Basic Tee in white."
                                      className='w-auto h-auto max-h-max'
                                      width='50'
                                    />
                                    <div className='absolute top-5 right-5 text-gray-800 p-1 z-5'>
                                      <svg
                                        viewBox='0 0 44 44'
                                        className='w-4 h-4'
                                      ></svg>
                                    </div>
                                  </div>
                                  <div className='mt-6'>
                                    <a
                                      onClick={() =>
                                        handleProductId(product.id)
                                      }
                                    >
                                      <div className='mt-1 text-anchor hover:text-anchor-hover'>
                                        {product.productname}
                                      </div>
                                      <div className='mt-3 text-black text-base tracking-wider'>
                                        <span className='font-semibold'>
                                          {product.price}
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureItem;
