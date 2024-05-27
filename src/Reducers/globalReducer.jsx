import { ADD_TO_FAVOURITES, GET_FAVOURITES, GET_RANDOM, GET_SEARCH, LOADING } from "../Utils/GlobalActions";
import { GET_TRENDING } from "../Utils/GlobalActions";

export const globalReducer = (state, action) => {

    switch(action.type){
        case LOADING:
            // console.log(action);
            return {...state, loading:true}
        
        case GET_TRENDING:
            // console.log(action);
            return {...state, loading:false, trending: action.payload}

        case GET_RANDOM:
            return {...state, loading:false, random: action.payload}

        case GET_SEARCH:
            return {...state, loading:false, searchResults: action.payload}

        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites:[...state.favourites, action.payload]
            }
        
        case GET_FAVOURITES:
            return {
                ...state,
                favourites:action.payload
            }

        default:
             break;
             
    }
    return state;
}