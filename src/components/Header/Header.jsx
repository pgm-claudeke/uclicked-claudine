import React from "react";
import styled from "styled-components";
import { ROUTES } from "../../constants/routes";
import { colors } from "../../constants/styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const HeaderBox =  styled.header` 
    width: 100%;  
    max-width: 1800px;

    position: fixed;
    top: 0;
    z-index: 1;
`;

const HeaderContainer = styled.div`
  padding: 3rem 5rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 6, 18, 1) 100%
  );

  @media (max-width: 1656px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 1200px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 767px) {
    padding: 1.5rem 1.6rem;
  }
`;

const NavList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: row;
  gap: 5rem;

  background-color: transparent;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-family: "Acumin Pro Black";
  text-decoration: none;

  :hover {
    color: ${colors.primary};
    cursor: pointer;
  }

  @media (min-width: 767px) and (max-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const NavBurger = styled.button`
  background-color: transparent;
  border: none;
  display: none;

  @media (max-width: 1200px) {
    display: block;
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
    display: block;
  }
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  right: 2.5rem;

  text-align: right;

  @media (min-width: 767px) and (max-width: 1200px) {
    font-size: 3rem;
  }
`;

const NavPopUp = styled(motion.div)`
  height: fit-content;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 2.5rem;

  border-radius: 0 0 30px 30px;

  background: ${colors.primaryDarker};
  background: linear-gradient(45deg, rgba(0, 6, 18, 1), rgba(72,199,255,1));

  @media (min-width: 767px) and (max-width: 1200px) {
    padding: 4rem 6rem;
  }
`;

const PopUpList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style: none;

  @media (min-width: 767px) and (max-width: 1200px) {
    gap: 2rem;
  }
`;

const Logo = styled(Link)`
  font-family: "Maven Pro Black";
  font-size: 2.5rem;
  text-decoration: none;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const Header = () => {
  const [popUp, setPopUp] = useState(false);

  const handleOpen = () => {
    setPopUp(true);
  };

  const handleClose = () => {
    setPopUp(false);
  };

  console.log(popUp);

  return (
    <HeaderBox>
        <HeaderContainer>

          <Logo to={ROUTES.HOME}>Uclicked.</Logo>

          <NavList>
            <NavItem>
              <NavLink to={ROUTES.HOME}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={ROUTES.PORTFOLIO}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
            </NavItem>
          </NavList>

          <NavBurger onClick={handleOpen}>
            <GiHamburgerMenu />
          </NavBurger>
          {
            popUp && 
            <NavPopUp initial={{y: '-20rem'}} animate={{y: 0}} transition={{type: "spring", damping: 20, bounce: 0.8, mass: 0.95, ease: 'easeOut'}}>
                <CloseBtn onClick={handleClose}>
                    <IoClose/>
                </CloseBtn>
                <PopUpList>
                    <NavItem>
                        <NavLink to={ROUTES.HOME}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={ROUTES.PORTFOLIO}>Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
                    </NavItem>
                </PopUpList>
            </NavPopUp>
          }    

        </HeaderContainer>
    </HeaderBox>
  );
};

export default Header;
