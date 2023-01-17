import { create } from "zustand";
import { persist } from "zustand/middleware";

const cart_store = (set) => ({
  cart: [],
  addItem: (d) => {
    set((state) => ({
      cart: [d, ...state.cart],
    }));
  },
  removeItem: (id) => {
    set((state) => ({
      cart: state.cart.filter((e) => e.id != id),
    }));
  },
  emptyCart: () => {
    set((state) => ({
      cart: [],
    }));
  },
});

const useCartStore = create(
  persist(cart_store, {
    name: "cart",
  })
);
export default useCartStore;
