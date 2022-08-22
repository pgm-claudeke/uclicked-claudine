import React from 'react';
import styled from 'styled-components';
import Category from './Category';

import VideoTN from '../../../assets/portfolio/video/Video_ThumbNail.png';
import TwoTN from '../../../assets/portfolio/2d/2D-ThumbNail.png';
import ThreeTN from '../../../assets/portfolio/3d/QG.jpg';
import LogoTN from '../../../assets/portfolio/logo/ClaudineLogo.png'

const CategoriesContainer = styled.section`
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CategoryList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row; 
    justify-content: center; 
    align-items: center;
    gap: 4rem;

    @media (max-width: 767px) {
        gap: 2rem;
    }
`;

const CATEGORIES = [
    {
        name:"Video" ,
        image: VideoTN,
        link:""
    },
    {
        name:"Web" ,
        image:"",
        link:""
    },
    {
        name:"2d" ,
        image: TwoTN,
        link:""
    },
    {
        name:"3d" ,
        image: ThreeTN,
        link:""
    }
]

const Categories = () => {
  return (
    <CategoriesContainer>
        <CategoryList>
            {
                CATEGORIES.map((cat) => 
                    <Category title={cat.name} image={cat.image} link={cat.link}/>
                )
            }
            
        </CategoryList>
        
    </CategoriesContainer>
  )
}

export default Categories