import React from 'react';
import styled from 'styled-components';
import SubTitle from '../Elements/SubTitle';

const ProjectSection = styled.section`
    margin: 10rem 4rem;
`;

const ProjectBox = styled.div`
    position: absolute;
`;


const ProjectPage = () => {
  return (
    <ProjectSection>
        <ProjectBox>

        <SubTitle title='The Queens Gambit Poster'/>
        </ProjectBox>
    </ProjectSection>
  )
}

export default ProjectPage