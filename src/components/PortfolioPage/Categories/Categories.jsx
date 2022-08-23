import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Category from './Category';

import VideoTN from '../../../assets/portfolio/video/Video_ThumbNail.png';
import TwoTN from '../../../assets/portfolio/2d/2D-ThumbNail.png';
import ThreeTN from '../../../assets/portfolio/3d/QG.jpg';
import LogoTN from '../../../assets/portfolio/logo/ClaudineLogo.png'
import { ROUTES } from '../../../constants/routes';

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

    list-style: none;

    @media (max-width: 767px) {
        gap: 2rem;
    }
`;

const CategoryItem = styled.li`
`;

const CategoryLink = styled(Link)`
`;

const CATEGORIES = [
    {
        name:"Video" ,
        image: VideoTN,
        link: ROUTES.VIDEO
    },
    {
        name:"Web" ,
        image:"",
        link: ROUTES.WEB
    },
    {
        name:"2d" ,
        image: TwoTN,
        link: ROUTES.TWO
    },
    {
        name:"3d" ,
        image: ThreeTN,
        link: ROUTES.THREE
    }
]

const Categories = () => {
  return (
    <CategoriesContainer>
        <CategoryList>
            {
                CATEGORIES.map((cat) => 
                    <CategoryItem>
                        <CategoryLink to={cat.link}>
                            <Category title={cat.name} image={cat.image} link={cat.link}/>
                        </CategoryLink>
                    </CategoryItem>
                )
            }
        </CategoryList>
        
    </CategoriesContainer>
  )
}

export default Categories