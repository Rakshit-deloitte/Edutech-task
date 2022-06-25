const userInitialState=[]
const pdpReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case 'SET_PDPDATA':{
            return [...action.payload]
        }
        default:{
            return[...state]
        }
    }
}
export default pdpReducer