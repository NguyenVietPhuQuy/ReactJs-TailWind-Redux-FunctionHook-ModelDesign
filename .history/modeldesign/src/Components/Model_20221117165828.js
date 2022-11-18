import React from "react";
import './Model.css'
function Model() {
    return (
        <div className="p-3">
            <div className="text-center p-5 rounded-full text-white hover:text-pink-100
                         bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none
                         ease-in duration-200 justify-center items-center flex "
                 style={{width:460, marginLeft: 85.5}}        
                         >Model for testing</div>
            <div className="contain  " style={{ backgroundImage: `url(/images/background/background1.jpg)` }}>
                <div className="body" style={{ backgroundImage: "url(images/allbody/bodynew.png)" }} />
                <div className="model" style={{ backgroundImage: "url(images/model/1000new.png)" }} />
                <div className="bikinitop" style={{ backgroundImage: `url(/images/allbody/bikini_bra.png)` }} />
                <div className="bikinitop top-cloth" style={{ backgroundImage: `url(/images/clothes/topcloth1.png)` }} />
                <div className="bikinibottom" style={{ backgroundImage: "url(images/allbody/bikini_pantsnew.png)" }} />
                <div className="bikinitop bot-cloth" style={{ backgroundImage: `url(/images/clothes/botcloth3.png)` }} />
                <div className="feetleft" style={{ backgroundImage: "url(images/allbody/feet_high_leftnew.png)" }} />
                <div className="feetright" style={{ backgroundImage: "url(images/allbody/feet_high_rightnew.png)" }} />
                <div className="shoes" style={{ backgroundImage: `url(/images/shoes/shoes1.png)` }} />
            </div>
        </div>)
}
export default Model