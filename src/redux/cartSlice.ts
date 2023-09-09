
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./store";


interface CartState {
  items: { dishId: number; count: number }[];
}

const initialState: CartState = {
  items: [],
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    incrementCart:(state, action: PayloadAction<number>)=>{
      const dishId = action.payload;
      const existingItem = state.items.find((item) => item.dishId === dishId);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ dishId, count: 1 });
      }
    },
    decrementCart:(state, action: PayloadAction<number>)=>{
      const dishId = action.payload;
      const existingItem = state.items.find((item) => item.dishId === dishId);
      if (existingItem && existingItem.count > 1) {
        existingItem.count--;
      } else {
        const index = state.items.findIndex((item) => item.dishId === dishId);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      }
    }
  }
})

export const { incrementCart, decrementCart} = cartSlice.actions

export const selectCount = (state: RootState) => state.cart.items

export default cartSlice.reducer