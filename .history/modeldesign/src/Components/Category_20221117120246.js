import React from "react";
import {useSelector} from 'react-redux'


function Category(value){
    const categoryList = useSelector ((state)=> state.categories.Category)
    return(<div>
        <div>${categoryList}</div>
    </div>)
}

export default Category