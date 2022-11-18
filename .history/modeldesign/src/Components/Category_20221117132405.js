import React from "react";
import {useSelector} from 'react-redux'


function Category(props){
    const returnValue = useSelector(state=>state.categories.category)
return(
    <div className="flex flex-row w-full">
        {returnValue.map((item)=>{
            return(
               <button className="p-4 w-2 ">{item.showName}</button>
            )
        })}
    </div>
)
}

export default Category