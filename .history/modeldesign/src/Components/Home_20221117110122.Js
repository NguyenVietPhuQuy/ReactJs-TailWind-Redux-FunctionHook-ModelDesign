import React from "react";
import Header from './Header.js'
import Category from "./Category.js";
import ProductList from "./ProductList.js";
import Model from "./Model.js";
function Home() {
    return (
        <div className="container mx-auto relative">
            <section className=
            "fix fixed top-0 left-0 rounded-b-md bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 w-full ring-2 ring-transparent">
                    <Header/>
            </section>
            <section className="main mt-20 flex flex-row">
                <div className="col-span-7">
                    <Category />
                    <ProductList/>
                </div>
                <div className="col-span-5">
                    <Model />
                </div>
            </section>
        </div>
    )
}
export default Home


