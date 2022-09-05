import React from 'react';
import styled from 'styled-components';
import { Header, Footer, ProjectPage } from '../../../components';

import TeaTimeTN from '../../../assets/portfolio/video/TeatTime/thumbnail.png';

const TeaTime = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="The Queen's Gambit"
        description="This is a story about two children playing tea time while having a ritual. The goal of this project was to stack sounds and make them a whole."
        mainImage={TeaTimeTN}
        videoId="tgZ6Kcm0UMA" 
        technologies='Premiere Pro and Audition'
        />
        <Footer/>
    </div>
  )
}

export default TeaTime