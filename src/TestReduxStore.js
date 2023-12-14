import { configureStore } from "@reduxjs/toolkit";
import CartSliceInfo from "./TextCartSlice"

const AppStore = configureStore({
    reducer: {
        cartSlice: CartSliceInfo
    }
})
export default AppStore;