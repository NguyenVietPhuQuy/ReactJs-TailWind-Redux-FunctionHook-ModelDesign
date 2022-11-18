import React from "react";
import Header from './Header';
import Category from "./Category";
import ProductList from "./ProductList";
import Model from "./Model";
function Home() {
    return (
        <div>
            <section className="header">
                <Header />
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


