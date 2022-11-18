import { combineReducers } from "redux";
import ProductReducer from './ProductReducer'
import CategoryReducer from './CategoryReducer'
import ModelReducer from './ModelReducer'
const rootReducer = combineReducers({
    product: ProductReducer,

})

export default rootReducer