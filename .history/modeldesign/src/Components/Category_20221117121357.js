import React from "react";
import {useSelector} from 'react-redux'


function Category(state){
    useSelector(state=> state.categories)
    return(<div>

    </div>)
}

export default Category