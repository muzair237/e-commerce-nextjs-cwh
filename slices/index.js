import { combineReducers } from "redux";
import cartReducer from "./cart/reducer"
import loginReducer from "./auth/reducer"

const rootReducer = combineReducers({
    Cart: cartReducer,
    Login: loginReducer
})

export default rootReducer;