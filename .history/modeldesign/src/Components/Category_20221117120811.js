import React from "react";



function Category(state){

    return(<div>
        {this.categoryList.map(item=>{
            return (<button>{item.showName}</button>)
        })}
    </div>)
}

export default Category