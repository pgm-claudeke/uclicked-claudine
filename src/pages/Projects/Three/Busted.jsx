import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import BustedTN from '../../../assets/portfolio/3d/Busted/thumbnail.png';

const Busted = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Busted"
        description="This 3D animation was made to practice the techniques on how to build a  3D character in cinema 4d. I made a small story with the character and applied movements from Mixamo to the character itself."
        mainImage={BustedTN}
        videoId="gstmJYN1CHs" 
        technologies='cinema 4D, Mixamo'
        />
        <Footer/>
    </div>
  )
}

export default Busted