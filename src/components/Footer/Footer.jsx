import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaGithub, FaLinkedinIn, FaYoutube, FaVimeoV } from 'react-icons/fa';
import { colors } from '../../constants/styles';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom';

const FooterBox = styled.div`
    width: 100vw;
    padding: 3rem 5rem;
    background: ${colors.primaryDarker};
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(72,199,240,0.2) 70%, rgba(72,199,240,0.4) 100%);

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8rem;

    margin:

    opacity: 0.6;
    font-size: 1.2rem;
`;

const Logo = styled.p `
    font-family: 'Maven Pro Black';
    font-size: 1.5rem;

    background-color: transparent;
`;

const Description = styled.p`
    font-size: 1rem;
    opacity: 0.5;
    line-height: 1.5;
`;

const Title = styled.p`
    font-size: 1.2rem;
    font-family: 'Acumin Pro Black';  
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;  
`;

const NavList = styled.ul `
    list-style: none;
    
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    background-color: transparent;
`;

const NavItem = styled.li `

`;

const NavLink = styled(Link)`
    font-size: 1rem;
    text-decoration: none;

    :hover {
        color: ${colors.primary};
        cursor: pointer;
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const SocialIcon = styled.a`
    :hover {
        color: ${colors.primary}
    }
`;



const Footer = () => {
  return (
    <FooterBox>
        <div>
            <Logo>Uclicked.</Logo>
            <Description>made by Claudine</Description>
        </div>
        <div>
            <Title>Menu</Title>
            <NavList>
                <NavItem><NavLink to={ROUTES.HOME}>Home</NavLink></NavItem>
                <NavItem><NavLink to={ROUTES.PORTFOLIO}>Portfolio</NavLink></NavItem>
                <NavItem><NavLink to={ROUTES.CONTACT}>Contact</NavLink></NavItem>
            </NavList>
        </div>
        <div>
            <Title>Socials</Title>
            <SocialsContainer>
                <SocialIcon href='https://github.com/pgm-claudeke'><FaGithub/></SocialIcon>
                <SocialIcon href='https://www.instagram.com/claudine_dekesel/'><FaInstagram/></SocialIcon>
                <SocialIcon href='https://www.linkedin.com/in/claudine-de-kesel-701659174/'><FaLinkedinIn/></SocialIcon>
                <SocialIcon href=''><FaYoutube/></SocialIcon>
                <SocialIcon href='https://vimeo.com/user95018657'><FaVimeoV/></SocialIcon>
            </SocialsContainer>
        </div>
    </FooterBox>
  )
}

export default Footer