import React from "react";
import Header from './Header.js'
import Category from "./Category.js";
import ProductList from "./ProductList.js";
import Model from "./Model.js";
function Home() {
    return (
        <div className="container mx-auto relative bg-fuchsia-300">
            <section className=
            "fix fixed top-0 left-0 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 w-full ring-2 ring-transparent">
                    <Header/>
            </section>
            <section className="main mt-14 flex flex-row">
                <div className="basis-7/12">
                    <Category/>
                    <ProductList/>
                </div>
                <div className="basis-5/12">
                    <Model />
                </div>
            </section>
        </div>
    )
}
export default Home


