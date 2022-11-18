import React from "react";
import {useSelector} from 'react-redux'


function Category(props){
    const returnValue = useSelector(state=>state.categories.category)
    console.log(returnValue)
return(
    <div>
        {this.returnValue.map((item)=>{
            return(
            <div>
                {item.showName}
            </div>
            )
        })}
    </div>
)
}

export default Category