import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    tShirt: 0,
    hoodie: 0,
    sticker: 0,
    mug: 0
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
            state.tShirt = state.tShirt + action.payload;
        },
        tShirtsDecrement: (state, action) => {
            state.tShirt -= action.payload;
        },
        hoodiesIncrement: (state, action) => {
            state.hoodie += action.payload;
        },
        hoodiesDecrement: (state, action) => {
            state.hoodie -= action.payload;
        },
        stickersIncrement: (state, action) => {
            state.sticker += action.payload;
        },
        stickersDecrement: (state, action) => {
            state.sticker -= action.payload;
        },
        mugsIncrement: (state, action) => {
            state.mug += action.payload;
        },
        mugsDecrement: (state, action) => {
            state.mug -= action.payload;
        }
    }
})
export const {
    resetCart,
    tShirtsIncrement,
    tShirtsDecrement,
    hoodiesIncrement,
    hoodiesDecrement,
    stickersIncrement,
    stickersDecrement,
    mugsIncrement,
    mugsDecrement
} = cartSlice.actions;
export default cartSlice.reducer;