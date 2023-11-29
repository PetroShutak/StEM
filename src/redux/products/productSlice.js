import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './operations';

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handlePending = (state) => {
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
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, handlePending)
            .addCase(getAllProducts.rejected, handleRejected)
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.products = action.payload;
            });
        }
    });


    export const productsReducer = productsSlice.reducer;
