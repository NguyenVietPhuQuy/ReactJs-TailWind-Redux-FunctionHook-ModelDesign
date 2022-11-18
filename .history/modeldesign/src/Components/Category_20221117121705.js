import React from "react";
import {useSelector} from 'react-redux'


function Category(){
    useSelector(state=> state.categories.Category)
    return(<div>

    </div>)
}

export default Category