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

`;

const Title = styled.p`
  font-family: ${fontFamily.title};
  font-size: 2rem;
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
        <Lottie options={defaultOptions} height={400} width={400} />
        <Title>This page is still under construction.</Title>
      </ContactSection>
      <Footer/>
    </div>
  );
};

export default Contact;
