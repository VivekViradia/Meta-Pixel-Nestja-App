import React from "react";

const Footer = () => {
  return (
    <div>
      <div className='relative z-10'>
        <section>
          <footer
            aria-labelledby='footer-heading'
            className='bg-[#ffffff] tracking-[1.6px]'
          >
            <section className='mb-[50px]'>
              <div className='container mx-auto'>
                <div className='w-full max-w-[800px] mx-auto'>
                  <div className='text-[18px] leading-[28px] md:text-[20px] md:leading-[28px] mb-[36px] font-[600] text-center'>
                    Our approach as an extension of your brand is to help
                    maintain and build your brand equity with the right partners
                    in the corporate marketplace.
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
            <div className='bg-primary'>
              <div className='container mx-auto pt-[16px] pb-[16px] lg:pt-[44px] lg:pb-[44px]'>
                <div className='pb-[0px] lg:pb-[0px] w-full grid grid-cols-1 lg:grid-cols-3 gap-[32px]'>
                  <div className='order-2 lg:order-1 pl-[15px] pr-[15px]'>
                    <h3 className='w-full text-center lg:text-left text-[20px] leading-normal font-semibold uppercase text-[#ffffff] mb-[10px]'>
                      HELPFUL LINKS
                    </h3>
                    <ul
                      className='text-center lg:text-left mb-6 lg:mb-0 leading-none'
                      role='list'
                    >
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Special Request
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          FAQ
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Catalog
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Blog
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Sitemap
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Sitemap XML
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Accessibility
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Shipping Costs
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className='last:pb-[0px] mb-[5px]'>
                        <a
                          className='text-[14px] leading-[20px] text-[#ffffff] hover:text-[#ffffff] focus:text-[#ffffff]'
                          href='#'
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='order-1 md:col-span-3 lg:col-auto lg:order-2 w-full text-center flex flex-wrap justify-center items-center mb-[24px] lg:mb-[0px]'>
                    <a href='/' title='Corporate Gear'>
                      <img
                        alt='Corporate Gear'
                        src='https://www.corporategear.com/images/footer-logo.svg'
                      />
                    </a>
                  </div>
                  <div className='order-3 lg:order-3 w-full text-center flex lg:items-center justify-center lg:justify-end pl-[0px] pr-[20px]'>
                    <div className='inline-block text-center'>
                      <div className='mr-[5px]'>
                        <h3 className='text-[20px] leading-[21px] font-semibold uppercase text-[#ffffff]'>
                          STAY CONNECTED
                        </h3>
                        <ul
                          className='mt-[20px] mb-[16px] flex text-center gap-[16px] justify-center'
                          role='list'
                        >
                          <li>
                            <a
                              className='bg-[#ffffff] rounded-[6px] block p-[6px]'
                              href='https://www.facebook.com/shopcorporategear'
                              target='_blank'
                              title='Facebook'
                            >
                              <svg
                                className='w-[20px] h-[20px] fill-[#003a70]'
                                viewBox='0 0 320 512'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              className='bg-[#ffffff] rounded-[6px] block p-[6px]'
                              href='https://twitter.com/corporategear_'
                              target='_blank'
                              title='Twitter'
                            >
                              <svg
                                className='w-5 h-5 fill-[#003a70]'
                                viewBox='0 0 512 512'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              className='bg-[#ffffff] rounded-[6px] block p-[6px]'
                              href='https://www.instagram.com/corporate.gear'
                              target='_blank'
                              title='Instagram'
                            >
                              <svg
                                className='w-5 h-5 fill-[#003a70]'
                                viewBox='0 0 448 512'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              className='bg-[#ffffff] rounded-[6px] block p-[6px]'
                              href='https://www.pinterest.com/CorporateGear_/'
                              target='_blank'
                              title='Pinterest'
                            >
                              <svg
                                className='w-5 h-5 fill-[#003a70]'
                                viewBox='0 0 384 512'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              className='bg-[#ffffff] rounded-[6px] block p-[6px]'
                              href='https://www.linkedin.com/company/corporategear'
                              target='_blank'
                              title='Linkedin'
                            >
                              <svg
                                className='w-5 h-5 fill-[#003a70]'
                                viewBox='0 0 448 512'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              className='bg-[#ffffff] rounded-[6px] block p-[6px]'
                              href='https://www.youtube.com/channel/UCxDvnIackx0VjN9YiL0pAqg?sub_confirmation=1'
                              target='_blank'
                              title='YouTube'
                            >
                              <svg
                                className='w-5 h-5 fill-[#003a70]'
                                viewBox='0 0 576 512'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className='pt-[30px] pb-[10px] text-[20px] leading-[28px] font-semibold text-[#ffffff] uppercase'>
                        SIGN UP FOR NEWS &amp; UPDATES
                      </h3>
                      <div className='text-center px-2'>
                        <form className='flex max-w-[300px] mt-0 mx-auto gap-[2px]'>
                          <label className='sr-only' for='email-address'>
                            Email address
                          </label>
                          <input
                            autoComplete='email'
                            className='appearance-none min-w-0 w-full bg-[#ffffff] border border-gray-300 py-2 px-4 text-base text-primary placeholder-primary focus:outline-none focus:ring-0 focus:border-indigo-500 focus:placeholder-gray-400 sm:max-w-xs'
                            id='email-address'
                            name='email-address'
                            placeholder='Enter your email'
                            required=''
                            type='email'
                          />
                          <button
                            className='btn bg-secondary !font-semibold tracking-[1.4px] !px-2.5'
                            type='submit'
                          >
                            SUBMIT
                          </button>
                        </form>
                      </div>
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
                      © 2023 Corporate Gear by ParsonsKellogg All Rights
                      Reserved
                    </div>
                    <div className='w-full lg:w-1/3 lg:pl-[24px] lg:pr-[24px] text-center lg:text-right'>
                      <div className='flex flex-wrap items-center justify-center lg:text-right lg:justify-end'>
                        <span className='text-[#000000] font-semibold'>
                          WE ACCEPT
                        </span>
                        <img
                          alt='We Accept'
                          className='ml-[4px]'
                          role='presentation'
                          src='https://www.corporategear.com/images/footer-card-img.png'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Footer;
