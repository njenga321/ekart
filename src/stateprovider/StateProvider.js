import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import basketReducer from '../store/reducers/basketSlice';
import userReducer from '../store/reducers/userSlice'; 
import productsReducer from '../store/reducers/productsSlice'; 

const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer, 
    products: productsReducer, 
  },
});

const StateProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StateProvider;
