import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
    }

    body{
        font-family: "Nunito Sans", sans-serif;
        min-height: 100vh;
        font-size: 1rem
        ::-webkit-scrollbar{
            width: 7px;
        }
        ::-webkit-scrollbar-track{
            background: #252525;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(#9933ff, #00e6cc);
            border-radius: 1rem;
        }
    }
`;