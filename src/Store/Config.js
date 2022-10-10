import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./SliceCart";
const store = configureStore({
  reducer: {
    cartInfo: sliceCart.reducer,
  },
});
export default store;
