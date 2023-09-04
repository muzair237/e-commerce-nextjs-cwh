import { combineReducers } from "redux";
import Cartreducer from "./cart/reducer"

const rootReducer = combineReducers({
    Cart: Cartreducer
})

export default rootReducer;