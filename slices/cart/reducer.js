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
        subTotalIncrement: (state, action) => {
            state.subTotal = Math.max(0, state.subTotal + action.payload);
        },
        subTotalDecrement: (state, action) => {
            state.subTotal = Math.max(0, state.subTotal - action.payload);
        },
        manipulateCart: (state, action) => {
            const cartData = state.cart;
            const currentItemIndex = cartData?.findIndex(
                (value) => value?.id === action?.payload?.id
            )
            cartData[currentItemIndex] = action.payload;
            state.cart = cartData;
        }
    },
});

export const {
    pushCart,
    resetCart,
    subTotalIncrement,
    subTotalDecrement,
    manipulateCart,
} = cartSlice.actions;
export default cartSlice.reducer;