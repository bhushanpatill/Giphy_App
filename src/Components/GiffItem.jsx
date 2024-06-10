import React, { useState } from "react";
import { useTheme } from "../Context/themeContext";
import styled from "styled-components";
import Modal from "./Modal.jsx";
import { useGlobal } from "../Context/Global.jsx";
import Loader from "./Loader.jsx";

function GiffItem({
    id,
    title,
    embed_url,
    rendered,
    url
}){

    const theme = useTheme();

    const {loading, saveToFavourites, removeFromLocalStorage} = useGlobal();

    const[modal,setModal] = useState(false);


    return (
        <GiffStyled theme = {theme}>
            {modal && <Modal title = {title} url = {url} embed_url = {embed_url} setModal = {setModal}/>}
            {loading ? <Loader/> : <div className="gif" onClick={()=>{setModal(true)}}>
                <img src={url} alt={title} />
                    <div className = "love" onClick = {()=>{
                        if(rendered == "Liked"){
                            removeFromLocalStorage({
                                id,
                                title,
                                embed_url,
                                rendered,
                                url
                            })
                        }
                        else{
                            saveToFavourites({
                                id,
                                title,
                                embed_url,
                                url
                            })
                        }
                        
                    }}>
                        <i className = {rendered === "Liked" ? "fa-solid fa-x":"fa-solid fa-heart"}></i>
                    </div>

            </div>}
            {/* <div className="gif" onDoubleClick={()=>{setModal(true)}}>
                <img src={url} alt={title} />
                    <div className = "love">
                        <i className = "fa-solid fa-heart"></i>
                    </div>

            </div> */}

        </GiffStyled>
  );
}

const GiffStyled = styled.div`
    .gif{
        position:relative;
        img{
            width:100%;
            border-radius:5px;
        }
        .love{
            position:absolute;
            top:1rem;
            right:1rem;
            cursor:pointer;

            i{
                font-size:2rem;
                background:linear-gradient(to right, 
                    ${props => props.theme.colorYellow},
                    ${props => props.theme.colorGreen2}
                );
                -webkit-background-clip : text;
                -webkit-text-fill-color : transparent;
                transition: all .3s ease-in-out;
            }
            &:hover{
                transform: scale(1.17);
                transition: all .3s ease-in-out;
            }
        }
    }
`;

export default GiffItem;
