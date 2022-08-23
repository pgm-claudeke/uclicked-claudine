import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/styles';
import portrait from '../../../assets/images/deKesel_Claudine.jpg';
import Square from '../../Elements/Square';

const PortraitBox = styled.div`
    position: relative;
`;

const SquareOne = styled.div`
    height: 12rem;
    width: 12rem; 
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 16px;

    position: absolute;
    top: -3rem;
    left: -3rem;

    opacity: 0.5;

    @media (max-width: 767px) {
        height: 5rem;
        width: 5rem;
        border-radius: 8px;

        top: -1.5rem;
        left: -1.5rem;
    }
`;

const SquareTwo = styled.div`
    height: 18rem;
    width: 18rem; 
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 16px;

    position: absolute;
    bottom: -3rem;
    right: -3rem;

    opacity: 0.5;


    @media (max-width: 767px) {
        height: 8rem;
        width: 8rem;
        border-radius: 8px;

        bottom: -1.5rem;
        right: -1.5rem;
    }
`;

const ImageBox = styled.div`
    height: 28rem;
    width: 28rem; 
    padding: 0.5rem;
    background: ${colors.primaryDarker};
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(72,199,255,1) 100%);
    border-radius: 30px;

    position: relative;

    @media (max-width: 767px) {
        height: 12rem;
        width: 12rem;
        padding: 0.3rem;
        border-radius: 14px;
    }
`;

const Portait = styled.img`
    width: 100%;
    border-radius: 26px;

    @media (max-width: 767px) {
        border-radius: 10px;
    }
`;

const Portrait = () => {
  return (
    <PortraitBox>
        <ImageBox>
            <Portait src={portrait}/>
        </ImageBox>
        <SquareOne/>
        <SquareTwo/>
    </PortraitBox>
  )
}

export default Portrait