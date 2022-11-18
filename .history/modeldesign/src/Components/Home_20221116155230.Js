import React from 'react'
import {useSelector} from "react-redux"
function Home(props){
    const productList = useSelector(state => state.products.product)
    console.log("productList:", productList)
}