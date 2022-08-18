import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/styles';
import SubTitle from '../Elements/SubTitle';
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

    position: relative;
`;

const SkillsBox = styled.ul`
    height: fit-content;
    width: 80rem; 
    background: ${colors.primaryDarker};
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(72,199,240,0.2) 50%, rgba(72,199,240,0.5) 100%);
    border-radius: 30px;
    padding: 5rem 4rem;

    display: flex;
    flex-direction: column; 
    gap: 4rem;
`;

const SkillList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: center;
    gap: 6rem;
`;

const SkillIcon = styled.li`
    font-size: 4.5rem;
`;

export const Skills = () => {
  return (
    <SkillsSection>
        <SubTitle title='Technologies I use' top='7.5rem' left='-4rem'/>
        <SkillsBox>
            <SkillList>
                <SkillIcon><SiAdobeaftereffects/></SkillIcon>
                <SkillIcon><SiAdobeaudition/></SkillIcon>
                <SkillIcon><SiAdobeillustrator/></SkillIcon>
                <SkillIcon><SiAdobeindesign/></SkillIcon>
                <SkillIcon><SiAdobephotoshop/></SkillIcon>
                <SkillIcon><SiAdobepremierepro/></SkillIcon>
                <SkillIcon><SiAdobexd/></SkillIcon>
            </SkillList>
            <SkillList>
                <SkillIcon><SiReact/></SkillIcon>
                <SkillIcon><SiNodedotjs/></SkillIcon>
                <SkillIcon><SiCss3/></SkillIcon>
                <SkillIcon><SiJavascript/></SkillIcon>
                <SkillIcon><SiEleventy/></SkillIcon>
                <SkillIcon><SiHandlebarsdotjs/></SkillIcon>
            </SkillList>
            <SkillList>
                <SkillIcon><SiSass/></SkillIcon>
            </SkillList>
        </SkillsBox>
    </SkillsSection>
  )
}