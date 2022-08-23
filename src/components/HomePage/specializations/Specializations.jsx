import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../Elements/SubTitle';
import Specialization from './Specialization';
import { BiCube, BiSquare, BiCodeBlock, BiMoviePlay } from 'react-icons/bi';
import { AiOutlineAudio } from 'react-icons/ai';

const SpecializationsSection = styled.section`
    height: 100vh;
    margin: 0 14rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        height: fit-content;
        margin: 5rem 0rem;
    }
`;

const SpecializationsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    position: relative;

    @media (max-width: 767px) {
        margin: 0 auto;
        gap: 1rem;
    }
`;

const SPECIALIZATIONS = [
    {
        icon: <BiSquare/>,
        name: "2D motion",
        description: ""
    },
    {
        icon: <BiCube/>,
        name: "3D motion",
        description: ""
    },
    {
        icon: <BiCodeBlock/>,
        name: "Web development",
        description: ""
    },
    {
        icon: <BiMoviePlay/>,
        name: "Video editing",
        description: ""
    },
    {
        icon: <AiOutlineAudio/>,
        name: "Audio editing",
        description: ""
    }
]


const Specializations = () => {
  return (
    <SpecializationsSection>
        <SpecializationsContainer>
            <SubTitle title="What I do" />
            {
                SPECIALIZATIONS.map((specialization) => 
                    <Specialization icon={specialization.icon} name={specialization.name} description={specialization.description}/>
                )
            }
        </SpecializationsContainer>
    </SpecializationsSection>
  )
}

export default Specializations