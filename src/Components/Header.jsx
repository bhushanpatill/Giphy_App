import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../Context/themeContext';

const search = <i className="fa-solid fa-magnifying-glass"></i>

function Header() {
    const theme = useTheme();
  return (
     <HeaderStyled theme = {theme}>
        <div className="logo">
            <span>Powered by</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" className="sc-1f039a7e-2 bMXkCi"><g fillRule="evenodd" clipRule="evenodd"><path fill="#00ff99" d="M0 3h4v29H0z"></path><path fill="#9933ff" d="M24 11h4v21h-4z"></path><path fill="#00ccff" d="M0 31h28v4H0z"></path><path fill="#fff35c" d="M0 0h16v4H0z"></path><path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path><path className="shadow" d="M24 16v-4h4M16 0v4h-4"></path></g></svg>
            <h5 className = "GIFFY">GIFFY</h5>
        </div>
        <form action = "">
            <div className="input-control">
                <input type="text" placeholder = "Search for GIF's"></input>
                <button className = "submit-btn">
                    {search}
                </button>
            </div>
        </form>
     </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
    padding: 2rem 22rem;
    background-color: ${props => props.theme.colorBg2};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 2rem;
    .logo{
            display:flex;
            align-items: center;
            justify-content:center;
            gap: 1rem;
            height:50px;
            padding-right:5px;
        .GIFFY{
            font-size:45px;
            color: white;
        }
        .bMXkCi{
            height:60px;
        }
        span{
            text-transform: uppercase;
            color: ${props => props.theme.colorGrey};
            font-size: .8rem;
        }
}

    form{
        width:100%;
        .input-control{
            position:relative;
            width:100%;

            input{
                position:relative;
                z-index:10;
                width:100%;
                font-family:inherit;
                font-size:inherit;
                padding: 1rem 2rem;
                outline: none;
                border: none;
                border-radius: 15px;
            }

            &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: -0.3rem;
                transform: translateY(-50%) scale(0);
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%);
                background-size: 400% 400%;
                z-index: 1;
                padding: .3rem;
                border-radius: 1rem;
                transition: all 0.5s ease;
                animation: gradient 3s ease-in-out infinite;
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
            
            &:hover::after, &:focus-within::after {
                transform: translateY(-50%) scale(1);
            }
            

            .submit-btn{
                position:absolute;
                top:50%;
                right:0;
                display:flex;
                align-items:center;
                justify-content:center;
                transform: translateY(-50%);
                border:none;
                outline:none;
                color:${(props) => props.theme.colorWhite};
                font-size: 1.2rem;
                font-weight: 600;
                cursor:pointer;
                z-index: 10;
                height: 100%;
                padding: 0 1rem;
                border-radius: 15px;
                background: linear-gradient(to right, 
                    ${props => props.theme.colorPurple},
                    ${props => props.theme.colorSalmon}
                );
                background-size: 400% 400%;
                animation: gradient 3s ease-in-out infinite;

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
                i{
                    font-size:1.8rem;
                    color:white;
                }
            }

        }
    }
`;

export default Header
