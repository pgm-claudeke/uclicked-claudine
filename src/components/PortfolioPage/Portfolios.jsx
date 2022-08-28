import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import SubTitle from '../Elements/SubTitle';
import Project from './Project';
import { Link } from "react-router-dom";
import { PROJECTROUTES } from '../../constants/routes';

import ThreeTN from '../../assets/portfolio/3d/QueensGambit/3d-QG-TN.png';

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

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const ProjectList = styled.ul`
    list-style: none;
    width: fit-content;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media (max-width: 1656px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ProjectItem = styled.li`
`;

const ProjectLink = styled(Link)`
`;


const PROJECTS = [
    {
        name: 'The Queens Gambit',
        description: '3D Poster and animation',
        category: '3d',
        img: ThreeTN,
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Food Kiosk',
        description: 'Food kiosk react application',
        category: 'web',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Chess App',
        description: 'Chess Game Application',
        category: 'web',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Busted',
        description: '3D character animation',
        category: 'three',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Dia de los muertos',
        description: '3D poster and animation',
        category: 'three',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Isometric Design',
        description: '3D isometric design based on the series "stranger things"',
        category: 'three',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'The Chase',
        description: '3D chase animation',
        category: 'three',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Bath Time',
        description: 'Short horror comedy movie',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Tea Time',
        description: 'Short horror movie',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Marble Run',
        description: '3D marble run animation',
        category: 'three',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Canon 200d Tutorial',
        description: 'Tutorial video about the canon 200d camera',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'First Graffiti',
        description: 'Hyperlapse/time-laps video',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Haunted',
        description: 'Short horror movie',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Where It Began',
        description: 'Short documentary about James Gillespie',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
    },
    {
        name: 'Independent during corona',
        description: 'Short documentary an independent entrepreneur',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        date: ''
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
        <ProjectsContainer>
        <ProjectList>
            {
                PROJECTS.map((project) => 
                     <ProjectItem><ProjectLink to={project.link}><Project name={project.name} description={project.description} img={project.img}/></ProjectLink></ProjectItem>
                )
            }
           
        </ProjectList>
        </ProjectsContainer>
    </PortfolioSection>
  )
}

export default Portfolios