import React from "react";
import styled from "styled-components";
import { Header, Footer } from "../components";
import { ContactSec } from "../components";
import { fontFamily } from "../constants/styles";
import Lottie from "react-lottie";
import constructionAni from "../lotties/17033-icon-animation-for-under-construction-page.json";

const ContactSection = styled.section`
    margin: 10rem 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1656px) {

    }

    @media (min-width: 768px) and (max-width: 1200px) { 
        
    }

    @media (max-width: 767px) {
        margin: 2rem 2rem;
    }
`;

const Animation = styled.div`
@media (max-width: 767px) {
    scale: 0.8;
}
`;

const Title = styled.p`
text-align: center;
  font-family: ${fontFamily.title};
  font-size: 2rem;

  @media (max-width: 767px) {
    font-size: 1.5rem;
}
`;

const Message = styled.p`
text-align:center;
font-family: ${fontFamily.text};
font-size: 1.5rem;
@media (max-width: 767px) {
    font-size: 1rem;
}
`;

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: constructionAni,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
        <Header/>
      <ContactSection>
        <Animation>
            <Lottie options={defaultOptions} height={400} width={400} />
        </Animation>
        <Title>Sorry, this page is still under construction.</Title>
        <Message>Contact me by e-mail claudinedekesel@hotmail.com</Message>
      </ContactSection>
      <Footer/>
    </div>
  );
};

export default Contact;
