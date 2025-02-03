import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import guestHomeSliceReducer from "./slices/guestHomeSlice";
import productsSliceReducer from './slices/productsSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        guestHome: guestHomeSliceReducer,
        products: productsSliceReducer
    }
});
export { store }