import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../../constants/styles';

const Container = styled.div`
    height: 12rem;
    width: 22rem; 
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    transition: 0.1s all;

    @media (max-width: 1024px) {
        height: 8rem;
        width: 12.5rem; 
        padding: 1rem;
        border-radius: 12px;
    }

    @media (max-width: 767px) {
        height: 8rem;
        width: 8rem; 
        padding: 1rem;
        border-radius: 12px;
    }
`;

const IconBox = styled.p`
    font-size: 3rem;

    @media (max-width: 1024px) {
        font-size: 2.2rem;
    }

    @media (max-width: 767px) {
        font-size: 2rem;
    }
`;

const Name = styled.p`
    font-family: ${fontFamily.title};
    font-size: 1.8rem;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
        text-align: center;
    }

    @media (max-width: 767px) {
        font-size: 1rem;
        text-align: center;
    }
`;

const Description = styled.p`
`;

const Specialization = ({name, icon, description}) => {
  return (
    <Container>
        <IconBox>{icon}</IconBox>
        <Name>{name}</Name>
        <Description>{description}</Description>
    </Container>
  )
}

export default Specialization