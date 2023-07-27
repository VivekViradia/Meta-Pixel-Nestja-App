"use client";
import React from "react";

const MainBody = () => {
  const divStyle = {
    background: "url(images/combined-image.png) no-repeat -90px -129px",
  };

  return (
    <div>
      <section className='mainsection container mx-auto mt-5 mb-[50px] white-all'>
        <div className='relative w-full mx-auto flex flex-row'>
          <div className='absolute top-1/2 -translate-y-1/2 left-4 z-10 flex items-center'>
            <button className='flex justify-center items-center w-10 h-10 focus:outline-none'>
              <i className='text-[#ffffff] text-opacity-50 text-[30px] rotate-235 fa-sharp fa-solid fa-location-arrow'></i>
            </button>
          </div>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='relative'>
                  <div className='overflow-hidden'>
                    <iframe
                      src='https://player.vimeo.com/video/489862642?autoplay=1&loop=1&background=1&muted=1'
                      allow='autoplay; fullscreen'
                      allowfullscreen=''
                      data-ready='true'
                      frameborder='0'
                      className='w-full aspect-[7/3]'
                    ></iframe>
                  </div>
                  <div className='text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
                    <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title mb-1'>
                      BRANDED PROMOTIONAL & CORPORATE APPAREL
                    </div>
                    <div className='w-full text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-2'>
                      CUSTOM-EMBROIDERED LOGOS ON TOP-TIER NAME BRANDS
                    </div>
                    <a
                      href='product-page.html'
                      className='btn btn-lg btn-secondary'
                    >
                      SHOP BY BRAND
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mainsection container mx-auto mt-5 mb-[50px] white-all'>
        <div className='slickslider'>
          <div className='slick-item'>
            <div className='relative'>
              <div className='overflow-hidden'>
                <iframe
                  src='https://player.vimeo.com/video/489862642?autoplay=1&loop=1&background=1&muted=1'
                  allow='autoplay; fullscreen'
                  allowfullscreen=''
                  data-ready='true'
                  frameborder='0'
                  className='w-full aspect-[7/3]'
                ></iframe>
              </div>
              <div className='text-center w-full z-10 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
                <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title mb-1'>
                  BRANDED PROMOTIONAL & CORPORATE APPAREL
                </div>
                <div className='w-full text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-2'>
                  CUSTOM-EMBROIDERED LOGOS ON TOP-TIER NAME BRANDS
                </div>
                <a
                  href='product-page.html'
                  className='btn btn-lg btn-secondary'
                >
                  SHOP BY BRAND
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white relative z-20 pt-[50px]'>
        <div className='mainsection container bg-white mx-auto white-all overflow-hidden'>
          <div className='flex flex-wrap -mx-3 gap-y-6'>
            <div className='w-full md:w-1/2 lg:w-2/3 px-3 flex'>
              <div className='flex relative w-full text-white group overflow-hidden'>
                <div className='h-96'>
                  <img
                    className='object-cover group-hover:scale-105 transition-all group-hover:transition-all duration-500 group-hover:duration-500 ease-in group-hover:ease-in'
                    src='images/patagonia-promotional-embroidered-clothing.jpg'
                    alt=''
                    title=''
                  />
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4'>
                  <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title mb-2'>
                    PATAGONIA CORPORATE APPAREL
                  </div>
                  <div className='w-full text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-2'>
                    ELEVATE YOUR CORPORATE GIFTS
                  </div>
                  <div className=''>
                    <a
                      href='product-page.html'
                      className='btn btn-lg btn-secondary'
                    >
                      SHOP PATAGONIA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-3 flex'>
              <div className='flex relative w-full text-white group overflow-hidden'>
                <div className='h-96'>
                  <img
                    className='object-cover group-hover:scale-105 transition-all group-hover:transition-all duration-500 group-hover:duration-500 ease-in group-hover:ease-in'
                    src='images/nike-promotional-embroidered-clothing.jpg'
                    alt=''
                    title=''
                  />
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4'>
                  <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title mb-2'>
                    CUSTOM NIKE
                  </div>
                  <div className='w-full text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-2'>
                    WITH YOUR LOGO
                  </div>
                  <div className=''>
                    <a
                      href='product-page.html'
                      className='btn btn-lg btn-secondary'
                    >
                      SHOP CUSTOM NIKE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white relative z-20 pt-6'>
        <div className='mainsection container bg-white mx-auto white-all overflow-hidden'>
          <div className='flex flex-wrap -mx-3 gap-y-6'>
            <div className='w-full md:w-1/2 lg:w-1/3 px-3 flex'>
              <div className='flex relative w-full text-white group overflow-hidden'>
                <div className='h-96'>
                  <img
                    className='object-cover group-hover:scale-105 transition-all group-hover:transition-all duration-500 group-hover:duration-500 ease-in group-hover:ease-in'
                    src='images/peter-millar-promotional-embroidered-clothing.jpg'
                    alt=''
                    title=''
                  />
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4'>
                  <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title mb-2'>
                    PETER MILLAR
                  </div>
                  <div className='w-full text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-2'>
                    CUSTOM GOLF SHIRTS
                  </div>
                  <div className=''>
                    <a
                      href='product-page.html'
                      className='btn btn-lg btn-secondary'
                    >
                      SHOP PETER MILLAR
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-2/3 px-3 flex'>
              <div className='flex relative w-full text-white group overflow-hidden'>
                <div className='h-96'>
                  <img
                    className='object-cover group-hover:scale-105 transition-all group-hover:transition-all duration-500 group-hover:duration-500 ease-in group-hover:ease-in'
                    src='images/yeti-promotional-engraved-drinkware.jpg'
                    alt=''
                    title=''
                  />
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-full text-center p-4'>
                  <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title mb-2'>
                    CUSTOM YETI CUPS
                  </div>
                  <div className='w-full text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-2'>
                    CUSTOMIZE YETI WITH YOUR LOGO
                  </div>
                  <div className=''>
                    <a
                      href='product-page.html'
                      className='btn btn-lg btn-secondary'
                    >
                      SHOP CUSTOM YETI
                    </a>
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

export default MainBody;
