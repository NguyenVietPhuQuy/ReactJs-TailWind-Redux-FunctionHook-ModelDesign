export const CategoryChange = (type) => {
return{
    type: "Change_Category",
    payload: type,
}
}
export const ModelChange =(type,value) =>{
    return{
        type:"Change_Model",
        payload:{
            type,
            value
        }
    }
}
