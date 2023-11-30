import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFiltred: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.isFiltred = action.payload; 
    },
    resetFilter(state) {
      state.isFiltred = false;
    },
  },
});

export const { updateFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
