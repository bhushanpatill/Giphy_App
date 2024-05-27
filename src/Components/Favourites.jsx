import React from 'react'
import styled from 'styled-components'
import { useGlobal } from '../Context/Global.jsx';
import GiffItem from './GiffItem.jsx';
import Masonry from "react-masonry-css";
import { useTheme } from '../Context/themeContext.jsx';
import Loader from './Loader.jsx';

const trend = <i className = "fa-solid fa-arrow-trend-up"></i>

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    1000: 2,
    700: 1
  };

function Favourites({rendered}) {
    const {favourites, loading} = useGlobal();
    // console.log(Favourites);

    const theme = useTheme();

  return (
    <FavouritesStyled theme = {theme}>
        <h2>{trend} Favourites</h2>
        {loading && <Loader/>}
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
        {
            favourites.map((giff) => {
                // if (!giff || !giff.images || !giff.images.original) {
                //     return null; // Skip rendering this item if data is incomplete
                // }
                // if(!giff){
                //     return NULL;
                // }
                return <GiffItem key = {giff.id} {...giff} rendered = {rendered} url = {giff.url}/>
            })
        }
        </Masonry>
    </FavouritesStyled>
  )
}

const FavouritesStyled = styled.article`
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

export default Favourites
