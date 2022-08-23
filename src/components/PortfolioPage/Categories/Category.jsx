import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../../constants/styles';
import SubTitle from '../../Elements/SubTitle';
import { Link } from 'react-router-dom';

const CategoryContainer = styled.div`
    height: 20rem; 
    width: 38rem;
    border-radius: 12px;
    overflow: hidden;
    transition: all easeInOut;

    :hover{
        scale: 1.03; 
        cursor: pointer;
    }

    @media (max-width: 767px) {
        height: 10rem; 
        width: 18rem;
        border-radius: 8px;
    }
`;

const CategoryTitle = styled.div`
    height: 20rem; 
    width: 38rem;
    border-radius: 12px;
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));

    position: absolute;
    font-size: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;

    @media (max-width: 767px) {
        height: 10rem; 
        width: 18rem;
        border-radius: 8px;
        font-size: 3rem;
    }
`;


const CategoryImage = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

const Category = ({title, link, image}) => {
  return (
    <CategoryContainer> 
        <CategoryTitle>
            <p style={{fontFamily:fontFamily.title}}>{title}</p>
        </CategoryTitle>
        <CategoryImage src={image}/>
    </CategoryContainer>
  )
}

export default Category