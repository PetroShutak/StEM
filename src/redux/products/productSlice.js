import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getProductById } from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, handlePending)
      .addCase(getAllProducts.rejected, handleRejected)
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProductById.pending, handlePending)
      .addCase(getProductById.rejected, handleRejected)
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id } = action.payload;
        const existingProductIndex = state.products.findIndex(
          product => product._id === _id
        );

        if (existingProductIndex !== -1) {
          state.products[existingProductIndex] = action.payload;
        } else {
          state.products.push(action.payload);
        }
      });
  },
});

export const productsReducer = productsSlice.reducer;
