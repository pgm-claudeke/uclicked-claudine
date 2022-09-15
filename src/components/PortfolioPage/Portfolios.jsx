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
import TeaTime from '../../assets/portfolio/video/TeatTime/thumbnail.png';
import BathTime from '../../assets/portfolio/video/BathTime/thumbnail.png';
import ChessApp from '../../assets/portfolio/web/ChessApp/thumbnail.png';
import Haunted from'../../assets/portfolio/video/Haunted/thumbnail.png';
import DiaDeLosMuertos from '../../assets/portfolio/3d/DiaDeLosMuertos/thumbnail.png';
import TheChase from '../../assets/portfolio/3d/TheChase/thumbnail.png';

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
        key: 'JFK',
        description: 'Food kiosk react application',
        category: 'web',
        img: JollibeeKiosk,
        link: PROJECTROUTES.JOLLIBEEWEB,
        year: '2022'
    },    
    {
        name: 'Chess',
        key: 'Chess',
        description: 'Chess Game website',
        category: 'web',
        img: ChessApp,
        link: PROJECTROUTES.CHESSWEB,
        year: '2022'
    },
    {
        name: 'Haunted',
        key: 'Haunted',
        description: 'Short horror movie',
        category: 'video',
        img: Haunted,
        link: PROJECTROUTES.HAUNTED,
        year: ''
    },
    {
        name: 'The Queen\'s Gambit',
        key: 'TQG',
        description: '3D Poster and animation',
        category: '3d',
        img: QueensGambit,
        link: PROJECTROUTES.TQG3D,
        year: '2020'
    },

    {
        name: 'Busted',
        key: 'Busted',
        description: '3D character animation',
        category: '3d',
        img: Busted,
        link: PROJECTROUTES.BUSTED3D,
        year: '2020'
    },
    {
        name: 'Marble Run',
        key: 'MarbleRun',
        description: '3D marble run animation',
        category: '3d',
        img: MarbleRun,
        link: PROJECTROUTES.MARBLERUN3D,
        year: '2021'
    },
    {
        name: 'Dia de los muertos',
        key: 'DDLM',
        description: '3D poster and animation',
        category: '3d',
        img: DiaDeLosMuertos,
        link: PROJECTROUTES.DDLM3D,
        year: '2020'
    },
    {
        name: 'The Chase',
        key: 'TheChase',
        description: '3D chase animation',
        category: '3d',
        img: TheChase,
        link: PROJECTROUTES.CHASE3D,
        year: '2020'
    },
    {
        name: 'Tea Time',
        key: 'TeaTime',
        description: 'Short horror movie',
        category: 'video',
        img: TeaTime,
        link: PROJECTROUTES.TEATIME,
        year: ''
    },

]

/*const LATER = [
    {
        name: 'First Graffiti',
        key: 'FirsGraf',
        description: 'Hyperlapse/time-laps video',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
    {
        name: 'Where It Began',
        key: 'WIB',
        description: 'Short documentary about James Gillespie',
        category: 'video',
        img: '',
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
    {
        name: 'Bath Time',
        key: 'BathTime',
        description: 'Short horror comedy movie',
        category: 'video',
        img: BathTime,
        link: PROJECTROUTES.TQG3D,
        year: ''
    },
]*/

const Portfolios = () => {
    const [filterCategory, setFilterCategory] = useState(null);

    let collection
    
    if (filterCategory) {
        collection = PROJECTS.filter(project => project.category === filterCategory);
    } else {
        collection = PROJECTS
    }

    const handleFilter = (e) => {
        console.log(e.target.value);
        const filter = e.target.value.toLowerCase()
        setFilterCategory(filter);

        if (filter === 'all') {
            setFilterCategory(null);
        }
      };

      console.log(collection)

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
                collection.map((project) => 
                     <ProjectItem key={project.key}><ProjectLink to={project.link} ><Project name={project.name} description={project.description} img={project.img}/></ProjectLink></ProjectItem>
                )
            }
           
        </ProjectList>
        </ProjectsContainer>
    </PortfolioSection>
  )
}

export default Portfolios