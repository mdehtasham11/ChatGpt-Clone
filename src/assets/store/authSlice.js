import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./store.js";

const store = configureStore({
    reducer:{
        message: messageSlice,
    }
})

export default store;