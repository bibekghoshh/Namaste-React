import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/CartSlice.js";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-8">
        <button onClick={handleClearCart} className="px-4 py-1 rounded-lg bg-sky-600">Clear Cart</button>
        {cartItem.length === 0 ? (
          <h1>Cart is Empty. ADD item to the CART</h1>
        ) : (
          <ItemList items={cartItem} />
        )}
      </div>
    </div>
  );
};

export default Cart;
