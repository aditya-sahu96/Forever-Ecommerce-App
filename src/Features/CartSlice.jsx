import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.carts.find((cart) => cart.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.carts.push({
          ...item,
          totalPrice: item.price * item.quantity,
        });
      }
    },

    removeItem: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = Math.floor((item.price * item.quantity)*100)/100;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = Math.floor((item.price * item.quantity)*100)/100;
      }
    },

    clearCart: (state) => {
      state.carts = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
