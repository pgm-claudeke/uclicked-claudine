import React from 'react';
import { Header, Intro, Specializations, Skills, Footer } from '../components';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
        <Header/>
        <div  style={{margin:'0rem 1.5rem'}}>
            <Intro/>
            <Specializations/>
            <Skills/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home