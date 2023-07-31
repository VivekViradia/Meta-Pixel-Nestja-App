"use client";
import React from "react";
import useSWR from "swr";
import ProductData from "../../Data/ProductData.json";
import { useRouter } from "next/navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

const FeatureItem = () => {
  // const { ProductData } = Data;
  // console.log("Data123", Data);
  // console.log("ProductData123", ProductData);
  const router = useRouter();
  const { data, error } = useSWR("/api/staticdata", fetcher);
  console.log("Json Api Data", data);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  const handleProductId = (id) => {
    return router.push(`/productPage/${id}`);
    // return router.push(`/productPage/productItem?id=${id}`);
  };

  return (
    <div>
      <section class='bg-white relative z-20 pt-20'>
        <div class='mainsection container bg-white mx-auto'>
          <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title text-center mb-4'>
            FEATURED ITEMS
          </div>
          <div class='flex flex-col md:flex-row md:-mr-px text-sm'>
            <div className='w-full'>
              <div class='text-center mx-auto pt-10'>
                <div
                  x-show='activeTab === 01'
                  className='panel-01 tab-content overflow-hidden'
                >
                  <div class='flex flex-wrap sm:-mx-3 gap-y-6'>
                    {ProductData.map((product, index) => {
                      if (index < 4) {
                        return (
                          <div
                            class='w-full lg:w-1/4 sm:w-1/2 sm:px-3'
                            key={index}
                            onClick={() => handleProductId(product.id)}
                          >
                            <div class=''>
                              <div class='flex text-center lg:w-auto'>
                                <div class='relative border border-gray-200 pb-4'>
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
                                      >
                                        <path
                                          id='favorite_FILL0_wght400_GRAD0_opsz48'
                                          d='M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z'
                                          transform='translate(-2 -1.3)'
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class='mt-6'>
                                    <div className='mt-1 text-anchor hover:text-anchor-hover'>
                                      <a
                                        href='product-page.html'
                                        class='relative'
                                      >
                                        <span class='absolute inset-0'></span>
                                        {product.productname}
                                      </a>
                                    </div>
                                    <div className='mt-3 text-black text-base tracking-wider'>
                                      <span class='font-semibold'>
                                        {product.price}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}

                    {/* <div class='w-full lg:w-1/4 sm:w-1/2 sm:px-3'>
                      <div class=''>
                        <div class='flex text-center lg:w-auto'>
                          <div class='relative border border-gray-200 pb-4'>
                            <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                              <img
                                src='./images/1040623_25528_STH.jpg'
                                alt="Front of men's Basic Tee in white."
                                className='w-auto h-auto max-h-max'
                                width='50'
                              />
                              <div className='absolute top-5 right-5 text-gray-800 p-1 z-5'>
                                <svg
                                  // xmlns='http://www.w3.org/2000/svg'
                                  //   xmlns:xlink='http://www.w3.org/1999/xlink'
                                  viewBox='0 0 44 44'
                                  className='w-4 h-4'
                                >
                                  <path
                                    id='favorite_FILL0_wght400_GRAD0_opsz48'
                                    d='M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z'
                                    transform='translate(-2 -1.3)'
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div class='mt-6'>
                              <div className='mt-1 text-anchor hover:text-anchor-hover'>
                                <a href='product-page.html' class='relative'>
                                  <span class='absolute inset-0'></span>
                                  Patagonia Men's Better Sweater Jacket
                                </a>
                              </div>
                              <div className='mt-3 text-black text-base tracking-wider'>
                                <span class='font-semibold'>
                                  MSRP_2 $169.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='w-full lg:w-1/4 sm:w-1/2 sm:px-3'>
                      <div class=''>
                        <div class='flex text-center lg:w-auto'>
                          <div class='relative border border-gray-200 pb-4'>
                            <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                              <img
                                src='./images/1040623_25528_STH.jpg'
                                alt="Front of men's Basic Tee in white."
                                className='w-auto h-auto max-h-max'
                                width='50'
                              />
                              <div className='absolute top-5 right-5 text-gray-800 p-1 z-5'>
                                <svg
                                  // xmlns='http://www.w3.org/2000/svg'
                                  //   xmlns:xlink='http://www.w3.org/1999/xlink'
                                  viewBox='0 0 44 44'
                                  className='w-4 h-4'
                                >
                                  <path
                                    id='favorite_FILL0_wght400_GRAD0_opsz48'
                                    d='M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z'
                                    transform='translate(-2 -1.3)'
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div class='mt-6'>
                              <div className='mt-1 text-anchor hover:text-anchor-hover'>
                                <a href='product-page.html' class='relative'>
                                  <span class='absolute inset-0'></span>
                                  Patagonia Men's Better Sweater Jacket
                                </a>
                              </div>
                              <div className='mt-3 text-black text-base tracking-wider'>
                                <span class='font-semibold'>
                                  MSRP_3 $159.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='w-full lg:w-1/4 sm:w-1/2 sm:px-3'>
                      <div class=''>
                        <div class='flex text-center lg:w-auto'>
                          <div class='relative border border-gray-200 pb-4'>
                            <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                              <img
                                src='./images/1040623_25528_STH.jpg'
                                alt="Front of men's Basic Tee in white."
                                className='w-auto h-auto max-h-max'
                                width='50'
                              />
                              <div className='absolute top-5 right-5 text-gray-800 p-1 z-5'>
                                <svg
                                  // xmlns='http://www.w3.org/2000/svg'
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                                  viewBox='0 0 44 44'
                                  className='w-4 h-4'
                                >
                                  <path
                                    id='favorite_FILL0_wght400_GRAD0_opsz48'
                                    d='M24,41.95,21.95,40.1A177.4,177.4,0,0,1,8.9,27.1Q4,21.55,4,15.85A10.334,10.334,0,0,1,14.5,5.3a11.375,11.375,0,0,1,5.05,1.225A11.871,11.871,0,0,1,24,10.55a14.5,14.5,0,0,1,4.55-4.025A10.564,10.564,0,0,1,33.5,5.3,10.334,10.334,0,0,1,44,15.85q0,5.7-4.9,11.25a177.4,177.4,0,0,1-13.05,13Zm0-18.8ZM24,38q7.6-7,12.3-12.15t4.7-10A7.271,7.271,0,0,0,33.5,8.3a8.013,8.013,0,0,0-4.7,1.55,11.3,11.3,0,0,0-3.6,4.45H22.75a10.835,10.835,0,0,0-3.575-4.45A8.052,8.052,0,0,0,14.5,8.3a7.264,7.264,0,0,0-5.4,2.125A7.394,7.394,0,0,0,7,15.85q0,4.85,4.7,10T24,38Z'
                                    transform='translate(-2 -1.3)'
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div class='mt-6'>
                              <div className='mt-1 text-anchor hover:text-anchor-hover'>
                                <a href='product-page.html' class='relative'>
                                  <span class='absolute inset-0'></span>
                                  Patagonia Men's Better Sweater Jacket
                                </a>
                              </div>
                              <div className='mt-3 text-black text-base tracking-wider'>
                                <span class='font-semibold'>
                                  MSRP_4 $109.00
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
