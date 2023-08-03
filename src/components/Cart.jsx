import React from "react";
import Link from "next/link";

const Cart = ({ productID, productName, productPrice, company }) => {
  console.log(
    "productDatadghdgh cart page",
    productID,
    productName,
    productPrice,
  );
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex justify-center'>
        <table className='border-collapse border border-gray-400'>
          <thead>
            <tr>
              <th className='border border-gray-400 px-4 py-2'>Product ID</th>
              <th className='border border-gray-400 px-4 py-2'>Product Name</th>
              <th className='border border-gray-400 px-4 py-2'>company</th>
              <th className='border border-gray-400 px-4 py-2'>
                Product Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-400 px-4 py-2'>{productID}</td>
              <td className='border border-gray-400 px-4 py-2'>
                {productName}
              </td>
              <td className='border border-gray-400 px-4 py-2'>{company}</td>
              <td className='border border-gray-400 px-4 py-2'>
                {productPrice}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link
          href={{
            pathname: `/checkout/`,
            query: {
              productID: productID,
              productName: productName,
              productPrice: productPrice,
              company: company,
            },
          }}
          legacyBehavior
        >
          <a className='btn btn-normal btn-secondary border border-gray-700'>
            Checkout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
