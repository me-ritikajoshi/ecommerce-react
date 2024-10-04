import { legacy_createStore, combineReducers , applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducer";
import studentReducer from "./reducers/studentReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    cart: cartReducer,
    student: studentReducer,
    productsData: productReducer 
})

const store = legacy_createStore(reducer,applyMiddleware(thunk))

export default store