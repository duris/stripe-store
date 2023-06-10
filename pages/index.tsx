import ShoppingCart from "./components/ShoppingCart";
import { Products, products } from "./components/Products";

export default function Home() {
  return (
    <main className={`flex justify-center flex-col items-center`}>
      <h1 className="p-10 text-4xl">Stripe Store</h1>
      <ShoppingCart />
      <Products products={products} />
    </main>
  );
}
