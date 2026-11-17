import { createSlice } from "@reduxjs/toolkit";

/**
 * --- Object's structure in the cart :
 *    {
 *      id: 12,
 *      name: "Romana",
 *      quantity: 1,
 *      unitPrice: 25
 * }
 */

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //! validating adding the same item more than once:
      // True-False value
      const isAdded = state.cart.some((curr) => curr.id === action.payload.id);
      if (isAdded) return;
      // payload passed later = item object --> {id, name, unitPrice, quanitity:1 (default value till editing later) }
      state.cart.push(action.payload);
    },

    removeItem(state, action) {
      // payload = item id
      state.cart = state.cart.filter((curr) => curr.id !== action.payload);
    },
    deleteCart(state) {
      state.cart = [];
    },

    incQuantity(state, action) {
      // payload = item id
      state.cart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    },
    decQuantity(state, action) {
      // payload = item id
      if (action.payload < 1) return;
      state.cart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, deleteCart, incQuantity, decQuantity } =
  cartSlice.actions;
