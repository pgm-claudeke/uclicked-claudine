import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';
import SubTitle from '../Elements/SubTitle';
import myVid from '../../assets/portfolio/3d/QueensGambit/TQG.mp4';

import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

import YouTube, { YouTubeProps } from 'react-youtube';


const ProjectSection = styled.section`
    margin: 13rem 10rem 0rem 10rem;

    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const ProjectBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const InfoContainer = styled.div`
    height: 30rem;
    width: 50rem;
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 12px;

    padding: 5rem 5rem 5rem 12rem;
`;

const ProjectMain = styled.div`
    width: fit-content;
    border: white solid;
    position: relative;
    left: 10rem;
`;  

const ImageBox = styled.div`
    height: 26rem;
    width: fit-content;
`;

const Image = styled.img`
    height: 100%;
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
`;

const Description = styled.p`
    font-family: ${fontFamily.text};
    font-size: 1.2rem;
    line-height: 1.5;
`;

const Extras = styled.p`
    font-family: ${fontFamily.text};
    font-size: 1.2rem;
    line-height: 1.5;
`;

const ImageList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const ImageCol = styled.img`
`;



const ProjectPage = ({title, description, mainImage, mainVideoId, videoId, technologies, gitRepo, imageCollection, collectionHeight, collectionWidth}) => {

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
        <ProjectBox>
            <ProjectMain>
                { 
                    mainImage && <ImageBox><Image src={mainImage}/></ImageBox>
                }
                {
                    mainVideoId && <YouTube style={{border:'solid rgba(255,255,255, 0.1)'}} videoId={videoId} opts={opts} onReady={onPlayerReady}/>
                }
            </ProjectMain>
            <InfoContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <div style={{marginTop:'3rem'}}>
                    <Extras>Technologies: {technologies}</Extras>
                    <Extras>Github Repository: {gitRepo}</Extras>
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