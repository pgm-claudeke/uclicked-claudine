import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import Logo from '../../../assets/portfolio/video/Haunted/Logo.png';

const Haunted = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Haunted"
        description="Haunted is a short horror movie that I made for my bachelor's thesis. My thesis was about the characteristics of horror movies. I wrote the script and applied what I learned. The story is about someone's conscience that keeps haunting him."
        mainImage={Logo}
        videoId="OfZ1ThfB-40" 
        technologies='Premiere Pro, Audition'
        />
        <Footer/>
    </div>
  )
}

export default Haunted