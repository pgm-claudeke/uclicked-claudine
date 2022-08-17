import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import { HiChevronRight } from 'react-icons/hi';

const Container = styled.div`
    height: 12rem;
    width: 22rem; 
    background: ${colors.primaryDarker};
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(72,199,240,0.2) 50%, rgba(72,199,240,0.5) 100%);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    transition: 0.1s all;

    :hover {
        scale: 1.05;
        cursor: pointer;
    }
`;

const IconBox = styled.p`
    font-size: 3rem;
`;

const Name = styled.p`
    font-family: ${fontFamily.title};
    font-size: 1.8rem;
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