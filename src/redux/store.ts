import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


interface CartState {
  cartCount: number;
}

interface RootState {
  cart: CartState;
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type { RootState };

export default store;