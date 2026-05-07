//src/store/uiSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  isSearchOpen: boolean;
}

const initialState: UIState = {
  isSearchOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSearch: state => {
      state.isSearchOpen = true;
    },
    closeSearch: state => {
      state.isSearchOpen = false;
    },
  },
});

export const { openSearch, closeSearch } = uiSlice.actions;
export default uiSlice.reducer;
