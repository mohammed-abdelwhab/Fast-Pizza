import { createSlice } from "@reduxjs/toolkit";

// const fakeCart = [
//   {
//     id: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//   },
// ];

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //! validating adding the same item more than once:
      // true, false value
      const isAdded = state.cart.some((curr) => curr.id === action.payload.id);
      if (isAdded) return;
      // payload = item object --> {id, name, unitPrice, quanitity:1 (default value till editing later) }
      state.cart.push(action.payload);
    },

    removeItem(state, action) {
      // payload = item id
      state.cart.filter((curr) => curr.id !== action.payload);
    },
    deleteCart(state) {
      state.cart = [];
    },

    //** --- preparing the payload data first --> payload = {required item id, new quantity} ---- */
    incrementQuantity: {
      prepare(quantity, id) {
        return {
          payload: { quantity, id },
        };
      },
      reducer(state, action) {
        state.cart.map((curr) =>
          curr.id === action.payload.id
            ? { ...curr, quantity: action.payload.quantity }
            : curr,
        );
      },
    },
    decrementQuantity: {
      prepare(quantity, id) {
        return {
          payload: { quantity, id },
        };
      },
      reducer(state, action) {
        if (action.payload.quantity <= 0) return;
        state.cart.map((curr) =>
          curr.id === action.payload.id
            ? { ...curr, quantity: action.payload.quantity }
            : curr,
        );
      },
    },
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
