import { LOADING } from "../Utils/GlobalActions";
import { GET_TRENDING } from "../Utils/GlobalActions";

export const globalReducer = (state, action) => {

    switch(action.type){
        case LOADING:
            // console.log(action);
            return {...state, loading:true}
        
        case GET_TRENDING:
            // console.log(action);
            return {...state, loading:false, trending: action.payload}

        default:
             break;
             
    }
    return state;
}