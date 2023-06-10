import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Cart, CartItem } from "@/types";

const initValue: Cart = {
  items: [],
  addToCart: async () => {},
  removeFromCart: () => {},
};

const CartContext = createContext<Cart>(initValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const addToCart = (item: CartItem) => {
    console.log("adding item to cart");

    let prevCartItems = [...cartItems]; // Deep clone the array
    const existingItemIndex = prevCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      prevCartItems[existingItemIndex] = {
        ...prevCartItems[existingItemIndex],
        quantity: prevCartItems[existingItemIndex].quantity + 1,
      };
    } else {
      prevCartItems = [...prevCartItems, { ...item, quantity: 1 }];
    }

    setCartItems(prevCartItems);
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems(cartItems.filter((i: CartItem) => i.id !== item.id));
  };

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw Error("No cart found");

  return context;
};
