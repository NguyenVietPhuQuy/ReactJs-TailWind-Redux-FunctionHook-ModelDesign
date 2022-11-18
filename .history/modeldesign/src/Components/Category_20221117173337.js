import React from "react";
import { useSelector } from 'react-redux'


function Category(props) {
    const returnCategory = useSelector(state => state.categories.category)
    const returnIsSelected = useSelector (state=>state.categories.isChangeCategory)
    const CategorySelected = returnCategory.filter(value=> value.type === returnIsSelected)
    console.log(CategorySelected)
    return (
        <div className=" flex flex-row w-full">
            {CategorySelected.map((item) => {
                return (
                    <div key={item.tabName}className="w-1/2" style={{marginTop: 10, padding:5}}>
                        <button className="p-2 w-full rounded-full text-white hover:text-pink-100
                         bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none
                         ease-in duration-200"                        
                         style={{ outline:"none",border: "none"}}
                         
                         >
                            {item.showName}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Category