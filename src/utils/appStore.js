import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
  reducer : {
    reducer:cartReducer
  }
})

export default appStore;