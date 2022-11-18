import React from "react";
function ProductItem() {
    const {desc,name,imgSrc_jpg} = this.props.items
    return (
        <div className="card hover:bg-zinc-400  bg-zinc-300 rounded-lg p-5 ease-in duration-100">
            <img alt="" src={imgSrc_jpg} className="rounded-lg flex-shrink-0 w-full"></img>
            <div className="mt-2">
                <span style={{ display: "block" }}>Name: {name}</span>
                <span style={{ display: "block" }}>Desc: {desc}</span>
            </div>
        </div>
    )
}
export default ProductItem