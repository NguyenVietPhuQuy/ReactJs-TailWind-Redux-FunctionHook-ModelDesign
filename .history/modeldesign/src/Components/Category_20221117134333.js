import React from "react";
import { useSelector } from 'react-redux'


function Category(props) {
    const returnValue = useSelector(state => state.categories.category)
    return (
        <div className=" flex flex-row w-full">
            {returnValue.map((item) => {
                return (
                    <div className="w-1/2" style={{marginTop: 10, padding:5}}>
                        <button className="p-2 w-full rounded-full
                         bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none"  style={{ outline:"none",border: "none"}} >
                            <span className=" text-white">{item.showName}</span>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Category