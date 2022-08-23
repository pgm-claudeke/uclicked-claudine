import React from 'react';
import styled from 'styled-components';
import { colors, fontFamily } from '../../constants/styles';

const ContactContainer = styled.section`
    height: 64vh;

    display: flex;
    justify-content: center; 
    align-items: center;
`;

const ContactBox = styled.div`
    height: 36rem;
    width: 76rem;
    margin-top: 14rem;
    background: ${colors.primary};
    background: linear-gradient(45deg, rgba(255,255,255,0), rgba(72,199,255,1));
    border-radius: 16px;

    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    gap: 10rem;

`;

const Form = styled.form`
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Label = styled.label`
    font-family: ${fontFamily.title};
    font-size: 1rem;
`;

const Input = styled.input`
    color: ${colors.secondary};
    font-size: 1rem;

    background-color: ${colors.secondary};
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;

    opacity: 0.8;
`;

const TextArea = styled.textarea`
    color: ${colors.secondary};
    font-size: 1rem;

    background-color: ${colors.secondary};
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;

    opacity: 0.8;
`;

const SendBtn = styled.button`
    font-family: ${fontFamily.title};
    font-size: 1.2rem;

    background-color: ${colors.tertiary};
    border: none;
    border-radius: 8px;
    padding: 0.8rem 2rem;;

    width: fit-content;
`;


const Contact = () => {
  return (
    <ContactContainer>
        <ContactBox>
        <div>
            <p>here comes text</p>
        </div>
        <div>
            <Form>
                <FormDiv>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" name="name" placeholder="Your name..."/>
                </FormDiv>
                <FormDiv>
                    <Label for="name">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="Your email..."/>
                </FormDiv>
                <FormDiv>
                    <Label for="name">Message</Label>
                    <TextArea id="message" name="message" placeholder="Your message.." rows="4" cols="50"/>
                </FormDiv>
                <SendBtn>Send</SendBtn>
            </Form>
        </div>
        </ContactBox>
    </ContactContainer>
  )
}

export default Contact