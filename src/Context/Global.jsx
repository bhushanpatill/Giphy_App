import React, { createContext, useContext, useEffect, useReducer } from "react";
import { globalReducer } from "../Reducers/globalReducer";
import { GET_TRENDING, LOADING, GET_RANDOM, GET_SEARCH } from "../Utils/GlobalActions.jsx";
import axios from "axios";


const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const initialState = {
        loading:true,
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

    //get random gif's
    const getRandom = async() => {
        dispatch({type:LOADING});
        const res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=OvFSd0y6eOElJEhKMZAhBT6EJV0vYbTa&limit=25`);
        // console.log(res);
        dispatch({type:GET_RANDOM, payload : res.data.data});

    }

    //get Search Results 
    const getSearch = async(query) => {
        dispatch({type:LOADING});
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OvFSd0y6eOElJEhKMZAhBT6EJV0vYbTa&q=${query}&limit=30`);
        // console.log(res);
        dispatch({type:GET_SEARCH, payload : res.data.data});
    }


    //useeffect

    useEffect(()=>{
        getTrending();
        getRandom();
    },[])


    return (
        <GlobalContext.Provider value = {{...state,
            getRandom,
            getSearch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext);
}