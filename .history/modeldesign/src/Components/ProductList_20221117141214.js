import React from "react";
import { useSelector } from "react-redux";
function ProductList(){
    const productList = useSelector(state => state.products.product)
    console.log(productList)
    return(<div>
        
    </div>)
}
export default ProductList