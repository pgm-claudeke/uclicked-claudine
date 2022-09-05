import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import JollibeeKiosk from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_1.png';
import JollibeeKiosk01 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_2.png';
import JollibeeKiosk02 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_3.png';
import JollibeeKiosk03 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_4.png';
import JollibeeKiosk04 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_5.png';
import JollibeeKiosk05 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_6.png';
import JollibeeKiosk06 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_7.png';
import JollibeeKiosk07 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_8.png';
import JollibeeKiosk08 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_9.png';
import JollibeeKiosk09 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_10.png';
import JollibeeKiosk10 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_11.png';
import JollibeeKiosk11 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_12.png';
import JollibeeKiosk12 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_13.png';
import JollibeeKiosk13 from '../../../assets/portfolio/web/JollibeeKiosk/JollibeeKiosk_14.png';

const Images = [
    {
        name: 'JollibeeKiosk',
        src: JollibeeKiosk
    },
    {
        name: 'JollibeeKiosk_01',
        src: JollibeeKiosk01
    },
    {
        name: 'JollibeeKiosk_02',
        src: JollibeeKiosk02
    },
    {
        name: 'JollibeeKiosk_03',
        src: JollibeeKiosk03
    },
    {
        name: 'JollibeeKiosk_04',
        src: JollibeeKiosk04
    },
    {
        name: 'JollibeeKiosk_05',
        src: JollibeeKiosk05
    },
    {
        name: 'JollibeeKiosk_06',
        src: JollibeeKiosk06
    },
    {
        name: 'JollibeeKiosk_07',
        src: JollibeeKiosk07
    },
    {
        name: 'JollibeeKiosk_08',
        src: JollibeeKiosk08
    },
    {
        name: 'JollibeeKiosk_09',
        src: JollibeeKiosk09
    },
    {
        name: 'JollibeeKiosk_10',
        src: JollibeeKiosk10
    },
    {
        name: 'JollibeeKiosk_011',
        src: JollibeeKiosk11
    },
    {
        name: 'JollibeeKiosk_12',
        src: JollibeeKiosk12
    },
    {
        name: 'JollibeeKiosk_13',
        src: JollibeeKiosk13
    }

]


const Jollibee = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Jollibee Food Kiosk"
        description="This food kiosk application was made as an idea for a food chain. In this prototype, I used Jollibee as an example of what the application would look like and how it works."
        mainImage={JollibeeKiosk}
        technologies='node.js, react, css, framer-motion'
        imageCollection={Images}
        gitRepo='https://github.com/pgm-claudeke/eindopdracht-food-kiosk'
        />
        <Footer/>
    </div>
  )
}

export default Jollibee