import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/styles';

const SquareContainer = styled.div`
    height: 28rem;
    width: 28rem; 
    background: ${colors.primaryDarker};
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(72,199,240,0.2) 50%, rgba(72,199,240,0.5) 100%);
    border-radius: 30px;
`;

const square = ({ratio, radius}) => {
  return (
    <SquareContainer style={{height:ratio, width:ratio, borderRadius:radius}}>
        
    </SquareContainer>
  )
}

export default square