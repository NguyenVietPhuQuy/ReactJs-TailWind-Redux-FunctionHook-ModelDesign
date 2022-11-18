import React from "react";
import {useSelector} from 'react-redux'


function Category(state){
    const categoryList = useSelector ((state)=> state.categories.Category)
    return(<div>
        {this.categoryList.map(item=>{
            return (<button>{item.showName}</button>)
        })}
    </div>)
}

export default Category