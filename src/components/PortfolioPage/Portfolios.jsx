import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import SubTitle from '../Elements/SubTitle';
import Project from './Project';

const PortfolioSection = styled.section`
    margin: 16rem 7rem 10rem 7rem;
`;

const FilterBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    position: relative;
    height: fit-content;

    margin-bottom: 2.5rem;
`;

const FilterBtn = styled.button`
    background: transparent;
    border: none;

    font-size: 1rem;
    font-family: ${fontFamily.title};

    :hover {
        color: ${colors.primary};
        cursor: pointer;
    }
`;

const ProjectList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`;

const ProjectItem = styled.li`
`;


const PROJECTS = [
    {
        name: 'Food Kiosk',
        category: 'web',
    },
    {
        name: 'Haunted',
        category: 'video',
    },
]

const Portfolios = () => {
  return (
    <PortfolioSection>
        <FilterBox>
            <SubTitle title='Portfolio'/>
            <FilterBtn>All</FilterBtn>
            <FilterBtn>Web</FilterBtn>
            <FilterBtn>Video</FilterBtn>
            <FilterBtn>2D</FilterBtn>
            <FilterBtn>3D</FilterBtn>
        </FilterBox>
        <ProjectList>
            <ProjectItem>
                <Project></Project>
            </ProjectItem>
            <ProjectItem>
                <Project></Project>
            </ProjectItem>
            <ProjectItem>
                <Project></Project>
            </ProjectItem>
            <ProjectItem>
                <Project></Project>
            </ProjectItem>
            <ProjectItem>
                <Project></Project>
            </ProjectItem>
            <ProjectItem>
                <Project></Project>
            </ProjectItem>
            <ProjectItem>
                <Project></Project>
            </ProjectItem>
        </ProjectList>
    </PortfolioSection>
  )
}

export default Portfolios