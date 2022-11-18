import React from "react";
import { useSelector } from "react-redux";
function ProductList() {
    const productList = useSelector(state => state.products.product)
    console.log(productList)
    return (
        <div className="grid grid-cols-4 gap-4 m-5 text-left">
            {productList.map(item => {
                return (
                    <div className="card hover:bg-slate-500  bg-zinc-300 rounded-lg p-5 ease-in duration-100">
                        <img alt="" src={item.imgSrc_jpg}  className="rounded-lg flex-shrink-0 w-full"></img>
                        <div className="mt-2">
                        <span style={{display:"block"}}>Name: {item.name}</span>
                        <span style={{display:"block"}}>Desc: {item.desc}</span>
                        </div>
                    </div>
                )
            })}
        </div>)
}
export default ProductList