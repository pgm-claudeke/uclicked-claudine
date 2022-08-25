import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../Elements/SubTitle';
import Specialization from './Specialization';
import { BiCube, BiSquare, BiCodeBlock, BiMoviePlay } from 'react-icons/bi';
import { AiOutlineAudio } from 'react-icons/ai';

const SpecializationsSection = styled.section`
    height: 100vh;
    max-height: 1400px;
    margin: 0 14rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1676px) {
        margin: 0rem 4rem;
    }

    @media (max-width: 1200px) {
        height: fit-content;
        margin: 0rem 4rem;
    }

    @media (max-width: 767px) {
        height: fit-content;
        margin: 5rem 0rem;
    }
`;

const SpecializationsContainer = styled.div`
    width: fit-content;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    position: relative;

    @media (max-width: 1200px) {
        margin: 0 auto;
        gap: 1rem;
        max-width: 700px;
    }

    @media (max-width: 767px) {
        margin: 0 auto;
        gap: 1rem;
        max-width: 480px;
    }
`;

const SPECIALIZATIONS = [
    {
        icon: <BiSquare/>,
        name: "2D motion",
        description: "",
        key: "two"
    },
    {
        icon: <BiCube/>,
        name: "3D motion",
        description: "",
        key: "three"
    },
    {
        icon: <BiCodeBlock/>,
        name: "Web development",
        description: "",
        key: "web"
    },
    {
        icon: <BiMoviePlay/>,
        name: "Video editing",
        description: "",
        key: "video"
    },
    {
        icon: <AiOutlineAudio/>, 
        name: "Audio editing",
        description: "",
        key: "audio"
    }
]


const Specializations = () => {
  return (
    <SpecializationsSection>
        <SpecializationsContainer>
            <SubTitle title="What I do" />
            {
                SPECIALIZATIONS.map((specialization) => 
                    <Specialization key={specialization.key} icon={specialization.icon} name={specialization.name} description={specialization.description}/>
                )
            }
        </SpecializationsContainer>
    </SpecializationsSection>
  )
}

export default Specializations