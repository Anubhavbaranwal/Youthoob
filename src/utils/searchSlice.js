import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState: {},
  reducers: {
    CacheResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { CacheResult } = SearchSlice.actions;
export default SearchSlice.reducer;
