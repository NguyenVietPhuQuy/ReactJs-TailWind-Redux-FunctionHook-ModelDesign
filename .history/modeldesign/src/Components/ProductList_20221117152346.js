import React from "react";
import { useSelector } from "react-redux";
function ProductList() {
    const productList = useSelector(state => state.products.product)
    console.log(productList)
    return (
        <div className="grid">
            {productList.map(item => {
                return (
                    <div className="card ">
                        <img alt="" src={item.imgSrc_jpg}  className="flex-shrink-0"></img>
                        <div>

                        </div>
                    </div>
                )
            })}
        </div>)
}
export default ProductList