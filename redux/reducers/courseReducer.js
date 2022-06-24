const userInitialState=[]
const courseReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case 'SET_COURSE':{
            return [...action.payload]
        }
        default:{
            return[...state]
        }
    }
}
export default courseReducer