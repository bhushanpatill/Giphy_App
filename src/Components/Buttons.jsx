import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../Context/themeContext';

function Buttons({name, icon, onClick}) {
    const theme = useTheme();
  return (
    <ButtonsStyled theme = {theme}>
        <span>
            {icon}
            {name}
        </span>
        <span></span>
    </ButtonsStyled>
  )
}

const ButtonsStyled = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.colorWhite};
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.3rem;
    position: relative;
    display:flex;
    align-items:center;
    justify-content: center;
    border: none;
    transition: all 0.3s ease-in-out;
    
    span:first-child{
        position: relative; 
        z-index: 5;
        display:flex;
        align-items:center;
        justify-content:center;
        padding: 0.7rem 2rem;
        border-radius: 1rem;
        gap: 1rem;
        background: ${(props) => props.theme.colorBg1};
    }

    span:last-child{
        position:absolute;
        top:50%;
        // left:0.2rem;
        transform: translateY(-50%);
        width: calc(100% + 0.6rem);
        height: calc(100% + 0.6rem);
        // background: red;
        background: linear-gradient(to right, 
            ${props => props.theme.colorPurple},
            ${props => props.theme.colorGreen}
        );
        background-size: 400% 200%;
        border-radius: 1rem;
        z-index: 1;
        animation: gradient 5s ease-in-out infinite;
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
    }

    &:hover span:first-child{
        transition: all 0.3s ease-in-out;
        color: ${props => props.theme.colorGreen};
    }

    &:hover span:last-child{
        animation-play-state: paused;
    }
`;

export default Buttons
