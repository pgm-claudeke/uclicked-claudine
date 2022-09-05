import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import QueensGambit from '../../../assets/portfolio/3d/QueensGambit/TQG.jpg';

const Tqg = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="The Queen's Gambit"
        description="This 3D poster/animation was made based on a netflix series. The goal was to be creative with the letters and make them fit within its theme."
        mainImage={QueensGambit}
        videoId="JYMIP98OGCM" 
        technologies='cinema 4D'
        />
        <Footer/>
    </div>
  )
}

export default Tqg