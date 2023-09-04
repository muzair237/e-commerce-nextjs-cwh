import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    tShirts: 5,
    hoodies: 5,
    stickers: 5,
    mugs: 5
}

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        tShirtsIncrement: (state, action) => {
            state.tShirts += action.payload;
        },
        tShirtsDecrement: (state, action) => {
            state.tShirts -= action.payload;
        },
        hoodiesIncrement: (state, action) => {
            state.hoodies += action.payload;
        },
        hoodiesDecrement: (state, action) => {
            state.hoodies -= action.payload;
        },
        stickersIncrement: (state, action) => {
            state.stickers += action.payload;
        },
        stickersDecrement: (state, action) => {
            state.stickers -= action.payload;
        },
        mugsIncrement: (state, action) => {
            state.mugs += action.payload;
        },
        mugsDecrement: (state, action) => {
            state.mugs -= action.payload;
        }
    }
})
export const {
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