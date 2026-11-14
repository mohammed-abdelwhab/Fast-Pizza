import { createSlice } from "@reduxjs/toolkit";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
];

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
    deleteCart(state, action) {},
    incrementQuantity(state, action) {},
    decrementQuantity(state, action) {},
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  deleteCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
