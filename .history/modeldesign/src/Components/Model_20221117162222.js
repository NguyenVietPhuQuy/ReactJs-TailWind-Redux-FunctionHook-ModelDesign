import React from "react";
function Model(){
    return(
    <div>
      <div className="contain" style={{ backgroundImage: `url(/images/background/background1.jpg)` }}>
        <div className="body" style={{ backgroundImage: "url(images/allbody/bodynew.png)" }} />
        <div className="model" style={{ backgroundImage: "url(images/model/1000new.png)" }} />
        <div className="bikinitop" style={{ backgroundImage: `url(${modelList.allbody})` }} />
        <div className="bikinitop top-cloth" style={{ backgroundImage: `url(${modelList.topclothes})` }} />
        <div className="bikinibottom" style={{ backgroundImage: "url(images/allbody/bikini_pantsnew.png)" }} />
        <div className="bikinitop bot-cloth" style={{ backgroundImage: `url(${modelList.botclothes})` }} />
        <div className="feetleft" style={{ backgroundImage: "url(images/allbody/feet_high_leftnew.png)" }} />
        <div className="feetright" style={{ backgroundImage: "url(images/allbody/feet_high_rightnew.png)" }} />
        <div className="shoes" style={{ backgroundImage: `url(${modelList.shoes})` }} />
      </div>
    </div>)
}
export default Model