import React from "react";

const EmptyCard = () => {
  return (
    <div className='font-Outfit tracking-[1.4px]'>
      <div className='bg-[#ffffff] sticky top-0 z-40 shadow-[0_0px_5px_rgba(0,0,0,0.12)]'>
        <div className='bg-primary hidden md:block'>
          <div className='container pl-[15px] pr-[15px] mx-auto'>
            <div className='flex flex-wrap justify-between items-center'>
              <div className='flex items-center'>
                <span className='material-icons mr-[4px] text-quaternary leading-[30px]'>
                  verified
                </span>
                <div className='text-[#ffffff] text-[14px] tracking-[1.4px] leading-[30px]'>
                  Free Logo &amp; Proof on All Orders + Free Shipping on Orders
                  Over $4K
                </div>
              </div>
              <div className='flex items-center'>
                <span className='material-icons mr-[5px] bg-tertiary rounded-full text-[16px] w-[22px] h-[22px] text-[#000000] flex items-center justify-center leading-[16px]'>
                  phone
                </span>
                <div className='text-[#ffffff] text-[14px] tracking-[1.4px] leading-[30px]'>
                  888-293-5648
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#ffffff]'>
          <div className='fixed z-[100] lg:hidden inset-0 bg-[#000000] bg-opacity-50 hidden'>
            <div className='w-full max-w-xs bg-[#ffffff] h-screen overflow-x-scroll'>
              <div
                className='header-nav relative tracking-[1px]'
                x-data='{open : false, open1 : false, subopen1 : false, subopen2 : false, open3 : false, open4 : false, open5 : false}'
              >
                <div className='relative flex border-b border-b-gray-border items-center justify-between'>
                  <button
                    title='Brands'
                    type='button'
                    className='relative text-[14px] pl-[25px] mr-[5px] flex items-center pt-[15px] pb-[15px] grow'
                  >
                    <span
                      className='material-icons-outlined text-[16px] font-[600] mr-[5px] absolute left-[5px] top-1/2 -translate-y-1/2'
                      x-html="open == true ? 'remove' : 'add'"
                    ></span>
                    <span className=''>Brands</span>
                  </button>
                  <a
                    href='product-listing.html'
                    className='text-[12px] mr-[5px] underline text-[#000000]'
                  >
                    View all
                  </a>
                </div>
                <div className='text-[14px]' x-show='open'>
                  <div className='relative bg-light-gray'>
                    <div className=''>
                      <ul className=''>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Adidas
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Alternative
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Arctic Zone
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            B. Draddy
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            BAUER
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Bella+Canvas
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Berne Apparel
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Bose
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Brumate
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Callaway Golf
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Camelbak
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Carhartt
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Charles River Apparel
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Columbia
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Core 365
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Corkcicle
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Cross
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Eddie Bauer
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Ember
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Faherty Brand
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Fairway &amp; Greene
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Flexfit
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            FootJoy
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Galvin Green
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Helly Hansen
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            High Sierra
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Igloo
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            JBL
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Johnnie-O
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Journalbooks
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Klean Kanteen
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            KNACK
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Lacoste
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Linksoul
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Marine Layer
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Marmot
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Matouk
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Moleskine
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            New Era
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Next Level
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Nike
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Ogio
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Patagonia
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Peter Millar
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Port Authority
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            PUMA
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Richardson
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Rocketbook
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Skullcandy
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Southern Tide
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            SPORT TEK
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Spyder
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            STIO
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Swell
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            TaylorMade
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            The North Face
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Tile
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Titleist
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Travis Mathew
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Under Armour
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Vineyard Vines
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            YETI
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Yupoong
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Zero Restriction
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='relative flex border-b border-b-gray-border items-center justify-between'>
                  <button
                    title='Brands'
                    type='button'
                    className='relative text-[14px] pl-[25px] mr-[5px] flex items-center pt-[15px] pb-[15px] grow'
                  >
                    <span
                      className='material-icons-outlined text-[16px] font-[600] mr-[5px] absolute left-[5px] top-1/2 -translate-y-1/2'
                      x-html="open1 == true ? 'remove' : 'add'"
                    ></span>
                    <span className=''>Men</span>
                  </button>
                  <a
                    href='product-listing.html'
                    className='text-[12px] mr-[5px] underline text-[#000000]'
                  >
                    View all
                  </a>
                </div>
                <div className='text-[14px]' x-show='open1'>
                  <div className='relative bg-light-gray'>
                    <div className=''>
                      <ul className=''>
                        <li className=''>
                          <div className='relative flex border-b border-b-gray-border items-center justify-between pl-[25px]'>
                            <button
                              title='Brands'
                              type='button'
                              className='relative text-[14px] pl-[25px] mr-[5px] flex items-center pt-[15px] pb-[15px] grow'
                            >
                              <span
                                className='material-icons-outlined text-[16px] font-[600] mr-[5px] absolute left-[5px] top-1/2 -translate-y-1/2'
                                x-html="subopen1 == true ? 'remove' : 'add'"
                              ></span>
                              <span className=''>Polos</span>
                            </button>
                            <a
                              href='product-listing.html'
                              className='text-[12px] mr-[5px] underline text-[#000000]'
                            >
                              View all
                            </a>
                          </div>
                          <div className='text-[14px]' x-show='subopen1'>
                            <div className='relative bg-light-gray'>
                              <div className=''>
                                <ul className=''>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Short Sleeve
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Long Sleeve
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Quarter Zips & Pullovers
                          </a>
                        </li>
                        <li className=''>
                          <div className='relative flex border-b border-b-gray-border items-center justify-between pl-[25px]'>
                            <button
                              title='Brands'
                              type='button'
                              className='relative text-[14px] pl-[25px] mr-[5px] flex items-center pt-[15px] pb-[15px] grow'
                            >
                              <span
                                className='material-icons-outlined text-[16px] font-[600] mr-[5px] absolute left-[5px] top-1/2 -translate-y-1/2'
                                x-html="subopen2 == true ? 'remove' : 'add'"
                              ></span>
                              <span className=''>Jackets</span>
                            </button>
                            <a
                              href='product-listing.html'
                              className='text-[12px] mr-[5px] underline text-[#000000]'
                            >
                              View all
                            </a>
                          </div>
                          <div className='text-[14px]' x-show='subopen2'>
                            <div className='relative bg-light-gray'>
                              <div className=''>
                                <ul className=''>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Rain
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Puffer
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Fleece
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Soft Shell
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Workwear
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Outerwear
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Lightwear
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Track
                                    </a>
                                  </li>
                                  <li className='py-[12px] border-b border-b-gray-border'>
                                    <a
                                      className='inline-block pl-[70px] leading-[18px] text-[#000000]'
                                      title=''
                                      href='product-listing.html'
                                    >
                                      Performance
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Vests
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Shirts
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            Hoodies & Sweatshirts
                          </a>
                        </li>
                        <li className='py-[12px] border-b border-b-gray-border'>
                          <a
                            className='relative inline-block pl-[50px] leading-[18px] text-[#000000]'
                            title=''
                            href='product-listing.html'
                          >
                            T-Shirt
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='relative flex border-b border-b-gray-border items-center justify-between'>
                  <button
                    title='Brands'
                    type='button'
                    className='relative text-[14px] pl-[25px] mr-[5px] flex items-center pt-[15px] pb-[15px] grow'
                  >
                    <span className=''>Consultation</span>
                  </button>
                </div>
                <div className='relative flex border-b border-b-gray-border items-center justify-between'>
                  <button
                    title='Brands'
                    type='button'
                    className='relative text-[14px] pl-[25px] mr-[5px] flex items-center pt-[15px] pb-[15px] grow'
                  >
                    <span className=''>FAQ</span>
                  </button>
                </div>
                <div className='relative flex border-b border-b-gray-border items-center justify-between'>
                  <button
                    title='Brands'
                    type='button'
                    className='relative text-[14px] pl-[25px] mr-[5px] flex items-center pt-[15px] pb-[15px] grow'
                  >
                    <span className=''>SALE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='relative trancking-[1px]'>
            <div aria-label='Top'>
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
                              <a
                                href='../brands.html'
                                className='relative text-[12px] xl:text-[14px] mt-[5px] xl:ml-[10px] xl:mr-[10px] ml-[5px] mr-[5px] tracking-[1px] z-10 flex items-center font-[600] border-0 border-b-2 pt-[10px] pb-[10px] border-transparent hover:border-primary-hover text-primary hover:text-primary-hover'
                              >
                                <span className='uppercase'>Brands</span>
                              </a>
                            </div>
                            <div className='absolute top-full left-[0px] w-screen max-w-[600px] sm:text-[14px] hidden'>
                              <div className='relative bg-gray-100 z-50'>
                                <div className=''>
                                  <div className='flex flex-wrap pt-[14px] pb-[3px] border-b border-b-default'>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[15px] pr-[15px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block ml-[10px] mr-[10px]'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/patagonia_BLK.png'
                                            />
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[15px] pr-[15px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block ml-[10px] mr-[10px]'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/nike_BLK.png'
                                            />
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[15px] pr-[15px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block ml-[10px] mr-[10px]'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/petermillar.png'
                                            />
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[15px] pr-[15px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block ml-[10px] mr-[10px]'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/Yeti.png'
                                            />
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='pt-[10px] pb-[20px]'>
                                    <div className='flex flex-wrap'>
                                      <ul className='w-full lg:w-1/3 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Adidas'
                                            href='product-listing.html'
                                          >
                                            Adidas
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Alternative'
                                            href='product-listing.html'
                                          >
                                            Alternative
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Arctic Zone'
                                            href='product-listing.html'
                                          >
                                            Arctic Zone
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='B. Draddy'
                                            href='product-listing.html'
                                          >
                                            B. Draddy
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='BAUER'
                                            href='product-listing.html'
                                          >
                                            BAUER
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Bella+Canvas'
                                            href='product-listing.html'
                                          >
                                            Bella+Canvas
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Berne Apparel'
                                            href='product-listing.html'
                                          >
                                            Berne Apparel
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Bose'
                                            href='product-listing.html'
                                          >
                                            Bose
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Brumate'
                                            href='product-listing.html'
                                          >
                                            Brumate
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Callaway Golf'
                                            href='product-listing.html'
                                          >
                                            Callaway Golf
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Camelbak'
                                            href='product-listing.html'
                                          >
                                            Camelbak
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Carhartt'
                                            href='product-listing.html'
                                          >
                                            Carhartt
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Charles River Apparel'
                                            href='product-listing.html'
                                          >
                                            Charles River Apparel
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Columbia'
                                            href='product-listing.html'
                                          >
                                            Columbia
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Core 365'
                                            href='product-listing.html'
                                          >
                                            Core 365
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Corkcicle'
                                            href='product-listing.html'
                                          >
                                            Corkcicle
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Cross'
                                            href='product-listing.html'
                                          >
                                            Cross
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Eddie Bauer'
                                            href='product-listing.html'
                                          >
                                            Eddie Bauer
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Ember'
                                            href='product-listing.html'
                                          >
                                            Ember
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Faherty Brand'
                                            href='product-listing.html'
                                          >
                                            Faherty Brand
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Fairway &amp; Greene'
                                            href='product-listing.html'
                                          >
                                            Fairway &amp; Greene
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Flexfit'
                                            href='product-listing.html'
                                          >
                                            Flexfit
                                          </a>
                                        </li>
                                      </ul>
                                      <ul className='w-full lg:w-1/3 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='FootJoy'
                                            href='product-listing.html'
                                          >
                                            FootJoy
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Galvin Green'
                                            href='product-listing.html'
                                          >
                                            Galvin Green
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Helly Hansen'
                                            href='product-listing.html'
                                          >
                                            Helly Hansen
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='High Sierra'
                                            href='product-listing.html'
                                          >
                                            High Sierra
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Igloo'
                                            href='product-listing.html'
                                          >
                                            Igloo
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='JBL'
                                            href='product-listing.html'
                                          >
                                            JBL
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Johnnie-O'
                                            href='product-listing.html'
                                          >
                                            Johnnie-O
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Journalbooks'
                                            href='product-listing.html'
                                          >
                                            Journalbooks
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Klean Kanteen'
                                            href='product-listing.html'
                                          >
                                            Klean Kanteen
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='KNACK'
                                            href='product-listing.html'
                                          >
                                            KNACK
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Lacoste'
                                            href='product-listing.html'
                                          >
                                            Lacoste
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Linksoul'
                                            href='product-listing.html'
                                          >
                                            Linksoul
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Marine Layer'
                                            href='product-listing.html'
                                          >
                                            Marine Layer
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Marmot'
                                            href='product-listing.html'
                                          >
                                            Marmot
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Matouk'
                                            href='product-listing.html'
                                          >
                                            Matouk
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Moleskine'
                                            href='product-listing.html'
                                          >
                                            Moleskine
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='New Era'
                                            href='product-listing.html'
                                          >
                                            New Era
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Next Level'
                                            href='product-listing.html'
                                          >
                                            Next Level
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Nike'
                                            href='product-listing.html'
                                          >
                                            Nike
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Ogio'
                                            href='product-listing.html'
                                          >
                                            Ogio
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Patagonia'
                                            href='product-listing.html'
                                          >
                                            Patagonia
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Peter Millar'
                                            href='product-listing.html'
                                          >
                                            Peter Millar
                                          </a>
                                        </li>
                                      </ul>
                                      <ul className='w-full lg:w-1/3 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Port Authority'
                                            href='product-listing.html'
                                          >
                                            Port Authority
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='PUMA'
                                            href='product-listing.html'
                                          >
                                            PUMA
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Richardson'
                                            href='product-listing.html'
                                          >
                                            Richardson
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Rocketbook'
                                            href='product-listing.html'
                                          >
                                            Rocketbook
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Skullcandy'
                                            href='product-listing.html'
                                          >
                                            Skullcandy
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Southern Tide'
                                            href='product-listing.html'
                                          >
                                            Southern Tide
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='SPORT TEK'
                                            href='product-listing.html'
                                          >
                                            SPORT TEK
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Spyder'
                                            href='product-listing.html'
                                          >
                                            Spyder
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='STIO'
                                            href='product-listing.html'
                                          >
                                            STIO
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Swell'
                                            href='product-listing.html'
                                          >
                                            Swell
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='TaylorMade'
                                            href='product-listing.html'
                                          >
                                            TaylorMade
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='The North Face'
                                            href='product-listing.html'
                                          >
                                            The North Face
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Tile'
                                            href='product-listing.html'
                                          >
                                            Tile
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Titleist'
                                            href='product-listing.html'
                                          >
                                            Titleist
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Travis Mathew'
                                            href='product-listing.html'
                                          >
                                            Travis Mathew
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Under Armour'
                                            href='product-listing.html'
                                          >
                                            Under Armour
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Vineyard Vines'
                                            href='product-listing.html'
                                          >
                                            Vineyard Vines
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='YETI'
                                            href='product-listing.html'
                                          >
                                            YETI
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Yupoong'
                                            href='product-listing.html'
                                          >
                                            Yupoong
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Zero Restriction'
                                            href='product-listing.html'
                                          >
                                            Zero Restriction
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                            <div className='absolute top-full left-[80px] w-screen max-w-[600px] sm:text-[14px] hidden'>
                              <div className='relative bg-gray-100 z-50'>
                                <div className=''>
                                  <div className='pt-[13px] pb-[20px]'>
                                    <div className='flex flex-wrap'>
                                      <ul className='w-full lg:w-1/2 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Polos'
                                            href='product-listing.html'
                                          >
                                            Polos
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Jackets'
                                            href='product-listing.html'
                                          >
                                            Jackets
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Vests'
                                            href='product-listing.html'
                                          >
                                            Vests
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Shirts'
                                            href='product-listing.html'
                                          >
                                            Shirts
                                          </a>
                                        </li>
                                      </ul>
                                      <ul className='w-full lg:w-1/2 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Quarter Zips & Pullovers'
                                            href='product-listing.html'
                                          >
                                            Quarter Zips & Pullovers
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Hoodies & Sweatshirts'
                                            href='product-listing.html'
                                          >
                                            Hoodies & Sweatshirts
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='T-Shirt'
                                            href='product-listing.html'
                                          >
                                            T-Shirt
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                            <div className='absolute top-full -left-[15px] w-screen max-w-[600px] sm:text-[14px] hidden'>
                              <div className='relative bg-gray-100 z-50'>
                                <div className=''>
                                  <div className='pt-[13px] pb-[20px]'>
                                    <div className='flex flex-wrap'>
                                      <ul className='w-full lg:w-1/2 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Polos'
                                            href='product-listing.html'
                                          >
                                            Polos
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Jackets'
                                            href='product-listing.html'
                                          >
                                            Jackets
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Vests'
                                            href='product-listing.html'
                                          >
                                            Vests
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Shirts'
                                            href='product-listing.html'
                                          >
                                            Shirts
                                          </a>
                                        </li>
                                      </ul>
                                      <ul className='w-full lg:w-1/2 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Quarter Zips & Pullovers'
                                            href='product-listing.html'
                                          >
                                            Quarter Zips & Pullovers
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Hoodies & Sweatshirts'
                                            href='product-listing.html'
                                          >
                                            Hoodies & Sweatshirts
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='T-Shirt'
                                            href='product-listing.html'
                                          >
                                            T-Shirt
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                            <div className='absolute top-full left-[15px] w-screen max-w-[600px] sm:text-[14px] hidden'>
                              <div className='relative bg-gray-100 z-50'>
                                <div className=''>
                                  <div className='flex flex-wrap pt-[15px] pb-[25px]'>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[10px] pr-[10px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/custom-golf-gear.png'
                                            />
                                          </div>
                                          <div className='text-[12px] font-[600] text-primary leading-[17px] tracking-[1px]'>
                                            CUSTOM GOLF GEAR
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[10px] pr-[10px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/customizable-golf-bags.png'
                                            />
                                          </div>
                                          <div className='text-[12px] font-[600] text-primary leading-[17px] tracking-[1px]'>
                                            CUSTOM GOLF BAGS
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[10px] pr-[10px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/custom-golf%20balls.png'
                                            />
                                          </div>
                                          <div className='text-[12px] font-[600] text-primary leading-[17px] tracking-[1px]'>
                                            CUSTOM GOLF BALLS
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className='lg:w-1/4 text-center w-full relative'>
                                      <div className='pl-[10px] pr-[10px]'>
                                        <a
                                          title='Patagonia'
                                          href='product-listing.html'
                                          className='block'
                                        >
                                          <div className='brand-logo'>
                                            <img
                                              className='max-h-full'
                                              alt='Patagonia'
                                              src='https://www.corporategear.com/images/custom-golf-accessories.png'
                                            />
                                          </div>
                                          <div className='text-[12px] font-[600] text-primary leading-[17px] tracking-[1px]'>
                                            GOLF ACCESSORIES
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                            <div className='absolute top-full -left-[200px] w-screen max-w-[600px] sm:text-[14px] hidden'>
                              <div className='relative bg-gray-100 z-50'>
                                <div className=''>
                                  <div className='pt-[13px] pb-[20px]'>
                                    <div className='flex flex-wrap'>
                                      <ul className='w-full lg:w-1/2 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Office'
                                            href='product-listing.html'
                                          >
                                            Office
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Luxury Gifts'
                                            href='product-listing.html'
                                          >
                                            Luxury Gifts
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Headwear'
                                            href='product-listing.html'
                                          >
                                            Headwear
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Bags'
                                            href='product-listing.html'
                                          >
                                            Bags
                                          </a>
                                        </li>
                                      </ul>
                                      <ul className='w-full lg:w-1/2 text-[13px] pl-[20px] pr-[20px]'>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Electronics'
                                            href='product-listing.html'
                                          >
                                            Electronics
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Miscellaneous'
                                            href='product-listing.html'
                                          >
                                            Miscellaneous
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Drinkware'
                                            href='product-listing.html'
                                          >
                                            Drinkware
                                          </a>
                                        </li>
                                        <li className='flex pt-[12px]'>
                                          <span className='material-icons-outlined text-[18px] leading-none font-[100]'>
                                            chevron_right
                                          </span>
                                          <a
                                            className='inline-block text-[13px] text-primary hover:text-primary-hover font-[600] tracking-[1px] leading-[18px]'
                                            title='Golf'
                                            href='product-listing.html'
                                          >
                                            Golf
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                      <div className='flex items-center justify-end'>
                        <div className='flex items-center'>
                          <div className='flex items-center'>
                            <form
                              action='#'
                              className='hidden sm:flex max-w-[140px] xl:max-w-[190px] ml-[8px]'
                            >
                              <div className=''>
                                <div className='border border-primary pt-[5px] pb-[4px] pl-[15px] pr-[24px] text-primary relative'>
                                  <input
                                    name='text'
                                    min='1'
                                    id='txtSearch'
                                    placeholder='Search'
                                    className='outline-none w-full border-0 focus:ring-0 text-[14px] tracking-[1px] text-primary h-[26px]'
                                    autocomplete='off'
                                    maxlength='255'
                                  />
                                  <button className='w-[24px] h-[24px] absolute right-[6px] top-[6px]'>
                                    <span className='material-icons text-primary hover:text-primary-hover font-[900]'>
                                      search
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                            <div className='flex pl-[8px]'>
                              <a
                                className='relative hover:text-primary-hover'
                                title='Wishlist'
                                href='../wishlist.html'
                              >
                                <span className='sr-only'>Wishlist</span>
                                <svg
                                  className='w-6 h-6 fill-primary hover:fill-primary-hover'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 24 24'
                                >
                                  <path d='M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.325 5.312Q13.325 5.975 12.95 7H11.05Q10.675 5.975 9.675 5.312Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z'></path>
                                </svg>
                                <span className='absolute right-[-7px] top-[-10px] rounded-full flex items-center justify-center bg-[#dddddd] text-[9px] text-[#000000] pl-[4px] pr-[4px] pt-[2px] pb-[2px]'>
                                  0
                                </span>
                              </a>
                            </div>
                            <div className='pl-[15px]'>
                              <div
                                className='flex relative tracking-[1px]'
                                x-data='{ open : false }'
                              >
                                <a
                                  className='text-primary hover:text-primary-hover flex items-center gap-1'
                                  href='javascript:void(0);'
                                  data-modal-toggle='LoginModal'
                                >
                                  <span className='text-[14px] hidden xl:inline-block whitespace-nowrap tracking-[1px] mr-[4px]'>
                                    login
                                  </span>
                                  <span className='material-icons'>
                                    account_circle
                                  </span>
                                </a>
                                <div
                                  className='text-xs uppercase absolute right-0 top-full bg-white z-40 w-[220px] pt-2'
                                  x-show='open'
                                  style={{ display: " none" }}
                                >
                                  <ul className='border-[3px] border-primary'>
                                    <li className='border-t border-t-gray-300'>
                                      <a
                                        href='../orders.html'
                                        className='flex items-center p-2 gap-2.5 text-primary hover:text-primary-hover'
                                      >
                                        <span className=''>
                                          <img
                                            src='https://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/header-order-icon.png'
                                            alt=''
                                          />
                                        </span>
                                        <span className=''>Order</span>
                                      </a>
                                    </li>
                                    <li className='border-t border-t-gray-300'>
                                      <a
                                        href='../my-account.html'
                                        className='flex items-center p-2 gap-2.5 text-primary hover:text-primary-hover'
                                      >
                                        <span className=''>
                                          <img
                                            src='https://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/header-setting-icon.png'
                                            alt=''
                                          />
                                        </span>
                                        <span className=''>
                                          Account Settings
                                        </span>
                                      </a>
                                    </li>
                                    <li className='border-t border-t-gray-300'>
                                      <a
                                        href='javascript:void(0);'
                                        className='flex items-center p-2 gap-2.5 text-primary hover:text-primary-hover'
                                      >
                                        <span className=''>
                                          <img
                                            src='https://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/header-help-icon.png'
                                            alt=''
                                          />
                                        </span>
                                        <span className=''>Help</span>
                                      </a>
                                    </li>
                                    <li className='border-t-2 border-t-gray-300'>
                                      <a
                                        href='javascript:void(0);'
                                        className='flex items-center p-2 gap-2.5 text-primary hover:text-primary-hover'
                                      >
                                        <span className=''>
                                          <img
                                            src='https://ystore.us/HTML/RedefineCommerce/Ecom-front/corporategear/images/header-sign-out.png'
                                            alt=''
                                          />
                                        </span>
                                        <span className=''>Sign Out</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div
                              className='flow-root relative pl-[15px]'
                              x-data='{ open: false }'
                            >
                              <a
                                className='text-primary hover:text-primary-hover group flex items-center relative pt-[8px] pb-[8px]'
                                href='javascript:void(0);'
                              >
                                <span className='mr-[8px] text-[14px] hidden xl:inline-block whitespace-nowrap tracking-[1px]'>
                                  my cart
                                </span>
                                <span className='material-icons'>
                                  shopping_cart
                                </span>
                                <span className='absolute right-[-7px] top-[-4px] rounded-full flex items-center justify-center bg-[#dddddd] text-[9px] text-[#000000] pl-[4px] pr-[4px] pt-[2px] pb-[2px]'>
                                  80
                                </span>
                              </a>
                              <div style={{ display: " none" }}>
                                <div
                                  className='absolute inset-0 top-1/2 bg-white shadow'
                                  aria-hidden='true'
                                ></div>
                                <div className='relative bg-white z-50 text-[12px] leading-normal p-[15px]'>
                                  <div className='max-h-60 overflow-x-hidden overflow-y-auto border-t first:border-t-0 border-[#758592] pt-[15px] first:pt-[0px]'>
                                    <ul className=''>
                                      <li className='border-t first:border-t-0 border-[#758592] py-2.5 first:pt-0'>
                                        <div className='flex flex-wrap'>
                                          <div className='w-1/4 px-[5px]'>
                                            <img
                                              src='https://www.corporategear.com/Resources/parsonskellogg/Product/large/1297169_8458796_color_sth.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-2.5'>
                                            <div className=''>
                                              <a
                                                className='inline-block text-[13px] text-[#000000] hover:text-anchor-hover'
                                                href='../product-page.html'
                                              >
                                                Eddie Bauer Men's Soft Shell
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap mt-[5px] text-center leading-none'>
                                              <div className=''>
                                                <div className='text-gray-600'>
                                                  QTY
                                                </div>
                                                <div className='mt-[3px]'>
                                                  27
                                                </div>
                                              </div>
                                              <div className='pl-[15px]'>
                                                <div className='text-gray-600'>
                                                  SUBTOTAL
                                                </div>
                                                <div className='mt-[3px]'>
                                                  $2050.00
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className='border-t first:border-t-0 border-[#758592] py-2.5 first:pt-0'>
                                        <div className='flex flex-wrap -mx-1'>
                                          <div className='w-1/4 px-[5px]'>
                                            <img
                                              src='https://www.corporategear.com/Resources/parsonskellogg/Product/large/1297169_8458796_color_sth.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-2.5'>
                                            <div className=''>
                                              <a
                                                className='inline-block text-[13px] text-[#000000] hover:text-anchor-hover'
                                                href='../product-page.html'
                                              >
                                                Patagonia Men's Better Sweater
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap mt-[5px] text-center leading-none'>
                                              <div className=''>
                                                <div className='text-gray-600'>
                                                  QTY
                                                </div>
                                                <div className='mt-[3px]'>
                                                  27
                                                </div>
                                              </div>
                                              <div className='pl-[15px]'>
                                                <div className='text-gray-600'>
                                                  SUBTOTAL
                                                </div>
                                                <div className='mt-[3px]'>
                                                  $2050.00
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className='border-t first:border-t-0 border-[#758592] py-2.5 first:pt-0'>
                                        <div className='flex flex-wrap'>
                                          <div className='w-1/4 px-[5px]'>
                                            <img
                                              src='https://www.corporategear.com/Resources/parsonskellogg/Product/large/1297169_8458796_color_sth.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-2.5'>
                                            <div className=''>
                                              <a
                                                className='inline-block text-[13px] text-[#000000] hover:text-anchor-hover'
                                                href='../product-page.html'
                                              >
                                                Eddie Bauer Men's Soft Shell
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap mt-[5px] text-center leading-none'>
                                              <div className=''>
                                                <div className='text-gray-600'>
                                                  QTY
                                                </div>
                                                <div className='mt-[3px]'>
                                                  27
                                                </div>
                                              </div>
                                              <div className='pl-[15px]'>
                                                <div className='text-gray-600'>
                                                  SUBTOTAL
                                                </div>
                                                <div className='mt-[3px]'>
                                                  $2050.00
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className='border-t first:border-t-0 border-[#758592] py-2.5 first:pt-0'>
                                        <div className='flex flex-wrap -mx-1'>
                                          <div className='w-1/4 px-[5px]'>
                                            <img
                                              src='https://www.corporategear.com/Resources/parsonskellogg/Product/large/1297169_8458796_color_sth.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-2.5'>
                                            <div className=''>
                                              <a
                                                className='inline-block text-[13px] text-[#000000] hover:text-anchor-hover'
                                                href='../product-page.html'
                                              >
                                                Patagonia Men's Better Sweater
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap mt-[5px] text-center leading-none'>
                                              <div className=''>
                                                <div className='text-gray-600'>
                                                  QTY
                                                </div>
                                                <div className='mt-[3px]'>
                                                  27
                                                </div>
                                              </div>
                                              <div className='pl-[15px]'>
                                                <div className='text-gray-600'>
                                                  SUBTOTAL
                                                </div>
                                                <div className='mt-[3px]'>
                                                  $2050.00
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className='border-t first:border-t-0 border-[#758592] py-2.5 first:pt-0'>
                                        <div className='flex flex-wrap'>
                                          <div className='w-1/4 px-[5px]'>
                                            <img
                                              src='https://www.corporategear.com/Resources/parsonskellogg/Product/large/1297169_8458796_color_sth.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-2.5'>
                                            <div className=''>
                                              <a
                                                className='inline-block text-[13px] text-[#000000] hover:text-anchor-hover'
                                                href='../product-page.html'
                                              >
                                                Eddie Bauer Men's Soft Shell
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap mt-[5px] text-center leading-none'>
                                              <div className=''>
                                                <div className='text-gray-600'>
                                                  QTY
                                                </div>
                                                <div className='mt-[3px]'>
                                                  27
                                                </div>
                                              </div>
                                              <div className='pl-[15px]'>
                                                <div className='text-gray-600'>
                                                  SUBTOTAL
                                                </div>
                                                <div className='mt-[3px]'>
                                                  $2050.00
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className='border-t first:border-t-0 border-[#758592] py-2.5 first:pt-0'>
                                        <div className='flex flex-wrap -mx-1'>
                                          <div className='w-1/4 px-[5px]'>
                                            <img
                                              src='https://www.corporategear.com/Resources/parsonskellogg/Product/large/1297169_8458796_color_sth.jpg'
                                              alt=''
                                            />
                                          </div>
                                          <div className='w-3/4 px-2.5'>
                                            <div className=''>
                                              <a
                                                className='inline-block text-[13px] text-[#000000] hover:text-anchor-hover'
                                                href='../product-page.html'
                                              >
                                                Patagonia Men's Better Sweater
                                                Jacket
                                              </a>
                                            </div>
                                            <div className='flex flex-wrap mt-[5px] text-center leading-none'>
                                              <div className=''>
                                                <div className='text-gray-600'>
                                                  QTY
                                                </div>
                                                <div className='mt-[3px]'>
                                                  27
                                                </div>
                                              </div>
                                              <div className='pl-[15px]'>
                                                <div className='text-gray-600'>
                                                  SUBTOTAL
                                                </div>
                                                <div className='mt-[3px]'>
                                                  $2050.00
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className='border-t first:border-t-0 border-[#758592] pt-[15px] first:pt-[0px]'>
                                    <div className='mb-3 font-medium text-right'>
                                      <div className='text-gray-600'>
                                        30 ITEMS IN CART
                                      </div>
                                      <div className='text-[16px]'>
                                        Total $2,590.00
                                      </div>
                                    </div>
                                    <div className=''>
                                      <a
                                        href='../shopping-cart.html'
                                        className='btn btn-secondary w-full text-center'
                                      >
                                        CHECKOUT NOW
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='lg:hidden pl-[15px]'>
                              <button
                                type='button'
                                className='bg-[#ffffff] border border-primary text-primary hover:text-primary-hover'
                              >
                                <span className='sr-only'>Open menu</span>
                                <svg
                                  className='h-6 w-6'
                                  x-description='Heroicon name: outline/menu'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke-width='2'
                                  stroke='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M4 6h16M4 12h16M4 18h16'
                                  ></path>
                                </svg>
                              </button>
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
                              autocomplete='off'
                              maxlength='255'
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
            </div>
          </div>
        </div>
      </div>
      <div
        id='LoginModal'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal inset-0 text-default-text'
      >
        <div className='w-full h-full bg-[#000000] bg-opacity-[0.50] flex items-center justify-center'>
          <div className='relative px-[16px] w-full max-w-4xl h-full md:h-auto'>
            <div className='relative bg-[#ffffff] shadow max-h-screen overflow-y-auto h-full'>
              <div className='flex justify-between items-start p-[25px] rounded-t border-b sticky top-0 left-0 bg-[#ffffff]'>
                <div className='font-[600] text-large-text'>Sign In</div>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[14px] p-[6px] ml-auto inline-flex items-center'
                  data-modal-toggle='LoginModal'
                >
                  <svg
                    className='w-[24px] h-[24px]'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='p-[25px]'>
                <div className='mb-[10px] medium-text text-center'>SIGN IN</div>
                <div className='Login-Main'>
                  <div className='mb-[10px]'>
                    <input
                      type='email'
                      placeholder='Enter Email Address'
                      className='form-input'
                    />
                  </div>
                  <div className='relative mb-[10px]'>
                    <input
                      type='password'
                      className='form-input'
                      placeholder='Password'
                    />
                    <button className='block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors'>
                      <span className='material-icons-outlined text-lg'>
                        visibility
                      </span>
                    </button>
                    <div className='absolute top-2 right-10'>
                      <button className=''>
                        <span className='material-icons-outlined ml-2 text-base'>
                          info
                        </span>
                      </button>
                      <div className='z-10 absolute top-full -left-32 transform -translate-x-1/2'>
                        <div
                          className='bg-slate-500 p-2 overflow-hidden mt-2'
                          style={{ display: " none" }}
                        >
                          <div className='text-sm text-gray-200 font-light whitespace-nowrap w-full text-left px-4 py-4'>
                            <span className='w-full pt-1 pb-1 block font-semibold'>
                              Your password must have :
                            </span>
                            <span className='w-full pt-1 pb-1 block'>
                              8 Or more character
                            </span>
                            <span className='w-full pt-1 pb-1 block'>
                              Upper and lowercase letters
                            </span>
                            <span className='w-full pt-1 pb-1 block'>
                              At list one number
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-[20px]'>
                    <button
                      type='button'
                      className='btn btn-xl btn-secondary w-full'
                      id=''
                    >
                      SHOP NOW
                    </button>
                  </div>
                  <div className='flex justify-between items-center pb-[10px]'>
                    <div className='mb-[10px] flex items-center gap-1'>
                      <input
                        type='checkbox'
                        id='ChkKeepMeLogged'
                        name='ChkKeepMeLogged'
                        className=''
                      />
                      <label for='ChkKeepMeLogged'>Keep me logged</label>
                    </div>
                    <div className='mb-[10px]'>
                      <a
                        href='javascript:void(0);'
                        data-modal-toggle='Login1Modal'
                        className='text-anchor'
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className=''>
                    <button
                      type='button'
                      className='btn btn-xl btn-secondary w-full'
                    >
                      CREATE NEW ACOOUNT
                    </button>
                  </div>
                  <div className='mt-[10px] text-extra-small-text text-center'>
                    By Clicking "SHOP NOW", you agree to our
                    <a href='javascript:void(0);'>Terms of use</a> and
                    <a href='javascript:void(0);'>Privacy policy</a>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='Login1Modal'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal inset-0 text-default-text'
      >
        <div className='w-full h-full bg-[#000000] bg-opacity-[0.50] flex items-center justify-center'>
          <div className='relative px-[16px] w-full max-w-4xl h-full md:h-auto'>
            <div className='relative bg-[#ffffff] shadow max-h-screen overflow-y-auto h-full'>
              <div className='flex justify-between items-start p-[25px] rounded-t border-b sticky top-0 left-0 bg-[#ffffff]'>
                <div className='font-[600] text-large-text'>
                  Forget Password
                </div>
                <div className='flex items-center gap-x-2'>
                  <a
                    href='javascript:void(0);'
                    data-modal-toggle='LoginModal'
                    className='text-anchor'
                  >
                    &lt; Back
                  </a>
                  <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[14px] p-[6px] ml-auto inline-flex items-center'
                    data-modal-toggle='Login1Modal'
                  >
                    <svg
                      className='w-[24px] h-[24px]'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='p-[25px]'>
                <div className='mb-[10px] medium-text text-center'>
                  FORGET PASSWORD
                </div>
                <div className='Login-Main'>
                  <div className='mb-[10PX]'>
                    <input
                      type='email'
                      placeholder='Enter Your Email Address'
                      className='form-input'
                    />
                  </div>
                  <div className=''>
                    <button
                      type='button'
                      className='btn btn-xl btn-secondary w-full'
                    >
                      FORGET PASSWORD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='adduserModal'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal inset-0 text-default-text'
      >
        <div className='w-full h-full bg-[#000000] bg-opacity-[0.50] flex items-center justify-center'>
          <div className='relative px-[16px] w-full max-w-4xl h-full md:h-auto'>
            <div className='relative bg-[#ffffff] shadow max-h-screen overflow-y-auto h-full'>
              <div className='flex justify-between items-start p-[25px] rounded-t border-b sticky top-0 left-0 bg-[#ffffff]'>
                <div className='font-[600] text-large-text'>Add User</div>
                <div className='flex items-center gap-x-2'>
                  <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[14px] p-[6px] ml-auto inline-flex items-center'
                    data-modal-toggle='adduserModal'
                  >
                    <svg
                      className='w-[24px] h-[24px]'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='p-[25px]'>
                <div className='flex flex-wrap ml-[-15px] mr-[-15px] gap-y-[15px]'>
                  <div className='w-full lg:w-1/2 pl-[15px] pr-[15px]'>
                    <label for='First Name' className='block mb-[5px]'>
                      First Name
                    </label>
                    <div className=''>
                      <input
                        id='First Name'
                        name='First Name'
                        autocomplete='First Name'
                        placeholder='First Name'
                        value=''
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 pl-[15px] pr-[15px]'>
                    <label for='Last Name' className='block mb-[5px]'>
                      Last Name
                    </label>
                    <div className=''>
                      <input
                        id='Last Name'
                        name='Last Name'
                        autocomplete='Last Name'
                        placeholder='Last Name'
                        value=''
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 pl-[15px] pr-[15px]'>
                    <label for='email-address' className='block mb-[5px]'>
                      Email Address
                    </label>
                    <div className=''>
                      <input
                        type='email'
                        id='email-address'
                        name='email-address'
                        autocomplete='email'
                        placeholder='Email Address'
                        value=''
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 pl-[15px] pr-[15px]'>
                    <label for='state' className='block mb-[5px]'>
                      Role
                    </label>
                    <div className=''>
                      <select className='form-input'>
                        <option value=''>Select Role</option>
                        <option value=''>Administrator</option>
                        <option value=''>User</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                <button
                  data-modal-toggle='adduserModal'
                  type='button'
                  className='btn bg-secondary'
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='addshipModal'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal inset-0 text-default-text'
      >
        <div className='w-full h-full bg-[#000000] bg-opacity-[0.50] flex items-center justify-center'>
          <div className='relative px-[16px] w-full max-w-4xl h-full md:h-auto'>
            <div className='relative bg-[#ffffff] shadow max-h-screen overflow-y-auto h-full'>
              <div className='flex justify-between items-start p-[25px] rounded-t border-b sticky top-0 left-0 bg-[#ffffff]'>
                <div className='font-[600] text-large-text'>Add Shipping</div>
                <div className='flex items-center gap-x-2'>
                  <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-[14px] p-[6px] ml-auto inline-flex items-center'
                    data-modal-toggle='addshipModal'
                  >
                    <svg
                      className='w-[24px] h-[24px]'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='p-[25px]'>
                <div className='flex flex-wrap ml-[-15px] mr-[-15px] gap-y-[15px]'>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <label className='text-base'>Country</label>
                    <div className='relative mt-2'>
                      <select
                        id='country'
                        name='country'
                        autocomplete='country-name'
                        className='form-input'
                      >
                        <option>Select Country</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <label for='full-name' className='block mb-[5px]'>
                      Full Name
                    </label>
                    <div className=''>
                      <input
                        id='full-name'
                        name='full-name'
                        autocomplete='full-name'
                        placeholder='Full Name'
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <label for='street-address' className='block mb-[5px]'>
                      Street Address
                    </label>
                    <div className='mt-2 mb-2'>
                      <input
                        id='street-address'
                        name='street-address'
                        autocomplete='street-address'
                        placeholder='Street Address'
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <span className=''>
                      <a href='javascript:void(0);' title='Add Address Line 2'>
                        + Add Address Line 2
                      </a>
                    </span>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <label for='street-address' className='block mb-[5px]'>
                      Street Address
                    </label>
                    <div className=''>
                      <input
                        id='street-address'
                        name='street-address'
                        autocomplete='street-address'
                        placeholder='Street Address'
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <label for='Apt-suit' className='block mb-[5px]'>
                      Apt/Suit/Other(optional)
                    </label>
                    <div className=''>
                      <input
                        id='Apt-suit'
                        name='Apt-suit'
                        autocomplete='Apt-suit'
                        placeholder='Apt/Suit/Other(optional)'
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <label for='Zip-code' className='block mb-[5px]'>
                      Zip Code
                    </label>
                    <div className=''>
                      <input
                        id='Zip-code'
                        name='Zip-code'
                        autocomplete='Zip-code'
                        placeholder='Zip Code'
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <label for='Phone Number' className='block mb-[5px]'>
                      Phone Number
                    </label>
                    <div className=''>
                      <input
                        id='Phone Number'
                        name='Phone Number'
                        autocomplete='Phone Number'
                        placeholder='1-(000)-000-0000'
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 pl-[15px] pr-[15px]'>
                    <label for='city' className='block mb-[5px]'>
                      City
                    </label>
                    <div className=''>
                      <input name='city' id='city' className='form-input' />
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 pl-[15px] pr-[15px]'>
                    <label for='region' className='block mb-[5px]'>
                      State / Province
                    </label>
                    <div className=''>
                      <input name='region' id='region' className='form-input' />
                    </div>
                  </div>
                  <div className='w-full pl-[15px] pr-[15px]'>
                    <div className='flex items-center gap-1'>
                      <input type='checkbox' className='' />
                      <label for='ChkKeepMeLogged'>Set as default</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                <button
                  data-modal-toggle='addshipModal'
                  type='button'
                  className='btn bg-secondary'
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <section className='container mx-auto text-center'>
          <div className='py-[12%]'>
            <div className='text-2xl-text'>Your Cart is Empty.</div>
            <div className='text-title-text mt-[10px]'>
              There's nothing in your cart.
            </div>
            <div className='text-title-text mt-[10px]'>
              Not to worry: we have lots of other great finds.
            </div>
            <div className='mt-[20px]'>
              <a
                title=''
                href='javascript:void(0);'
                className='btn btn-md btn-secondary'
              >
                START SHOPPING
              </a>
            </div>
          </div>
        </section>
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
                          autocomplete='email'
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
                    © 2023 Corporate Gear by ParsonsKellogg All Rights Reserved
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
  );
};

export default EmptyCard;
