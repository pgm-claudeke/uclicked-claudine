import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import Square from './Square';

const TitleBox = styled.div`
    margin: 0 0 4rem 0;

    position: absolute;
    top: 12rem;
    left: -2rem;
    z-index: -1;
`;

const Title = styled.p`
    font-size: 6.5rem;
    font-family: ${fontFamily.title};
    background: -webkit-linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0.5), rgba(255,255,255,0.6));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`;

const SubTitle = ({title, top, left}) => {
  return (
    <TitleBox style={{top:top, left:left}}>
        <Title>{title}</Title>
    </TitleBox>
  )
}

export default SubTitle