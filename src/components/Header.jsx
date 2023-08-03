"use client";
import React, { useEffect } from "react";
import { trackEvent } from "../../utils/gtm";
import Script from "next/script";

const Header = () => {
  // const handleClick = () => {
  //   trackEvent("Button", "Click", "MyButton", 1);
  // };

  // useEffect(() => {
  //   handleEvent;
  // }, []);

  // const handleEvent = () => {
  //   window.dataLayer.push({
  //     event: "Product Listing",
  //     pagePath: "/productPage",
  //     pageName: "ProductPage",
  //   });
  // };

  return (
    <header className='relative trancking-[1px]'>
      <nav aria-label='Top'>
        <div className='bg-[#ffffff]'>
          <div className='container pl-[15px] pr-[15px] mx-auto'>
            <div className='pt-[10px] pb-[10px]'>
              <div className='flex items-center justify-between'>
                <div className='sm:flex sm:items-center sm:w-[50%] md:w-[25%] relative'>
                  <a
                    title='CG'
                    className='max-w-[350px] w-full inline-block'
                    href='/'
                  >
                    <div className='brand-logo w-full'>
                      <img
                        alt=''
                        src='https://redefinecommerce.blob.core.windows.net/rdc/1/store/logo_4.svg'
                        className='max-h-full'
                      />
                    </div>
                  </a>
                </div>
                <div className='h-full hidden lg:flex items-center flex-1'>
                  <div className=''>
                    <div className='h-full flex header-nav relative'>
                      <div className='relative flex'>
                        <a className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover a'>
                          <span className='uppercase'>testing</span>
                        </a>
                      </div>
                      <div className='relative flex'>
                        <a
                          href='../productPage'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover a'
                          onClick={() => handleEvent()}
                        >
                          <span className='uppercase'>Product Listing</span>
                        </a>
                      </div>
                      <div className='relative flex'>
                        <a
                          title='Men'
                          href='product-listing.html'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                        >
                          <span className='uppercase'>Men</span>
                        </a>
                      </div>
                      <div className='relative flex'>
                        <a
                          title='Women'
                          href='product-listing.html'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                        >
                          <span className='uppercase'>Women</span>
                        </a>
                      </div>
                      <div className='relative flex'>
                        <a
                          title='Golf'
                          href='product-listing.html'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                        >
                          <span className='uppercase'>Golf</span>
                        </a>
                      </div>

                      <div className='relative flex'>
                        <a
                          title='Accessories'
                          href='product-listing.html'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                        >
                          <span className='uppercase'>Accessories</span>
                        </a>
                      </div>

                      <div className=''>
                        <a
                          title='Consultation'
                          href='product-listing.html'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                        >
                          <span className='uppercase'>Consultation</span>
                        </a>
                      </div>
                      <div className=''>
                        <a
                          title='FAQ'
                          href='product-listing.html'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                        >
                          <span className='uppercase'>FAQ</span>
                        </a>
                      </div>
                      <div className=''>
                        <a
                          href='product-listing.html'
                          className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                        >
                          <span className='uppercase'>Sale</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:hidden'>
                <form action='#' className=''>
                  <div className=''>
                    <div className='border border-[#003a70] pt-[5px] pb-[4px] pl-[15px] pr-[24px] text-primary relative'>
                      <input
                        name='text'
                        min='1'
                        id='txtSearch'
                        placeholder='Search'
                        className='outline-none w-full border-0 focus:ring-0 text-[14px] tracking-[1px] text-primary h-[26px]'
                        autoComplete='off'
                        maxLength='255'
                      />
                      <button className='w-[24px] h-[24px] absolute right-[6px] top-[6px]'>
                        <span className='material-icons text-primary font-[900]'>
                          search
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
