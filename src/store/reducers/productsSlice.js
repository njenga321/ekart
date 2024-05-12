import { createSlice } from '@reduxjs/toolkit';
import ProductData from '../../components/product/ProductsArray';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;

export const fetchProducts = category => async dispatch => {
  dispatch(fetchProductsRequest());
  try {
    const products = await getDataFromFile(category);

    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};


// Function to simulate fetching data from a file
const getDataFromFile = category => {
  return new Promise((resolve, reject) => {
    try {
      // Assuming ProductData is structured as shown
      const products = ProductData[category];
      if (products) {
        resolve(products);
      } else {
        reject(new Error(`Category ${category} not found in ProductData`));
      }
    } catch (error) {
      reject(error);
    }
  });
};


export default productsSlice.reducer;
