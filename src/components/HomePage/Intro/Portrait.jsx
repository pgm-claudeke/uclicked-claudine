import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/styles';

const PortraitBox = styled.div`

`;

const ImageBox = styled.div`
    height: 28rem;
    width: 28rem; 
    background: ${colors.primaryDarker};
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(72,199,240,0.2) 50%, rgba(72,199,240,0.5) 100%);
    border-radius: 30px;

    @media (max-width: 767px) {
        height: 12rem;
        width: 12rem;
    }
`;

const Portrait = () => {
  return (
    <PortraitBox>
        <ImageBox></ImageBox>
    </PortraitBox>
  )
}

export default Portrait