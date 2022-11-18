import { combineReducers } from "redux";
import ProductReducer from './ProductReducer'
import CategoryReducer from './CategoryReducer'
import ModelReducer from './ModelReducer'
const RootReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,
    models: ModelReducer
})

export default RootReducer