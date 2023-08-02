"use client";
import React, { useState } from "react";
import Link from "next/link";

const CheckOut = ({ productID, productName, productPrice }) => {
  console.log("Check Out Components", productID, productName, productPrice);
  //   console.log("Check Out Components type of", typeof productPrice);

  //   console.log("Check Out Components type of", typeof productPriceInt);

  const taxRate = 0.1; // 10%

  const productPriceInt = parseFloat(productPrice);
  const subtotal = productPriceInt;
  const taxAmount = subtotal * taxRate;
  const totalAmount = subtotal + taxAmount;

  const [information, setInformation] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });

  const [record, setRecord] = useState([]);
  //   console.log("Infomation Name", record[0].name);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setInformation({ ...information, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...information, id: new Date().getTime().toString() };
    setRecord([...record, newRecord]);
    setInformation({ name: "", address: "", email: "", contact: "" });
  };

  return (
    <div className='font-Outfit'>
      <div className='container mx-auto pl-[15px] pr-[15px] mt-[60px] mb-[50px]'>
        <div className='flex flex-wrap justify-between -mx-[15px]'>
          <div className='w-full md:w-8/12 lg:w-[72%] pl-[15px] pr-[15px] custom-cart'>
            <div className='flex justify-between items-center bg-light-gray w-full pl-[15px] pr-[15px] pt-[17px] pb-[17px] mb-[20px]'>
              <div className='text-title-text mr-[15px] font-semibold'>
                Checkout
              </div>
              <div className='text-[#8b0520] text-medium-text tracking-normal'>
                All fields marked * are required.
              </div>
            </div>
            <div id='LoginMain'>
              <div className='' id='LoginEmail'>
                <div className='text-title-text font-semibold pb-[20px] mb-[20px] border-b border-gray-border'>
                  Email Address
                </div>
                <div className='text-sub-text font-normal mb-[20px] tracking-normal'>
                  Tell us where to send your order confirmation and tracking
                  number.
                </div>
                <div className='max-w-[600px]'>
                  <div className='relative z-0 w-full mb-[20px]'>
                    <form onSubmit={handleSubmit}>
                      <h1>Login Form</h1>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        value={information.name}
                        placeholder='Enter Name'
                        onChange={handleInput}
                        className='pt-[15px] pb-[0px] block w-full px-[8px] h-[48px] mt-[0px] text-sub-text text-[18px] text-[#000000] bg-transparent border-0 appearance-none focus:outline-none focus:ring-0'
                      />
                      <br />
                      <br />
                      <input
                        type='text'
                        name='address'
                        id='address'
                        value={information.address}
                        placeholder='Local Address'
                        onChange={handleInput}
                        className='pt-[15px] pb-[0px] block w-full px-[8px] h-[48px] mt-[0px] text-sub-text text-[18px] text-[#000000] bg-transparent border-0 appearance-none focus:outline-none focus:ring-0'
                      />
                      <br />
                      <br />
                      <input
                        type='text'
                        name='email'
                        id='email'
                        value={information.email}
                        placeholder='Email Address'
                        onChange={handleInput}
                        className='pt-[15px] pb-[0px] block w-full px-[8px] h-[48px] mt-[0px] text-sub-text text-[18px] text-[#000000] bg-transparent border-0 appearance-none focus:outline-none focus:ring-0'
                      />
                      <br />
                      <br />
                      <input
                        type='text'
                        name='contact'
                        id='contact'
                        value={information.contact}
                        placeholder='Contact No.'
                        onChange={handleInput}
                        className='pt-[15px] pb-[0px] block w-full px-[8px] h-[48px] mt-[0px] text-sub-text text-[18px] text-[#000000] bg-transparent border-0 appearance-none focus:outline-none focus:ring-0'
                      />
                      <br />
                      <br />
                      <button type='submit'>Submit</button>

                      <br />
                      <br />
                    </form>
                    <hr
                      style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                      }}
                    />
                    <div>
                      <h1> User&apos;s Details</h1>
                      <br />
                      <br />
                    </div>
                    {record.map((item, index) => {
                      return (
                        <div key={index}>
                          <span>Name: {item.name}</span>
                          <br />
                          <span>House Address: {item.address}</span>
                          <br />
                          <span>Email Address: {item.email}</span>
                          <br />
                          <span>Contact: {item.contact}</span>
                          <br />
                        </div>
                      );
                    })}
                    <div className='mb-6 border border-black'>
                      {" "}
                      <Link
                        href={{
                          pathname: `/thankyou/`,
                          query: {
                            totalAmount: totalAmount,
                          },
                        }}
                        legacyBehavior
                      >
                        <a
                          id='btn-start-checkout'
                          className='btn btn-secondary btn-lg font-semibold '
                        >
                          Place Order
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className='text-small-text tracking-normal'>
                    By continuing, you agree to our Terms of Use and consent to
                    our Privacy Policy.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-4/12 lg:w-[27%] pl-[15px] pr-[15px]'>
            <div className='border border-slate-400 bg-[#ffffff] mb-[20px]'>
              <div className='flex justify-between items-center text-title-text bg-light-gray w-full pl-[15px] pr-[15px] pt-[17px] pb-[17px] tracking-normal font-semibold'>
                Order Summary
              </div>
              <div className='px-[15px] py-[15px]'>
                <dl className=''>
                  <div className='font-[600] text-medium-text'>
                    Products Price
                  </div>
                  <div className='flex items-center justify-between pt-[15px] pb-[20px]'>
                    <dt className='text-normal-text tracking-normal'>
                      Subtotal
                    </dt>
                    <dd className='text-normal-text tracking-normal'>
                      ${productPriceInt + 10}
                    </dd>
                  </div>

                  <div className='flex items-center justify-between'>
                    <dt className='flex items-center text-normal-text tracking-normal'>
                      <span>Tax Rate ({(taxRate * 100).toFixed(0)}%)</span>
                    </dt>
                    <dd className='text-normal-text tracking-normal'>
                      ${taxAmount.toFixed(2)}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className='flex justify-between items-center bg-light-gray w-full text-normal-text tracking-normal pl-[15px] pr-[15px] pt-[15px] pb-[15px]'>
                <div className='text-sub-text font-semibold tracking-normal'>
                  Total:
                </div>
                <div className='text-sub-text font-semibold tracking-normal'>
                  ${totalAmount.toFixed(2)}
                </div>
              </div>
            </div>

            <div className='text-medium-text font-semibold mb-[20px]'>
              <div className='text-rose-500'>
                Please note that the tax amount on this order is subject to
                change based on the final invoice, and in accordance with local
                and state laws
              </div>
            </div>
            <div className='text-medium-text font-semibold mb-[20px]'>
              <div className='text-rose-500'>
                Your credit card will be authorized at checkout and you will see
                a pending charge on your bank statement. A sales representative
                will review the order details once received. Your card will then
                be charged in 5-7 days after submitted unless confirmed as
                finalized or otherwise cancelled prior to then.
              </div>

              <div className='bg-light-gray pl-[15px] pr-[15px] pt-[15px] pb-[15px] text-center mb-[15px]'>
                <div className='text-2xl font-medium mb-4 align-middle'>
                  <span className='material-icons !text-anchor align-middle'>
                    verified{" "}
                  </span>
                  <span className='align-middle text-title-text font-semibold tracking-normal'>
                    Order Risk-Free!
                  </span>
                </div>
                <div className='text-medium-text font-semibold tracking-normal'>
                  Cancel your order without penalty anytime before your proof is
                  approved.
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

export default CheckOut;
