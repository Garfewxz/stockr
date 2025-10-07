import { create } from 'zustand';

type Product = {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  price: number;
};

type Store = {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
};

export const useProductStore = create<Store>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        { ...product, id: Date.now() } // ใช้ timestamp เป็น id ชั่วคราว
      ]
    }))
}));
