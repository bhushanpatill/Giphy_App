import React from 'react'
import styled from 'styled-components'
import { useGlobal } from '../Context/Global';
import { useTheme } from '../Context/themeContext';
import Loader from './Loader';
import GiffItem from './GiffItem';

function Random() {
  const {random, loading} = useGlobal();
  const theme = useTheme();
  return (

    <RandomStyled theme = {theme}>
        {loading ? <Loader/> : <GiffItem {...random} url = {random.images.original.url}/>}
        
    </RandomStyled>
  )
}

const RandomStyled = styled.article `
    padding:2rem;
    background-color: ${(props) => props.theme.colorBg2};
    border-radius: 1rem;
    width:50%;
    margin:0 auto;

`;

export default Random
