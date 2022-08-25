import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/styles';
import SubTitle from '../../Elements/SubTitle';
import { 
    SiAdobeaftereffects, 
    SiAdobeaudition, 
    SiAdobeillustrator, 
    SiAdobeindesign, 
    SiAdobephotoshop, 
    SiAdobepremierepro,
    SiAdobexd,
    SiReact,
    SiNodedotjs,
    SiCss3,
    SiJavascript,
    SiEleventy,
    SiHandlebarsdotjs,
    SiSass,
    SiCinema4D
} from 'react-icons/si';

const SkillsSection = styled.section`
    height: 100vh;
    max-height: 1400px;
    margin: 10rem 14rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        height: fit-content;
        margin: 12rem 4rem;
    }

    @media (max-width: 767px) {
        height: fit-content;
        margin: 10rem 0rem;
    }
`;

const SkillsBox = styled.ul`
    height: fit-content;
    width: 100%; 
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 30px;
    padding: 5rem 4rem;

    position: relative;

    @media (max-width: 1676px) {
        max-width: 1300px;
    }

    @media (max-width: 1200px) {
        height: fit-content;
        width: fit-content;
        max-width: 700px;
        padding: 2rem;
        border-radius: 12px;

        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 767px) {
        height: fit-content;
        width: fit-content;
        max-width: 480px;
        padding: 1rem;
        border-radius: 12px;

        flex-direction: column;
        gap: 1rem;
    }
`;

const SkillList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: center;
    gap: 6rem;

    @media (max-width: 1676px) {
        gap: 3.8rem;
    }

    @media (max-width: 1200px) {
        gap: 2rem;
    }
    
    @media (max-width: 767px) {
        gap: 2rem;
        padding: 0.5rem;
    }
`;

const SkillIcon = styled.li`
    font-size: 4.5rem;

    @media (max-width: 1676px) {
        font-size: 3.8rem;
    }

    @media (max-width: 1200px) {
        font-size: 2.4rem;
    }

    @media (max-width: 767px) {
        font-size: 2rem;
    }
`;

export const Skills = () => {
  return (
    <SkillsSection>
        <SkillsBox>
            <SubTitle title='Skills'/>
            <SkillList>
                <SkillIcon><SiAdobeaftereffects/></SkillIcon>
                <SkillIcon><SiAdobeaudition/></SkillIcon>
                <SkillIcon><SiAdobeillustrator/></SkillIcon>
                <SkillIcon><SiAdobeindesign/></SkillIcon>
                <SkillIcon><SiAdobephotoshop/></SkillIcon>
                <SkillIcon><SiAdobepremierepro/></SkillIcon>
                <SkillIcon><SiAdobexd/></SkillIcon>
                <SkillIcon><SiCinema4D/></SkillIcon>
                <SkillIcon><SiReact/></SkillIcon>
                <SkillIcon><SiNodedotjs/></SkillIcon>
                <SkillIcon><SiCss3/></SkillIcon>
                <SkillIcon><SiJavascript/></SkillIcon>
                <SkillIcon><SiEleventy/></SkillIcon>
                <SkillIcon><SiHandlebarsdotjs/></SkillIcon>
                <SkillIcon><SiSass/></SkillIcon>
            </SkillList>
        </SkillsBox>
    </SkillsSection>
  )
}
