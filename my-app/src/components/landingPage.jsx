import React from 'react';
import { NavBar } from './navbar';
import styled from "styled-components";
import { Button } from './button';
import mobilePhone from '../img/mobile-phone.svg';

const GreenPage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #00CECB;
  `;

const ButtonPositioning = styled.div`
    position: relative;
    width: 268px;
    margin-top: 24px;
`;


const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 100px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
`;

const Heading = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 82px;
    color: #FFFFFF;
`;

const SubHeading = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 41px;
    color: #FFFFFF;
    text-align: initial;
    width: 700px;
    margin-top: 24px;
    margin-bottom: 24px;
`;

const MobilePhoneImage = styled.img`
    padding: 30px;
`;


export const LandingPage = () => {
    return (
        <GreenPage>
            <NavBar/>
            <ContentWrapper>
                <TextWrapper>
                    <Heading>Speak to us, we can help you</Heading>
                    <SubHeading>Ask us any health related question and we will guide you to the right people.</SubHeading>
                    <ButtonPositioning>
                        <Button buttonText={"Learn more!"}/>
                    </ButtonPositioning>
                </TextWrapper>
           
                    <MobilePhoneImage src={mobilePhone} alt="Mobile phone"/>
            
            </ContentWrapper>
        </GreenPage>
    )
};