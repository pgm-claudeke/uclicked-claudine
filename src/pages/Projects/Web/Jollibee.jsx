import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';
import JollibeeKiosk from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk.png';
import JollibeeKiosk01 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_01.png';
import JollibeeKiosk02 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_02.png';

const Images = [
    {
        name: 'JollibeeKiosk_01',
        src: JollibeeKiosk01
    },
    {
        name: 'JollibeeKiosk_02',
        src: JollibeeKiosk02
    }
]


const Jollibee = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Jollibee Food Kiosk"
        description="This food kiosk application was made as an assignment for a school project. We were assigned to make a food kiosk application from a food chain restaurant of our choice. The goal was to design the application and then turn it into a working react application."
        mainImage={JollibeeKiosk}
        technologies='node.js, react, css, framer-motion'
        imageCollection={Images}
        collectionWidth='80%'
        />
        <Footer/>
    </div>
  )
}

export default Jollibee