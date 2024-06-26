import React from 'react'
import styled from 'styled-components'
import { useGlobal } from '../Context/Global';
import GiffItem from './GiffItem';
import Masonry from "react-masonry-css";
import { useTheme } from '../Context/themeContext';
import Loader from './Loader.jsx';

const list = <i className = "fa-solid fa-list"></i>

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    1000: 2,
    700: 1
  };

function Search() {
    const {searchResults, loading} = useGlobal();
    // console.log(Search);

    const theme = useTheme();

  return (
    <SearchStyled theme = {theme}>
        <h2>{list} Search Results</h2>
        {loading && <Loader/>}
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
        {
            searchResults.map((giff) => {
                return <GiffItem key = {giff.id} {...giff} url = {giff.images.original.url}/>
            })
        }
        </Masonry>
    </SearchStyled>
  )
}

const SearchStyled = styled.article`
        padding:2rem;
        background-color:${props => props.theme.colorBg2};
        border-radius: 1rem;

        h2{
            font-size:2rem;
            margin-bottom:1rem;
            color:${props => props.theme.colorWhite};
            display:flex;
            align-items:center;
            gap:1rem;
            i{
                background:linear-gradient(to right,
                    ${props => props.theme.colorBlue2},
                    ${props => props.theme.colorGreen2}
                );
                -webkit-background-clip : text;
                -webkit-text-fill-color : transparent;
                // transition: all .3s ease-in-out;
            }
        }

        .my-masonry-grid {
            display: -webkit-box; /* Not needed if autoprefixing */
            display: -ms-flexbox; /* Not needed if autoprefixing */
            display: flex;
            margin-left: -20px; /* gutter size offset */
            width:auto;
        }
        .my-masonry-grid_column {
            padding-left: 20px; /* gutter size */
            background-clip: padding-box;
        }
        
        /* Style your items */
        .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
            // background: grey;
            margin-bottom: 15px;
        }
`;

export default Search
