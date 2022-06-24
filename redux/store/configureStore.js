// import { configureStore } from "@reduxjs/toolkit"
import { combineReducers, createStore } from "redux"
import cartReducer from "../reducers/cartReducer"
import courseReducer from "../reducers/courseReducer"


const configureStore=()=>{
    const store=createStore(combineReducers({
        course:courseReducer,
        cart:cartReducer
    }))
    return store
}

export default configureStore

// const store=configureStore({
//     reducer:{
//         course:courseReducer
//     }
    
// })

// export default store

