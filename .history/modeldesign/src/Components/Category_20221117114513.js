import React from "react";
import {useSelector} from 'react-redux'
import {connect} from 'react-redux'

function Category(value){
    console.log(this.test)
    const categoryList = useSelector (state=> state.categories.Category)
    console.log(categoryList)
    return(<div>
        ádasds
    </div>)
}
const mapStateToProps = (state)=>{
    return {
        test: state.categories.Category
    }
}

export default connect(mapStateToProps)(Category)