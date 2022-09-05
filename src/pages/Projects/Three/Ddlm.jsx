import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import DdlmTN from '../../../assets/portfolio/3d/DiaDeLosMuertos/DiaDeLosMuertos.png';

const Ddlm = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Dia de los muertos"
        description="This 3D poster and animation was made for the holiday dia de los muertos. The goal of this project was to get used to the tools of cinema 4d."
        mainImage={DdlmTN}
        videoId="uUpSXsULp40" 
        technologies='cinema 4D'
        />
        <Footer/>
    </div>
  )
}

export default Ddlm