import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      const existingItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.basket.splice(index, 1);
      }
    },
    updateBasketQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.basket.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity; // Optimistic update
      }
    },
    emptyBasket: (state) => {
      state.basket = [];
    },
  },
});

export const getBasketTotal = (state) => {
  const total = state.basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0 // Initial value for the accumulator
  );
  return total.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
};


export const {
  addItemToBasket,
  removeItemFromBasket,
  updateBasketQuantity,
  emptyBasket, // Added emptyBasket action
} = basketSlice.actions;

export default basketSlice.reducer;
