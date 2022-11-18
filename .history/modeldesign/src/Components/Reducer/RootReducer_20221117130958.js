import { combineReducers } from "redux";
import ProductReducer from './ProductReducer'
import CategoryReducer from './CategoryReducer'

const RootReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,

})

export default RootReducer