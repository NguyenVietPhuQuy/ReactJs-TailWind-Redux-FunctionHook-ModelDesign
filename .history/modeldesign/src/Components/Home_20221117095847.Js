import React from "react";
import Header from './Header.js'
import Category from "./Category.js";
import ProductList from "./ProductList.js";
import Model from "./Model.js";
function Home() {
    return (
        <div >
            <section className="header">
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


