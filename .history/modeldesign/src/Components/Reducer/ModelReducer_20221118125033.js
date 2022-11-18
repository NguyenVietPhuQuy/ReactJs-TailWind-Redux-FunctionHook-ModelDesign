const initialState = {
    model:{
        topclothes:"images/clothes/topcloth2.png",
        botclothes: 'images/clothes/botcloth1.png',
        hairstyle:'images/hairstyle/hairstyle2.png',
        background:'images/background/background1.jpg',
        necklaces:"images/necklaces/necklace1.png",
        shoes:"images/shoes/shoes1.png",
        handbags:'images/handbags/handbag1.png',
        allbody: 'images/allbody/bikini_bra.png',
    }
}
const ModelReducer = (state=initialState,action)=>{
    switch(action.type){
        case "Change_Model":{
            const newModel = {...state.model}

            newModel[action.payload.type] = action.payload.value

            return {...state, model:newModel}
        }
        default: return state
    }
}
export default ModelReducer