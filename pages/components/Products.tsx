import React from "react";
import { useCart } from "../context/CartContext";
import { CartItem, ProductsType } from "@/types";

export const products = [
  {
    id: 1,
    name: "Shorts",
    price: 45,
  },
  {
    id: 2,
    name: "Jacket",
    price: 60,
  },
  {
    id: 3,
    name: "Pants",
    price: 40,
  },
  {
    id: 4,
    name: "Shoe Laces",
    price: 10,
  },
  {
    id: 5,
    name: "Vinyl Record",
    price: 34,
  },
];

export const Products = ({ products }: ProductsType) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2 className="py-10 my-10 text-4xl">Products</h2>
      <div className="flex">
        {products
          ? products.map((product) => {
              return (
                <div
                  key={product.id}
                  className=" bg-slate-600 m-2 p-4 rounded-lg"
                >
                  <div>id: {product.id}</div>
                  <div className="text-xl font-bold">{product.name}</div>
                  <div>${product.price}</div>
                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                      } as CartItem)
                    }
                    className="p-2 bg-black text-white rounded-md mt-2"
                  >
                    Add to cart
                  </button>
                </div>
              );
            })
          : "No products..."}
      </div>
    </div>
  );
};
