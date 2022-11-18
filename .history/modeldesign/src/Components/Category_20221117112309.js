import React from "react";
import {useSelector} from 'react-redux'
import store from "./Reducer/Store";
function Category(props){
    const categoryList = useSelector (state=> state.categories.Category)
    console.log(categoryList)
    return(<div>
        ádasds
    </div>)
}
export default Category