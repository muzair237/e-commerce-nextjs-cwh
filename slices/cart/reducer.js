import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    cart: [],
    subTotal: 0
};


const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        resetCart: (state) => {
            state.id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
            state.cart = [],
            state.subTotal = 0
        },
        pushCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        // tShirtsIncrement: (state, action) => {
        //     state.tShirt = Math.max(0, state.tShirt + action.payload); 
        // },
        // tShirtsDecrement: (state, action) => {
        //     state.tShirt = Math.max(0, state.tShirt - action.payload); 
        // },
        // hoodiesIncrement: (state, action) => {
        //     state.hoodie = Math.max(0, state.hoodie + action.payload); 
        // },
        // hoodiesDecrement: (state, action) => {
        //     state.hoodie = Math.max(0, state.hoodie - action.payload); 
        // },
        // stickersIncrement: (state, action) => {
        //     state.sticker = Math.max(0, state.sticker + action.payload); 
        // },
        // stickersDecrement: (state, action) => {
        //     state.sticker = Math.max(0, state.sticker - action.payload); 
        // },
        // mugsIncrement: (state, action) => {
        //     state.mug = Math.max(0, state.mug + action.payload); 
        // },
        // mugsDecrement: (state, action) => {
        //     state.mug = Math.max(0, state.mug - action.payload); 
        // },
        subTotalIncrement: (state, action) => {
            state.subTotal = Math.max(0, state.subTotal + action.payload);
        },
        subTotalDecrement: (state, action) => {
            state.subTotal = Math.max(0, state.subTotal - action.payload);
        }
    },
});

export const {
    pushCart,
    resetCart,
    tShirtsIncrement,
    tShirtsDecrement,
    hoodiesIncrement,
    hoodiesDecrement,
    stickersIncrement,
    stickersDecrement,
    mugsIncrement,
    mugsDecrement,
    subTotalIncrement,
    subTotalDecrement
} = cartSlice.actions;
export default cartSlice.reducer;