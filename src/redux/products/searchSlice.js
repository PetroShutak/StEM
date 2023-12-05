import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResult(state, action) {
      state.searchResults = action.payload;
    },
    resetSearchResult(state) {
      state.searchResults = [];
    },
  },
});

export const { setSearchResult, resetSearchResult } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
