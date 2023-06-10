import React from "react";
import { useCart } from "../context/CartContext";

const ShoppingCart = () => {
  const { items, removeFromCart } = useCart();

  return (
    <div className="fixed top-0 right-0">
      Shopping Cart
      <div className="border border-gray-200 bg-white p-10 rounded-lg text-black text-center">
        <div className="grid grid-cols-4 grid-col-4 bg-slate-200 p-2 rounded-lg mb-6">
          <span className=" border-r border-slate-400">Product</span>
          <span className=" border-r border-slate-400">Cost</span>
          <span className=" border-r border-slate-400">Quantity</span>
          <span className="">Subtotal</span>
        </div>

        {items && items.length > 0
          ? items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-5 border rounded-md p-2 m-2 text-center"
                >
                  <span className=" border-r border-slate-400">
                    {item.name}
                  </span>
                  <span className=" border-r border-slate-400">
                    ${item.price}
                  </span>
                  <span className=" border-r border-slate-400">
                    x {item.quantity}
                  </span>
                  <span className="">${item.quantity * item.price}</span>
                  <button onClick={() => removeFromCart(item)}>Delete</button>
                </div>
              );
            })
          : "No items"}
      </div>
    </div>
  );
};

export default ShoppingCart;
