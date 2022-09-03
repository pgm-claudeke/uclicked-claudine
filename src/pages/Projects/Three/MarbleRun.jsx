import React from 'react';

import styled from 'styled-components';
import { Header, Footer, ProjectPage } from '../../../components';

import MarbleRunTN from '../../../assets/portfolio/3d/MarbleRun/thumbnail.png';

const MarbleRun = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Marble Run"
        description="This 3D animation was made as an assignment for a school project. We were assigned to make a 3d animation for video mapping."
        mainImage={MarbleRunTN}
        videoId="lwMZ9LGjxSo" 
        technologies='cinema 4d'
        />
        <Footer/>
    </div>
  )
}

export default MarbleRun