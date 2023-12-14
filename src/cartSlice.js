import { createSlice } from "@reduxjs/toolkit";
const cartSliceInfo = createSlice({
    name: "cart",
    initialState: {
        cartSlice: []
    },
    reducers: {
        addItem: ((state, action)=> {
            state.cartSlice.push(action.payload)
        }), 
        removeItem:((state, action)=> {
            state.cartSlice.splice(action.payload, 1)
        }), 
        clearItem:((state, action)=> {
            state.cartSlice = []
        }),
    }
})
export const {addItem, removeItem, clearItem} = cartSliceInfo.actions
export default cartSliceInfo.reducer