import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: () => ({ ...initialState, cartItems: [] }),
    removeItem: (state, { payload: itemId }) => {
      const filtered = state.cartItems.filter((item) => item.id !== itemId);

      return { ...state, cartItems: [...filtered] };
    },
    increase: (state, { payload: itemId }) => {
      const item = state.cartItems.find((item) => item.id === itemId);
      item.amount += 1;
    },
    decrease: (state, { payload: itemId }) => {
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item.amount > 0) {
        item.amount -= 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += (item.amount * item.price);
      });

      return { cartItems: state.cartItems, amount, total };
    },
  },
});

export default cartSlice.reducer;
const {
  clearCart, removeItem, increase, decrease, calculateTotals,
} = cartSlice.actions;

export {
  clearCart, removeItem, increase, decrease, calculateTotals,
};
