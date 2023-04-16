import { configureStore } from "@reduxjs/toolkit";
import Headermenu from "./Headermenu";
import SearchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    Menu: Headermenu,
    Search: SearchSlice,
  },
});

export default store;
