import React from "react";
import Header from './Header.js'
import Category from "./Category.js";
import ProductList from "./ProductList.js";
import Model from "./Model.js";
import {useSelector} from 'react-redux'
function Home(props) {
    const test = useSelector(state => state.categories.Category)
    console.log('test',test)
    return (
        <div className="container mx-auto relative">
            <section className=
            "fix fixed top-0 left-0 rounded-b-md bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 w-full ring-2 ring-transparent">
                    <Header/>
            </section>
            <section className="main mt-20 flex flex-row">
                <div className="basis-8/12">
                    <Category/>
                    <ProductList/>
                </div>
                <div className="basis-4/12">
                    <Model />
                </div>
            </section>
        </div>
    )
}
export default Home


