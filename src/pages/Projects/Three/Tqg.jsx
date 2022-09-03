import React from 'react';
import styled from 'styled-components';
import { Header, Footer, ProjectPage } from '../../../components';

import QueensGambit from '../../../assets/portfolio/3d/QueensGambit/TQG.jpg';

const Tqg = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="The Queen's Gambit"
        description="This 3D poster/animation was made as an assignment for a school project. We were assigned to make a poster out of a movie or song title. Its purpose was to be creative with the letters and make them fit within its theme."
        mainImage={QueensGambit}
        videoId="JYMIP98OGCM" 
        technologies='cinema 4d'
        />
        <Footer/>
    </div>
  )
}

export default Tqg