const userInitialState=[]
const wishlistReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case 'SET_WISHLIST':{
            return [...action.payload]
        }
        default:{
            return[...state]
        }
    }
}
export default wishlistReducer