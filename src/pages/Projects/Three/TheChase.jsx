import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import thumbnail from '../../../assets/portfolio/3d/TheChase/thumbnail.png';

const TheChase = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="The Chase"
        description="This 3D animation was made to practice the movements in cinema 4d. I got a base movement where I had to make a chase scene from."
        mainImage={thumbnail}
        videoId="n2JJuoUeEEM" 
        technologies='cinema 4d'
        />
        <Footer/>
    </div>
  )
}

export default TheChase