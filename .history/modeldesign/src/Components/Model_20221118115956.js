import React from "react";
import { useSelector } from "react-redux";
import './Model.css'
function Model() {
    const returnModel = useSelector (state => state.models.model)
    const {topclothes,botclothes,hairstyle,background,necklaces,shoes,handbags} = returnModel
    return (
        <div className="p-2  justify-center items-center flex flex-col ">
            <div className="text-center p-5 rounded-full text-white hover:text-pink-100
                         bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none
                         ease-in duration-200 flex  justify-center items-center mb-4"
                 style={{width:460}}        
                         >Model for testing</div>
            <div className="contain rounded-3xl " style={{ backgroundImage: `url(${background})` }}>

        </div>)
}
export default Model