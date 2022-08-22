import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/styles';

const SquareContainer = styled.div`
    height: 28rem;
    width: 28rem; 
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 30px;

    position: absolute;
    z-index: -1;
`;

const Square = ({ratio, radius, top, bottom, left, right}) => {
  return (
    <SquareContainer style={{height:ratio, width:ratio, borderRadius:radius, top:top, bottom:bottom, left:left, right:right}}>
        
    </SquareContainer>
  )
}

export default Square