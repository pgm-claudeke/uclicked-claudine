import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import QueensGambit from '../../../assets/portfolio/3d/QueensGambit/TQG.jpg';

const Haunted = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Haunted"
        description="Haunted is a short horror movie that I made for my bachelor's thesis. My thesis was about characteristics of horror movies. I wrote the script and applied what I've learned. The story is about someone conscience that keeps haunting him."
        mainImage={QueensGambit}
        videoId="OfZ1ThfB-40" 
        technologies='Premiere Pro, Audition'
        />
        <Footer/>
    </div>
  )
}

export default Haunted