import React from 'react';
import styled from 'styled-components';
import TextIntro from './TextIntro';
import Portrait from './Portrait';

const IntroBox = styled.section`
    height: 100vh;
    margin-top: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 18rem;
`

const Intro = () => {
  return (
    <IntroBox>
        <TextIntro></TextIntro>
        <Portrait></Portrait>
    </IntroBox>
  )
}

export default Intro