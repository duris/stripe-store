import React from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../context/CartContext";

export type ProductsType = {
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const Products = ({ products }: ProductsType) => {
  const { addToCart } = useCart();

  return (
    <div>
      Products
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
