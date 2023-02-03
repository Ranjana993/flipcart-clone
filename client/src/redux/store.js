import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { getProductDetailReducer, getProductsReducer } from "./reducers/ProductReducer";



const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetail:getProductDetailReducer

})
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store