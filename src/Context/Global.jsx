import React, { createContext, useContext, useEffect, useReducer } from "react";
import { globalReducer } from "../Reducers/globalReducer";
import { GET_TRENDING, LOADING } from "../Utils/GlobalActions.jsx";
import axios from "axios";


const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const initialState = {
        loading:false,
        searchResults: [],
        trending: [],
        favourites: [],
        random:{}
    }

    const[state, dispatch] = useReducer(globalReducer, initialState);

    //get trending gif's
    const getTrending = async() => {
        dispatch({type:LOADING});
        const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=OvFSd0y6eOElJEhKMZAhBT6EJV0vYbTa&limit=25`);
        // console.log(res);
        dispatch({type:GET_TRENDING, payload : res.data.data});
        // console.log(res.data.data);
    }

    //useeffect

    useEffect(()=>{
        getTrending();
    },[])


    return (
        <GlobalContext.Provider value = {{...state}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext);
}