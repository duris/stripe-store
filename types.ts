export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};

export type ProductsType = {
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
};
