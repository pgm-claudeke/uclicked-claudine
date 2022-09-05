import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import thumbnail from '../../../assets/portfolio/3d/TheChase/thumbnail.png';

const TheChase = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="The Chase"
        description="This 3D animation was made to practice the movements in cinema 4D. Base movements were delivered and I had to make a chase scene out of it."
        mainImage={thumbnail}
        videoId="n2JJuoUeEEM" 
        technologies='cinema 4D'
        />
        <Footer/>
    </div>
  )
}

export default TheChase