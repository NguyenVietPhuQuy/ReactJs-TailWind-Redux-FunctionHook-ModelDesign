import React from "react";
import Header from './Header.js'
import Category from "./Category.js";
import ProductList from "./ProductList.js";
import Model from "./Model.js";
function Home() {
    return (
        <div className="container mx-auto relative">
            <section className="fix fixed top-0 left-0 rounded-md bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 w-full">
                    <Header/>
            </section>
            <section className="main">
                <div>
                    <Category />
                    <ProductList/>
                </div>
                <div>
                    <Model />
                </div>
            </section>
        </div>
    )
}
export default Home


