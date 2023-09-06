import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cartCount: number;
}

const initialState: CartState = {
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state, action: { payload: number }) => {
      state.cartCount += 1;
    },
    decrementCart: (state, action: { payload: number }) => {
      state.cartCount -= 1;
    },
  },
});

export const { incrementCart, decrementCart } = cartSlice.actions;
export default cartSlice.reducer;