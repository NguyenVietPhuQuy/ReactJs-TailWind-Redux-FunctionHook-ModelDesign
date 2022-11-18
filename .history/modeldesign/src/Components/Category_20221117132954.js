import React from "react";
import { useSelector } from 'react-redux'


function Category(props) {
    const returnValue = useSelector(state => state.categories.category)
    return (
        <div className=" flex flex-row w-full">
            {returnValue.map((item) => {
                return (
                    <div style={{ border: "2px solid black", }}>
                        <button className="p-4 w-1/2 " >{item.showName}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Category