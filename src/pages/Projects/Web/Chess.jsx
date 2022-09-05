import React from 'react';
import { Header, Footer, ProjectPage } from '../../../components';

import ChessTN from '../../../assets/portfolio/web/ChessApp/thumbnail.png';
import ChessApp1 from '../../../assets/portfolio/web/ChessApp/ChessApp_1.png';
import ChessApp2 from '../../../assets/portfolio/web/ChessApp/ChessApp_2.png';
import ChessApp3 from '../../../assets/portfolio/web/ChessApp/ChessApp_3.png';
import ChessApp4 from '../../../assets/portfolio/web/ChessApp/ChessApp_4.png';
import ChessApp5 from '../../../assets/portfolio/web/ChessApp/ChessApp_5.png';
import ChessApp6 from '../../../assets/portfolio/web/ChessApp/ChessApp_6.png';
import ChessApp7 from '../../../assets/portfolio/web/ChessApp/ChessApp_7.png';
import ChessApp8 from '../../../assets/portfolio/web/ChessApp/ChessApp_8.png';

const Images = [
    {
        name: 'ChessApp1',
        src: ChessApp1
    },
    {
        name: 'ChessApp2',
        src: ChessApp2
    },
    {
        name: 'ChessApp3',
        src: ChessApp3
    },
    {
        name: 'ChessApp4',
        src: ChessApp4
    },
    {
        name: 'ChessApp5',
        src: ChessApp5
    },
    {
        name: 'ChessApp6',
        src: ChessApp6
    },
    {
        name: 'ChessApp7',
        src: ChessApp7
    },
    {
        name: 'ChessApp8',
        src: ChessApp8
    },
]

const Chess = () => {
  return (
    <div>
        <Header/>
        <ProjectPage 
        title="Chess"
        description="This is a prototype for a chess application. It is made for people who want to start learning how to play chess. The application will contain information about the game and pieces. Users will also be able to practice the game with others or on their own by solving some chess puzzles. You can share what you've learned and ask others for tips and tricks on the forum site."
        mainImage={ChessTN}
        videoId="" 
        imageCollection={Images}
        technologies='eleventy, scss'
        gitRepo='https://github.com/pgmgent-ui-prototyping/eleventy-sport-pgm-claudeke'
        />
        <Footer/>
    </div>
  )
}

export default Chess