import React from 'react';

import styled from 'styled-components';
import { Header, Footer, ProjectPage } from '../../../components';

import BustedTN from '../../../assets/portfolio/3d/Busted/thumbnail.png';

const Busted = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Busted"
        description="This 3D animation was made as an assignment for a school project. We were assigned to make a 3d character. Once the character was made, movements from mixamo were added to make a story."
        mainImage={BustedTN}
        videoId="gstmJYN1CHs" 
        technologies='cinema 4d, Mixamo'
        />
        <Footer/>
    </div>
  )
}

export default Busted