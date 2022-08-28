import React from 'react';
import styled from 'styled-components';

import { colors, fontFamily } from '../../constants/styles';

const ProjectBox = styled.div`
    height: 15.5rem;
    width: 21.5rem;
    border-radius: 10px; 
    overflow: hidden;

    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        height: 12.5rem; 
        width: 18.5rem;
        border-radius: 8px;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

const ProjectBorder = styled.div`
    height: 15rem; 
    width: 21rem;
    border-radius: 8px;

    overflow: hidden;

    position: relative;

    @media (max-width: 1656px) {

    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        
    }

    @media (max-width: 767px) {
        height: 12rem; 
        width: 18rem;
        border-radius: 8px;
    }
`;

const NameBox = styled.div`
    position: absolute;

    height: 15rem; 
    width: 21rem;
    border-radius: 8px;
    background-color: ${colors.tertiaryTrans};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    text-align: center;

    opacity: 0;

    :hover{
        opacity: 1;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        height: 12.5rem; 
        width: 18.5rem;
        border-radius: 8px;
    }
`;

const Name = styled.p`
    max-width: 18rem;
    font-family: ${fontFamily.title};
    font-size: 1.5rem;

    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;
 
const Description = styled.p`
    font-family: ${fontFamily.text};
    font-size: 1rem;


    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;


const Project = ({name, description, img}) => {
  return (
    <ProjectBox>
        <ProjectBorder>
            <NameBox>
                <Name>{name}</Name>
                <Description>{description}</Description>
            </NameBox>
            <ProjectImage src={img}></ProjectImage>
        </ProjectBorder>
    </ProjectBox>
  )
}

export default Project