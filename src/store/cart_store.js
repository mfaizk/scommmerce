import { create } from "zustand";
import { persist } from "zustand/middleware";

const cart_store = (set) => ({
  cart: [],
  totalPrice: 0,
  addItem: (d) => {
    set((state) => ({
      cart: [d, ...state.cart],
      totalPrice: Math.round(state.totalPrice + Number(d.price)),
    }));
  },
  removeItem: (d) => {
    set((state) => ({
      cart: state.cart.filter((e) => e.id != d.id),
      totalPrice: Math.round(state.totalPrice - Number(d.price)),
    }));
  },
  emptyCart: () => {
    set((state) => ({
      cart: [],
      totalPrice: 0,
    }));
  },
});

const useCartStore = create(
  persist(cart_store, {
    name: "cart",
  })
);
export default useCartStore;
