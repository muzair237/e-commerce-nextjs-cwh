import { combineReducers } from "redux";
import cartReducer from "./cart/reducer"

const rootReducer = combineReducers({
    Cart: cartReducer,
})

export default rootReducer;