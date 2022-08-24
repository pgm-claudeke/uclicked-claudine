import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/styles';
import { FaInstagram, FaGithub, FaLinkedinIn, FaYoutube, FaVimeoV } from 'react-icons/fa';

const SideContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        align-items: left;
    }

    @media (max-width: 767px) {
        justify-content: center;
        align-items: center;
    }
`;

const Title = styled.h2`
    display: flex;
    flex-direction: row;

    font-family: 'Acumin Pro Black';
    font-size: 5rem;

    @media (max-width: 1024px) {
        font-size: 2.8rem;
    }

    @media (max-width: 767px) {
        font-size: 2.2rem;
    }
`;

const Marked = styled.p`
    font-family: 'Acumin Pro Black';
    font-size: 5rem;
    background: -webkit-linear-gradient(-45deg, ${colors.secondary}, ${colors.primary}, ${colors.primaryDarker});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    color: ${colors.primary};
    margin-left: 0.8rem;

    @media (max-width: 1024px) {
        font-size: 2.8rem;
    }

    @media (max-width: 767px) {
        font-size: 2.2rem;
    }
`;

const Description = styled.p`
    font-size: 1.5rem;
    width: 21rem;
    line-height: 1.5;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
        text-align: left;
        width: 17rem;
    }

    @media (max-width: 767px) {
        font-size: 1rem;
        text-align: center;
    }
`;

const MediaList = styled.div`
    margin-top: 1.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${colors.primaryTrans};
    width: fit-content;
    padding 0.5rem 1rem;
    border-radius: 8px;

    @media (max-width: 767px) {
        margin-top: 1rem;
        border-radius: 4px;
        gap: 1.5rem;
    }
`;

const SocialIcon = styled.a`
    font-size: 1.2rem;

    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

const TextIntro = () => {
  return (
    <SideContainer>
        <Title>Hello,</Title>
        <Title>I am <Marked> Claudine</Marked></Title>
        <Description>
            A multimedia artist specialized in many different aspects.
        </Description>
        <MediaList>
            <SocialIcon href='https://github.com/pgm-claudeke'><FaGithub/></SocialIcon>
            <SocialIcon href='https://www.instagram.com/claudine_dekesel/'><FaInstagram/></SocialIcon>
            <SocialIcon href='https://www.linkedin.com/in/claudine-de-kesel-701659174/'><FaLinkedinIn/></SocialIcon>
            <SocialIcon href=''><FaYoutube/></SocialIcon>
            <SocialIcon href='https://vimeo.com/user95018657'><FaVimeoV/></SocialIcon>
        </MediaList>
    </SideContainer>
  )
}

export default TextIntro