import { combineReducers } from "redux";

import CounterReducer from './CounterReducer';
import CounterReducer2 from "./CounterReducer2";
import VehicleReducer from "./VehicleReducer"
import CartReducer from "./CartReducer";
import LoginReducer from "./LoginReducer";
import SignUpReducer from "./signupReducer";

const rootReducer = combineReducers({
    CounterReducer, CounterReducer2, VehicleReducer, CartReducer, LoginReducer, SignUpReducer
})

export default rootReducer;