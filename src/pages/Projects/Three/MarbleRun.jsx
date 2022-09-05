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
        description="This 3D animation was made for video mapping. I got a base of cubes where the mapping would be and made a marble run that connects all the cubes together."
        mainImage={MarbleRunTN}
        videoId="lwMZ9LGjxSo" 
        technologies='cinema 4D'
        />
        <Footer/>
    </div>
  )
}

export default MarbleRun