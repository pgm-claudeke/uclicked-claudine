import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import SubTitle from '../Elements/SubTitle';
import Project from './Project';
import { Link } from "react-router-dom";
import { PROJECTROUTES } from '../../constants/routes';

import ThreeTN from '../../assets/portfolio/3d/QG/3d-QG-TN.png';

const PortfolioSection = styled.section`
    margin: 16rem 7rem 10rem 7rem;

    @media (max-width: 1656px) {
    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        margin: 9rem 3rem;
    }

    @media (max-width: 767px) {
        margin: 8rem 2rem;
    }
`;

const FilterBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    position: relative;
    height: fit-content;

    margin-bottom: 2.5rem;

    @media (max-width: 1200px) {
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 767px) {
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }
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

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ProjectItem = styled.li`
`;

const ProjectLink = styled(Link)`
`;


const PROJECTS = [
    {
        name: 'The Queens Gambit',
        description: '3D Poster',
        category: '3d',
        img: ThreeTN,
        link: PROJECTROUTES.TQG3D
    },
    {
        name: 'Food Kiosk',
        description: 'Food kiosk react application',
        category: 'web',
        img: '',
        link: PROJECTROUTES.TQG3D
    },
    {
        name: 'Food Kiosk',
        description: 'Food kiosk react application',
        category: 'web',
        img: '',
        link: PROJECTROUTES.TQG3D
    },
    {
        name: 'Food Kiosk',
        description: 'Food kiosk react application',
        category: 'web',
        img: '',
        link: PROJECTROUTES.TQG3D
    },
    {
        name: 'Food Kiosk',
        description: 'Food kiosk react application',
        category: 'web',
        img: '',
        link: PROJECTROUTES.TQG3D
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
            {
                PROJECTS.map((project) => 
                     <ProjectItem><ProjectLink to={project.link}><Project name={project.name} description={project.description} img={project.img}/></ProjectLink></ProjectItem>
                )
            }
           
        </ProjectList>
    </PortfolioSection>
  )
}

export default Portfolios