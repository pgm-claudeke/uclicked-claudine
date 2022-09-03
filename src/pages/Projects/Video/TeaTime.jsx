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
        description="This 3D poster/animation was made as an assignment for a school project. We were assigned to make a poster out of a movie or song title. Its purpose was to be creative with the letters and make them fit within its theme."
        mainImage={TeaTimeTN}
        videoId="tgZ6Kcm0UMA" 
        technologies='Premiere Pro and Audition'
        />
        <Footer/>
    </div>
  )
}

export default TeaTime