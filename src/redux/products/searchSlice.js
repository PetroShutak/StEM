import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: [],
  searchQuery: '',
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
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchResult, resetSearchResult, setSearchQuery } =
  searchSlice.actions;

export const searchReducer = searchSlice.reducer;
