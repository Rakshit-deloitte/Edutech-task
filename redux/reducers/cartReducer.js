const userInitialState=[]
const cartReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case 'SET_CART':{
            return [...action.payload]
        }
        default:{
            return[...state]
        }
    }
}
export default cartReducer