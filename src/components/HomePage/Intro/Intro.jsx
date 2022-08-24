import React from 'react';
import styled from 'styled-components';
import TextIntro from './TextIntro';
import Portrait from './Portrait';

const IntroBox = styled.section`
    height: 100vh;
    margin: 2rem 12rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16rem;

    @media (min-width: 768px) and (max-width: 1024px) { 
        margin: 0rem 0rem;
        gap: 6rem;
        height: 40rem;
    }

    @media (max-width: 767px) {
        margin: 2rem 0rem;
        flex-direction: column-reverse;
        gap: 3rem;
    }
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