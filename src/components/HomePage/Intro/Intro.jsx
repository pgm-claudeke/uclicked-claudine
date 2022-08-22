import React from 'react';
import styled from 'styled-components';
import TextIntro from './TextIntro';
import Portrait from './Portrait';
import Square from '../../Elements/Square';

const IntroBox = styled.section`
    height: 100vh;
    margin: 2rem 12rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16rem;

    @media (min-width: 768px) and (max-width: 1024px) { 

    }

    @media (max-width: 767px) {
        margin: 2rem 0rem;

        flex-direction: column-reverse;
        gap: 2rem;
    }
`;

const BackGround = styled.div`
    position: absolute;
    opacity: 0.2;
`;

const Intro = () => {
  return (
    <IntroBox>
        <TextIntro></TextIntro>
        <Portrait></Portrait>
    </IntroBox>
  )
}

export default Intro