import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { useTheme, useThemeUpdate } from './Context/themeContext'
import Header from './Components/Header';
import Buttons from './Components/Buttons';
import { useGlobal } from './Context/Global';
import Trending from './Components/Trending.jsx';
import Random from './Components/Random.jsx';
import Search from './Components/Search.jsx';

function App() {
  const {getRandom} = useGlobal();
  const theme = useTheme();

  const [rendered, setRendered] = useState('trending');

  const content = () => {
      switch(rendered){
        case 'Trending':
          return <Trending/>
        case 'Liked':
          return <Trending/>
        case 'Random':
          return <Random/>
        case 'Search':
          return <Search/>
        default:
          return <Trending/>
     }
  }

  return (
    <AppStyled theme = {theme}>
      <Header setRendered={setRendered}/>
      <div className="fetch-btns">
        <Buttons 
          name = {'Liked'}
          icon = {<i className = "fa-solid fa-heart"></i>}
          onClick= {()=> {
            setRendered('Liked')
          }}
        />
        <Buttons 
          name = {'Trending GIF'}
          icon = {<i className = "fa-solid fa-arrow-trend-up"></i>}
          onClick= {()=> {
            setRendered('Trending')
          }}
        />
        <Buttons 
          name = {'Random'}
          icon = {<i className = "fa-solid fa-shuffle"></i>}
          onClick= {()=> {
            setRendered('Random')
            getRandom();
          }}
        />
      </div>
      <main>
        {content()};
      </main>
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

  main{
    padding: 2rem 8rem;
  }

`;

export default App
