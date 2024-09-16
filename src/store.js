import { create } from "zustand";
import zukeeper from "zukeeper";

const useCartStore = create(
  zukeeper((set, get) => ({
    cart: [],
    addToCart: (newItem) => {
      // const itemExists = (state) =>
      //   state.cart.find((item) => item.id === newItem.id);
      // if (itemExists) {
      //   if (typeof itemExists.quantity === "number") {
      //     itemExists.quantity++;
      //   }

      //   set((state) => ({ cart: [...state.cart] }));
      // } else {
      const itemExists = get().cart.find((item) => item.id === newItem.id);

      if (itemExists) {
        if (typeof itemExists.quantity === "number") {
          itemExists.quantity++;
        }

        set((state) => ({ cart: [...state.cart] }));
      } else {
        set((state) => ({
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        }));
      }
    },
    removeFromCart: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),

    clearCart: () =>
      set((state) => ({
        cart: (state.cart = []),
      })),
    increaseQuantity: (id) => {
      const itemExists = get().cart.find((item) => item.id === id);

      if (itemExists) {
        if (typeof itemExists.quantity === "number") {
          itemExists.quantity++;
        }
        set((state) => ({ cart: [...state.cart] }));
      }
    },
    decreaseQuantity: (id) => {
      const itemExists = get().cart.find((item) => item.id === id);
      if (itemExists) {
        if (typeof itemExists.quantity === "number") {
          itemExists.quantity--;
        }
        set((state) => ({ cart: [...state.cart] }));
      }
    },
  }))
);

export { useCartStore };
