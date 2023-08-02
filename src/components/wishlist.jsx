"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const WishList = ({ productID, productName, productPrice }) => {
  // const [product]
  const router = useRouter();
  console.log("ProductID", productID);
  console.log("productName", productName);
  console.log("productPrice", productPrice);

  const handleProductClick = (id) => {
    router.push(`/productPage/${id}`);
  };

  return (
    <div className='font-Outfit'>
      <div className='pt-[30px] pb-[30px]'>
        <div className='container mx-auto'>
          <div className='text-2xl-text font-[600] text-center'>WISHLIST</div>
          <div className='flex flex-wrap mx-[-15px] mt-[50px]'>
            <div className='w-full sm:w-1/2 lg:w-1/4 px-[15px]'>
              <div className='border border-[#f0f0f0] text-default-text'>
                <div className='pt-[10px] pb-[5px] flex items-center justify-center'>
                  <img
                    className='max-h-[340px]'
                    src='images/110771_2994514_stonewash_4197.jpg'
                    alt=''
                  />
                </div>
                <div className='px-[15px] text-center'>
                  <div className='mb-[10px]'>
                    <a
                      href='/patagonia-men-s-micro-d-pullover.html'
                      className='text-anchor h-[40px] block'
                    >
                      {productName}
                    </a>
                  </div>
                  <div className='flex flex-wrap justify-center items-center mt-[5px] mb-[10px]'>
                    <div className=''>Price:</div>
                    <div className='font-[600]'>{productPrice}</div>
                  </div>
                  <div className='mb-[10px] flex flex-wrap justify-center items-center gap-2.5'>
                    <a
                      className='btn btn-normal btn-secondary border border-gray-700'
                      onClick={() => handleProductClick(productID)}
                    >
                      View
                    </a>{" "}
                    <Link
                      href={{
                        pathname: `/addtocart/`,
                        query: {
                          productID: productID,
                          productName: productName,
                          productPrice: productPrice,
                        },
                      }}
                      legacyBehavior
                    >
                      <a className='btn btn-normal btn-secondary border border-gray-700'>
                        Add To Cart
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <footer
          aria-labelledby='footer-heading'
          className='bg-[#ffffff] tracking-[1.6px]'
        >
          <section className='mb-[50px]'>
            <div className='container mx-auto'>
              <div className='w-full max-w-[800px] mx-auto'>
                <div className='text-[18px] leading-[28px] md:text-[20px] md:leading-[28px] mb-[36px] font-[600] text-center'>
                  Our approach as an extension of your brand is to help maintain
                  and build your brand equity with the right partners in the
                  corporate marketplace.
                </div>
                <div className='flex flex-wrap justify-center items-center gap-y-5'>
                  <div className='w-1/2 md:w-1/3 text-center order-2 md:order-1'>
                    <a href='#' title='Chat'>
                      <div className='bg-tertiary w-[74px] h-[74px] mx-auto mb-[8px] rounded-full flex items-center justify-center'>
                        <span className='material-icons-outlined text-[40px] leading-[40px]'>
                          chat
                        </span>
                      </div>
                      <div className='text-[16px] leading-[24px] font-semibold uppercase'>
                        Chat
                      </div>
                    </a>
                  </div>
                  <div className='w-full md:w-1/3 text-center order-1 md:order-2'>
                    <div className='text-[16px] leading-[24px] lg:text-[24px] lg:leading-[32px] font-semibold uppercase'>
                      Contact Us
                    </div>
                  </div>
                  <div className='w-1/2 md:w-1/3 text-center order-3 md:order-3'>
                    <a href='#' title='phone'>
                      <div className='bg-tertiary w-[74px] h-[74px] mx-auto mb-[8px] rounded-full flex items-center justify-center'>
                        <span className='material-icons text-[40px] leading-[40px]'>
                          phone
                        </span>
                      </div>
                      <div className='text-[16px] leading-[24px] font-semibold uppercase'>
                        Call
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='bg-secondary md:pt-[16px] md:pb-[16px] text-center'>
            <div className='md:flex justify-center pl-[15px] pr-[15px] md:pl-[0] md:pr-[0]'>
              <div className='w-full md:w-auto inline-block pl-[20px] pr-[20px] pt-[20px] pb-[20px] md:pt-0 md:pb-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-r-[#000000] border-b-[#fff]'>
                <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                  <span
                    aria-level='3'
                    className='material-icons text-2xl-text'
                    role='heading'
                  >
                    local_shipping
                  </span>
                  <div className='ml-[8px] text-left text-small-text'>
                    <div className='pb-[2px]'>FREE SHIPPING ON</div>
                    <div>ORDERS OVER $4K</div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-auto inline-block pl-[20px] pr-[20px] pt-[20px] pb-[20px] md:pt-0 md:pb-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-r-[#000000] border-b-[#fff]'>
                <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                  <span
                    aria-level='3'
                    className='material-icons text-2xl-text'
                    role='heading'
                  >
                    style
                  </span>
                  <div className='ml-[8px] text-left text-small-text'>
                    <div className='pb-[2px]'>1ST LOGO FREE</div>
                    <div>UP TO 10,000 STITCHES</div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-auto inline-block pl-[20px] pr-[20px] pt-[20px] pb-[20px] md:pt-0 md:pb-0 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-[#000000]'>
                <div className='w-full md:w-auto flex flex-wrap justify-center items-center'>
                  <span
                    aria-level='3'
                    className='material-icons text-2xl-text'
                    role='heading'
                  >
                    verified
                  </span>
                  <div className='ml-[8px] text-left text-small-text'>
                    <div className='pb-[2px]'>FREE PROOF</div>
                    <div>ON ALL ORDERS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[#f5f6f6]'>
            <div className='container mx-auto text-[14px] leading-[20px]'>
              <div className='pl-[15px] pr-[15px] pt-[25px] pb-[25px]'>
                <div className='flex flex-wrap lg: ml-[-24px] mr-[-24px] gap-y-[16px] items-center'>
                  <div className='w-full lg:w-1/3 lg:pl-[24px] lg:pr-[24px] text-center lg:text-left'>
                    <img
                      alt=''
                      className='m-auto lg:m-0'
                      src='https://www.corporategear.com/images/one-per-for-the-planet.png'
                    />
                  </div>
                  <div className='w-full lg:w-1/3 lg:pl-[16px] lg:pr-[16px] text-center tracking-[1.4px]'>
                    © 2023 Corporate Gear by ParsonsKellogg All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default WishList;
