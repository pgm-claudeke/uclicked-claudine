import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/styles';
import portrait from '../../../assets/images/deKesel_Claudine.jpg';
import Square from '../../Elements/Square';

const PortraitBox = styled.div`
    position: relative;
`;

const SquareBox = styled.div`
    opacity: 0.5;
`;

const ImageBox = styled.div`
    height: 28rem;
    width: 28rem; 
    padding: 0.5rem;
    background: ${colors.primaryDarker};
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(72,199,255,1) 100%);
    border-radius: 30px;

    @media (max-width: 767px) {
        height: 12rem;
        width: 12rem;
    }
`;

const Portait = styled.img`
    width: 100%;
    border-radius: 26px;
`;

const Portrait = () => {
  return (
    <PortraitBox>
        <SquareBox>
            <Square ratio='12rem' radius='16px' top='-3rem' left='-3rem'/>
        </SquareBox>
        <ImageBox>
            <Portait src={portrait}/>
        </ImageBox>
        <SquareBox>
            <Square ratio='18rem' radius='16px' bottom='-3rem' right='-3rem'/>
        </SquareBox>
    </PortraitBox>
  )
}

export default Portrait