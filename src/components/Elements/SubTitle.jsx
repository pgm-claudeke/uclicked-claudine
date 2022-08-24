import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import Square from './Square';

const TitleBox = styled.div`
    margin: 0 0 4rem 0;

    position: absolute;
    top: -5.5rem;
    left: -2rem;
    z-index: -1;

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
        font-size: 2.8rem;
    }
    
    @media (max-width: 767px) {
        font-size: 2.5rem;
    }
`;

const SubTitle = ({title, fontSize}) => {
  return (
    <TitleBox>
        <Title style={{fontSize:fontSize}}>{title}</Title>
    </TitleBox>
  )
}

export default SubTitle