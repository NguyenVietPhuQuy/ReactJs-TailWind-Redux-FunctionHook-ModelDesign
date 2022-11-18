import React from "react";
import {useSelector} from 'react-redux'


function Category(){
    const categoryList = useSelector((state)=> state.categories.Category)
    console.log(categoryList)
    return(<div>
        {categoryList}
    </div>)
}

export default Category