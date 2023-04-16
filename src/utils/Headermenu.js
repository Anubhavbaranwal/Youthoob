import { createSlice } from "@reduxjs/toolkit";

const Menubtn = createSlice({
  name: "Menu",
  initialState: {
    isMenuopen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuopen = !state.isMenuopen;
    },
    closeMenu: (state) => {
      state.isMenuopen = true;
    },
  },
});
export const { toggleMenu, closeMenu } = Menubtn.actions;

export default Menubtn.reducer;
