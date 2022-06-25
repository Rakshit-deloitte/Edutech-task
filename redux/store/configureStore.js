
import { combineReducers, createStore } from "redux"
import cartReducer from "../reducers/cartReducer"
import courseReducer from "../reducers/courseReducer"
import pdpReducer from "../reducers/pdpreducer"
import wishlistReducer from "../reducers/wishlistreducer"


const configureStore=()=>{
    const store=createStore(combineReducers({
        course:courseReducer,
        cart:cartReducer,
        wishlist:wishlistReducer,
        pdpData:pdpReducer
    }))
    return store
}

export default configureStore



