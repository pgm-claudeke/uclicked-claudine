import React from 'react';
import styled from "styled-components";
import { ROUTES } from '../../constants/routes';
import { colors } from '../../constants/styles';
import { Link } from 'react-router-dom';

const HeaderBox = styled.header `
    padding: 3rem 5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 12vh;
    width: 100vw;

    position: fixed;
    top: 0;
    z-index: 1;

    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,6,18,1) 100%);  
`;

const NavList = styled.ul `
    list-style: none;
    
    display: flex;
    flex-direction: row;
    gap: 5rem;

    background-color: transparent;
`;

const NavItem = styled.li `

`;

const NavLink = styled(Link)`
    font-size: 1.2rem;
    font-family: 'Acumin Pro Black';
    text-decoration: none;

    :hover {
        color: ${colors.primary};
        cursor: pointer;
    }
`;

const SelectedNav = styled.li `
    font-size: 1.2rem;
    font-family: 'Acumin Pro Black';
    position: relative;

    background-color: transparent;
    
    :after {
        content : "";
        position : absolute;
        width : 100%;
        height : 4px;
        background-color: ${colors.primary};
        bottom: 0; 
        left: 0;
        margin: -0.5rem 0rem;
    }
`;

const Logo = styled.p `
    font-family: 'Maven Pro Black';
    font-size: 2.5rem;

    background-color: transparent;
`;


const Header = () => {
  return (
    <HeaderBox>
        <Logo>Uclicked.</Logo>
        <NavList>
            <NavItem><NavLink to={ROUTES.HOME}>Home</NavLink></NavItem>
            <NavItem><NavLink to={ROUTES.PORTFOLIO}>Portfolio</NavLink></NavItem>
            <NavItem><NavLink to={ROUTES.CONTACT}>Contact</NavLink></NavItem>
        </NavList>
    </HeaderBox>
  )
}

export default Header