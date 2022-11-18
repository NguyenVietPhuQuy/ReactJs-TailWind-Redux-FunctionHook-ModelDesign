import React from "react";
import { useDispatch } from "react-redux";
import { ModelChange } from "./Action/CategoryChange.Js";
function ProductItem(props) {
    const {desc,name,imgSrc_jpg, imgSrc_png, type} = props.items
    const dispatch = useDispatch()
    const handleProductChange = (type,value)=> {
        const action = ModelChange(type,value)
        dispatch(action)
    }
    return (
        <div className="card hover:bg-zinc-400  bg-zinc-300 rounded-lg p-5 ease-in duration-100 opacity-90 hover:opacity-100">
            <img alt="" src={imgSrc_jpg} className="rounded-lg flex-shrink-0 w-full"></img>
            <div className="mt-2 ">
                <span style={{ display: "block" }}>Name: {name}</span>
                <span style={{ display: "block" }}>Desc: {desc}</span>
                <button className="text-center font-semibold align-items-center p-2 w-full rounded-xl mt-2 bg-gradient-to-r from-slate-500 to-red-300" 
                onClick={()=>{this.handleProductChange(type,imgSrc_png)}}
                >Try</button>
            </div>
        </div>
    )
}
export default ProductItem