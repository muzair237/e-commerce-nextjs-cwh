import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    tShirt: 0,
    hoodie: 0,
    sticker: 0,
    mug: 0,
    subTotal: 0
};


const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        resetCart: (state) => {
            state.tShirt = 0;
            state.hoodie = 0;
            state.sticker = 0;
            state.mug = 0;
        },
        tShirtsIncrement: (state, action) => {
            state.tShirt = Math.max(0, state.tShirt + action.payload); 
        },
        tShirtsDecrement: (state, action) => {
            state.tShirt = Math.max(0, state.tShirt - action.payload); 
        },
        hoodiesIncrement: (state, action) => {
            state.hoodie = Math.max(0, state.hoodie + action.payload); 
        },
        hoodiesDecrement: (state, action) => {
            state.hoodie = Math.max(0, state.hoodie - action.payload); 
        },
        stickersIncrement: (state, action) => {
            state.sticker = Math.max(0, state.sticker + action.payload); 
        },
        stickersDecrement: (state, action) => {
            state.sticker = Math.max(0, state.sticker - action.payload); 
        },
        mugsIncrement: (state, action) => {
            state.mug = Math.max(0, state.mug + action.payload); 
        },
        mugsDecrement: (state, action) => {
            state.mug = Math.max(0, state.mug - action.payload); 
        },
        subTotalIncrement: (state,action)=>{
            state.subTotal = Math.max(0, state.subTotal + action.payload);
        }
    },
});

export const {
    resetCart,
    tShirtsIncrement,
    tShirtsDecrement,
    hoodiesIncrement,
    hoodiesDecrement,
    stickersIncrement,
    stickersDecrement,
    mugsIncrement,
    mugsDecrement,
    subTotalIncrement
} = cartSlice.actions;
export default cartSlice.reducer;