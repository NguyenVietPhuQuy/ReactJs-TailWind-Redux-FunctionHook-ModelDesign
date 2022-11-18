import React from "react";
import {useSelector} from 'react-redux'
function Category(){
    const categoryList = useSelector (state=> state.categories.Category)
    console.log(this.categoryList)
    return(<div>
        ádasds
    </div>)
}
export default Category