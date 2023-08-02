import React from "react";

const Cart = ({ productID, productName, productPrice }) => {
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
              <td className='border border-gray-400 px-4 py-2'>
                {productPrice}
              </td>
            </tr>
          </tbody>
          {/* <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className='border border-gray-400 px-4 py-2'>
                  {product.id}
                </td>
                <td className='border border-gray-400 px-4 py-2'>
                  {product.name}
                </td>
                <td className='border border-gray-400 px-4 py-2'>
                  ${product.price}
                </td>
                <td className='border border-gray-400 px-4 py-2'>
                  {product.description}
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
