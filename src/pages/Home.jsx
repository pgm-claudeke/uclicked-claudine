import React from 'react';
import { Header, Intro, Specializations, Skills, Footer } from '../components';
import styled from 'styled-components';


const SecOne = styled.section`
    display: flex;
    flex-direction: row; 
`;


const Home = () => {
  return (
    <div>
        <Header/>
        <Intro/>
        <Specializations/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Home