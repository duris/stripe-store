import { Inter } from "next/font/google";
import ShoppingCart from "./components/ShoppingCart";
import { Product, Products } from "./components/Products";

const inter = Inter({ subsets: ["latin"] });

const product1: Product = {
  id: 1,
  name: "Shorts",
  price: 45,
};
const product2: Product = {
  id: 2,
  name: "Jacket",
  price: 60,
};
const products = [product1, product2];

export default function Home() {
  return (
    <main
      className={`flex justify-center flex-col items-center ${inter.className}`}
    >
      <h1 className="p-10 text-4xl">Stripe Store</h1>
      <ShoppingCart />
      <Products products={products} />
    </main>
  );
}
