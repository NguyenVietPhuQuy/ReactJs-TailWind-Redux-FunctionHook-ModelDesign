import React from "react";
import { useSelector } from "react-redux";
function ProductList() {
    const productList = useSelector(state => state.products.product)
    console.log(productList)
    return (
        <div className="grid grid-cols-4 gap-4 m-5 text-left bg-purple-500">
            {productList.map(item => {
                return (
                    <div className="card bg-zinc-300 rounded-lg p-5">
                        <img alt="" src={item.imgSrc_jpg}  className="rounded-lg flex-shrink-0 w-full"></img>
                        <div>
                        <span>Name: {item.name}</span>
                        <span>price: {item.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>)
}
export default ProductList