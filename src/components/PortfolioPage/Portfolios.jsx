import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import SubTitle from '../Elements/SubTitle';
import Project from './Project';
import { Link } from "react-router-dom";
import { PROJECTROUTES } from '../../constants/routes';

import QueensGambit from '../../assets/portfolio/3d/QueensGambit/thumbnail.png';
import JollibeeKiosk from '../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_3.png';
import Busted from '../../assets/portfolio/3d/Busted/thumbnail.png';
import MarbleRun from '../../assets/portfolio/3d/MarbleRun/thumbnail.png';
import TeaTime  from '../../assets/portfolio/video/TeatTime/thumbnail.png';
import BathTime  from '../../assets/portfolio/video/BathTime/thumbnail.png';
import ChessApp  from '../../assets/portfolio/web/ChessApp/thumbnail.png';

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
        name: 'Jollibee Food Kiosk',
        description: 'Food kiosk react application',
        category: 'web',
        img: JollibeeKiosk,
        link: PROJECTROUTES.JOLLIBEEWEB,
        year: '2022'
    },    
    {
        name: 'Chess App',
        description: 'Chess Game Application',
        category: 'web',
        img: ChessApp,
        link: PROJECTROUTES.TQG3D,
        year: '2022'
    },
    {
        name: 'Haunted',
        description: 'Short horror movie',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
    {
        name: 'The Queen\'s Gambit',
        description: '3D Poster and animation',
        category: '3d',
        img: QueensGambit,
        link: PROJECTROUTES.TQG3D,
        year: '2020'
    },

    {
        name: 'Busted',
        description: '3D character animation',
        category: 'three',
        img: Busted,
        link: PROJECTROUTES.BUSTED3D,
        year: '2020'
    },
    {
        name: 'Marble Run',
        description: '3D marble run animation',
        category: 'three',
        img: MarbleRun,
        link: PROJECTROUTES.MARBLERUN3D,
        year: '2021'
    },
    {
        name: 'Dia de los muertos',
        description: '3D poster and animation',
        category: 'three',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: '2020'
    },
    {
        name: 'The Chase',
        description: '3D chase animation',
        category: 'three',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: '2020'
    },
    {
        name: 'Bath Time',
        description: 'Short horror comedy movie',
        category: 'video',
        img: BathTime,
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
    {
        name: 'Tea Time',
        description: 'Short horror movie',
        category: 'video',
        img: TeaTime,
        link: PROJECTROUTES.TEATIME,
        year: ''
    },
    {
        name: 'First Graffiti',
        description: 'Hyperlapse/time-laps video',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
    {
        name: 'Entrepreneur during corona',
        description: 'Short documentary about an entrepreneur during covid',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
    {
        name: 'Where It Began',
        description: 'Short documentary about James Gillespie',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
]

const Portfolios = () => {
    const [filter, setFilter] = useState(null);

    const handleFilter = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value.toLowerCase());
      };

  return (
    <PortfolioSection>
        <FilterBox>
            <SubTitle title='Portfolio'/>
            <FilterBtn onClick={handleFilter} value='all'>All</FilterBtn>
            <FilterBtn onClick={handleFilter} value='web'>Web</FilterBtn>
            <FilterBtn onClick={handleFilter} value='video'>Video</FilterBtn>
            <FilterBtn onClick={handleFilter} value='2d'>2D</FilterBtn>
            <FilterBtn onClick={handleFilter} value='3d'>3D</FilterBtn>
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