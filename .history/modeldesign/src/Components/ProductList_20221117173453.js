import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem"
function ProductList() {
    const productList = useSelector(state => state.products.product)
    const returnIsSelected = useSelector (state=>state.categories.isChangeCategory)
    const CategorySelected = productList.filter(value=> value.type === returnIsSelected)
    return (
        <div className="grid grid-cols-4 gap-4 m-5 text-left">
            {CategorySelected.map(item => {
                return (
                    <div key={item.name}>
                        <ProductItem items={item}/>
                    </div>
                )
            })}
        </div>)
}
export default ProductList