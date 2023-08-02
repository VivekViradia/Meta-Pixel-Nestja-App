"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ThankyouPage = () => {
  const useParams = useSearchParams();
  const totalAmount = useParams.get("totalAmount");
  console.log("thank you page", totalAmount);

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);
  }, []);
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold mb-4'>
          Thank You for Your Order!
        </h2>
        <h3>Total Price Paid ${totalAmount}</h3>
        <p className='text-gray-600 mb-6'>
          Your order has been successfully placed.
        </p>
        <Link href='/' legacyBehavior>
          <a className='btn btn-primary'>Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default ThankyouPage;
