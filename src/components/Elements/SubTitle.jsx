import React from 'react';
import styled from 'styled-components';
import { fontFamily } from '../../constants/styles';

const TitleBox = styled.div`
    position: absolute;
    top: -5.5rem;
    left: -2rem;
    z-index: -1;

    @media (max-width: 1676px) {
        top: -3.6rem;
        left: 0rem;
        text-align: center;
    }

    @media (max-width: 1200px) {
        top: -2.2rem;
        left: 0rem;
        text-align: center;
    }

    @media (max-width: 767px) {
        top: -2.2rem;
        left: 0rem;
        text-align: center;
    }
`;

const Title = styled.p`
    font-size: 6.5rem;
    font-family: ${fontFamily.title};
    background: -webkit-linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0.5), rgba(255,255,255,0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1676px) {
        font-size: 4.5rem;
    }

    @media (max-width: 1200px) {
        font-size: 2.8rem;
    }
    
    @media (max-width: 767px) {
        font-size: 2.5rem;
    }
`;

const SubTitle = ({title, fontSize, top, left}) => {
  return (
    <TitleBox style={{top:top, left:left}}> 
        <Title style={{fontSize:fontSize}}>{title}</Title>
    </TitleBox>
  )
}

export default SubTitle