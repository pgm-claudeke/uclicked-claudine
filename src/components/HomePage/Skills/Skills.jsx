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
    SiSass
} from 'react-icons/si';

const SkillsSection = styled.section`
    height: 100vh;
    margin: 0rem 14rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        height: fit-content;
        margin: 12rem 4rem;
    }

    @media (max-width: 767px) {
        height: fit-content;
        margin: 8rem 0rem;
    }
`;

const SkillsBox = styled.ul`
    height: fit-content;
    width: 80rem; 
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 30px;
    padding: 5rem 4rem;

    position: relative;

    @media (max-width: 1024px) {
        height: fit-content;
        width: fit-content;
        padding: 2rem;
        border-radius: 12px;

        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 767px) {
        height: fit-content;
        width: fit-content;
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

    @media (max-width: 1024px) {
        gap: 2rem;
    }
    
    @media (max-width: 767px) {
        gap: 2rem;
        width: 15rem;
        padding: 0.5rem;
    }
`;

const SkillIcon = styled.li`
    font-size: 4.5rem;

    @media (max-width: 1024px) {
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
