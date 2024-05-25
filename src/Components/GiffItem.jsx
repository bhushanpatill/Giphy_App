import React from "react";
import { useTheme } from "../Context/themeContext";
import styled from "styled-components";

function GiffItem({
    id,
    title,
    embed_url,
    images: {
        original: { url },
  }}){

    const theme = useTheme();
    return (
        <GiffStyled theme = {theme}>
            <div className="gif">
                <img src={url} alt={title} />
                    <div className = "love">
                        <i className = "fa-solid fa-heart"></i>
                    </div>

            </div>
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
