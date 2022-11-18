import { combineReducers } from "redux";
import ProductReducer from './ProductReducer'
import CategoryReducer from './CategoryReducer'

const rootReducer = combineReducers({
    products: productReducer,
    categories: CategoryReducer,

})

export default rootReducer