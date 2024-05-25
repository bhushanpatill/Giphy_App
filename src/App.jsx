import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { useTheme, useThemeUpdate } from './Context/themeContext'
import Header from './Components/Header';
import Buttons from './Components/Buttons';
import { useGlobal } from './Context/Global';

function App() {
  const theme = useTheme();

  return (
    <AppStyled theme = {theme}>
      <Header/>
      <div className="fetch-btns">
        <Buttons 
          name = {'Liked'}
          icon = {<i className = "fa-solid fa-heart"></i>}
        />
        <Buttons 
          name = {'Trending GIF'}
          icon = {<i className = "fa-solid fa-arrow-trend-up"></i>}
        />
        <Buttons 
          name = {'Random GIF'}
          icon = {<i className = "fa-solid fa-shuffle"></i>}
        />
      </div>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colorBg1}; 

  .fetch-btns{
    display:flex;
    justify-content:center;
    gap:4rem;
    margin-top:4rem;
    margin-bottom:4rem;
  }

`;

export default App
