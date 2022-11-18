import { combineReducers } from "redux";
import ProductReducer from './ProductReducer'
import CategoryReducer from './CategoryReducer'

const rootReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,

})
console.log(rootReducer)
export default rootReducer