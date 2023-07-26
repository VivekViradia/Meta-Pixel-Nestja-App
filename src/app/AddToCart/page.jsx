"use client";
import { useCart } from "../contexts/CartContext";

const AddToCart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h1>Cart Items:</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;
