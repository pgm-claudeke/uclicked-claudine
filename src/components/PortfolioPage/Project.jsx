import React from 'react';
import styled from 'styled-components';
import ThreeTN from '../../assets/portfolio//3d/QG.jpg';
import { colors } from '../../constants/styles';

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
`;


const Project = () => {
  return (
    <ProjectBox>
        <ProjectBorder>
            <ProjectImage src={ThreeTN}></ProjectImage>
        </ProjectBorder>
    </ProjectBox>
  )
}

export default Project