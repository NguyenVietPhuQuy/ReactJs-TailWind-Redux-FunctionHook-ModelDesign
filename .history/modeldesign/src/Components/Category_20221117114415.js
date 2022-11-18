import React from "react";
import {useSelector} from 'react-redux'
import {connect} from 'react-redux'

function Category(props){
    console.log(this.props.test)
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