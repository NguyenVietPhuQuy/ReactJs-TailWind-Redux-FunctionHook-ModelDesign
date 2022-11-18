import React from "react";
import {useSelector} from 'react-redux'


function Category(){
    const categoryList = useSelector((state:RootState)=> state.categories.Category)
    console.log(categoryList)
    return(<div>
        {categoryList.tabName}
    </div>)
}

export default Category