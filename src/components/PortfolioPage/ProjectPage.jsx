import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import "../../../node_modules/video-react/dist/video-react.css";
import { ROUTES } from '../../constants/routes';

import YouTube, { YouTubeProps } from 'react-youtube';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';



const ProjectSection = styled.section`
    margin: 13rem 10rem 0rem 10rem;

    display: flex;
    flex-direction: column;

    @media (min-width: 768px) and (max-width: 1200px) { 
        margin: 6rem 4rem 0rem 4rem;
    }

    @media (max-width: 767px) {
        margin: 6rem 2rem 0rem 2rem;
    }
`;

const ProjectBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5rem;

    @media (min-width: 768px) and (max-width: 1200px) { 
        flex-direction: column;
        margin-bottom: 2rem;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        margin-bottom: 1.5rem;
    }
`;

const InfoContainer = styled.div`
    height: fit-content;
    min-height: 30rem;
    width: 50rem;
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 12px;

    padding: 5rem 5rem 5rem 12rem;

    @media (max-width: 1656px) {
        height: fit-content;
        padding: 5rem 5rem 5rem 8rem;
    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        width: 100%;
        height: fit-content;
        border-radius: 7px;
        padding: 5rem 2rem 2rem 2rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: fit-content;
        border-radius: 7px;
        padding: 5rem 2rem 2rem 2rem;
    }
`;

const ProjectMain = styled.div`
    width: fit-content;
    border: white solid;
    border-radius: 12px;
    overflow: hidden;

    position: relative;
    left: 10rem;
    
    @media (max-width: 1656px) {
        left: 6rem;
    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        left: 0;
        top: 2rem;
    }

    @media (max-width: 767px) {
        left: 0;
        top: 2rem;
    }
`;  

const ImageBox = styled.div`
    height: 26rem;
    width: fit-content;

    @media (max-width: 1656px) {
    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        height: 20rem;
        width: fit-content; 
    }

    @media (max-width: 767px) {
        height: 16rem;
        width: fit-content; 
    }
`;

const Image = styled.img`
    height: 100%;
    object-fit: cover;
    left: 50%;

    @media (max-width: 1656px) {
    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        
    }

    @media (max-width: 767px) {
        height: 16rem;
        width: fit-content;
    }
`;

const ProjectItems = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Title = styled.p`
    font-family: ${fontFamily.title};
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) and (max-width: 1200px) { 
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 767px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

const Description = styled.p`
    font-family: ${fontFamily.text};
    font-size: 1.2rem;
    line-height: 1.5;

    @media (min-width: 768px) and (max-width: 1200px) { 
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

const Extras = styled.p`
    font-family: ${fontFamily.text};
    font-size: 1.2rem;
    line-height: 1.5;

    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

const GitRepo = styled.a`

`;

const ImageList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
`;

const ImageCol = styled.img`
    width: 20rem;
    border-radius: 12px;

    @media (max-width: 767px) {
        width: 100%;
        border-radius: 7px;
    }
`;

const BackBtn = styled(Link)`
    background-color: transparent;
    border: none;
    color: ${colors.secondary};
    font-size: 2rem;
    width: fit-content;
`;


const ProjectPage = ({title, description, mainImage, mainVideoId, videoId, technologies, gitRepo, imageCollection, collectionHeight, collectionWidth, link}) => {
    console.log(window.innerWidth)

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

      const opts: YouTubeProps['opts'] = {
        height: '500',
        width: '900',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      console.log(imageCollection)

  return (
    <ProjectSection>
        <BackBtn to={ROUTES.PORTFOLIO}><FiArrowLeft/></BackBtn>
        <ProjectBox>
            <ProjectMain>
                { 
                    mainImage && <ImageBox><Image src={mainImage}/></ImageBox>
                }
            </ProjectMain>
            <InfoContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <div style={{marginTop:'3rem'}}>
                    <Extras>Technologies: {technologies}</Extras>
                    {
                        gitRepo && <Extras><GitRepo href={gitRepo}>Github Repository</GitRepo></Extras>
                    }
                </div>
            </InfoContainer>
        </ProjectBox>
        <ProjectItems>
            {
                videoId && <YouTube style={{border:'solid rgba(255,255,255, 0.1)'}} videoId={videoId} opts={opts} onReady={onPlayerReady}/>
            }
            {
                imageCollection && 
                <ImageList>
                    {imageCollection.map((image) => <ImageCol style={{height:collectionHeight, width:collectionWidth}} src={image.src}/>)}
                </ImageList>
            }
        </ProjectItems>
    </ProjectSection>
  )
}

export default ProjectPage