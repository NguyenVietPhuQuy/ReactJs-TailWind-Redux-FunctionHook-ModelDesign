import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem"
function ProductList() {
    const productList = useSelector(state => state.products.product)
    console.log(productList)
    return (
        <div className="grid grid-cols-4 gap-4 m-5 text-left">
            {productList.map(item => {
                return (
                    <div>
                        <ProductItem items={item}/>
                    </div>
                )
            })}
        </div>)
}
export default ProductList