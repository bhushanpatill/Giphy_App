import React, { createContext, useContext, useEffect, useReducer } from "react";
import { globalReducer } from "../Reducers/globalReducer";
import { GET_TRENDING, LOADING, GET_RANDOM, GET_SEARCH, ADD_TO_FAVOURITES, GET_FAVOURITES } from "../Utils/GlobalActions.jsx";
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

    //Save to Liked
    const saveToFavourites = (gif) => {
        const storedItems = JSON.parse(window.localStorage.getItem("myfavourites")) || []
        // if(!storedItems.some((item)=> item.id === gif)){
        //     const items = [...storedItems,gif];
        //     window.localStorage.setItem("myfavourites", JSON.stringify(items));
        //     dispatch({type:ADD_TO_FAVOURITES, payload:gif});
        //     alert("Added to Liked")
        // }

        // else{
        //     alert("Already Exists")
        // }

        const existingItem = storedItems.find(item => item.id === gif.id)
        if(!existingItem){
            const items = [...storedItems,gif];
            window.localStorage.setItem("myfavourites", JSON.stringify(items));
            dispatch({type:ADD_TO_FAVOURITES, payload:gif});
            alert("Added to Liked")
        }
        else{
            alert("Already Exists")
        }
        
    }

    const removeFromLocalStorage = (gif) => {
        const storedItems = JSON.parse(window.localStorage.getItem("myfavourites")) || []
        const items = storedItems.filter((item)=> item.id !== gif.id)
        window.localStorage.setItem('myfavourites', JSON.stringify(items))
        getFromLocalStorage();
    }

    const getFromLocalStorage = () =>{
        const storedItems = JSON.parse(window.localStorage.getItem("myfavourites")) || []
        dispatch({type:GET_FAVOURITES, payload: storedItems});
    }

    //useeffect
    useEffect(()=>{
        getTrending();
        getRandom();
        getFromLocalStorage();
    },[])


    return (
        <GlobalContext.Provider value = {{...state,
            getRandom,
            getSearch,
            saveToFavourites,
            removeFromLocalStorage
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext);
}