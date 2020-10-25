import React from 'react';
import styled from 'styled-components';
import timeAndMan from '../img/time-and-man.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export const ContentWrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 100px;
    margin: 100px;
`;

export const ImageContainer = styled.div`
    text-align: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
    color: #005C65;
`;

export const SubHeading = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 27px;

    color: #000000;
`;

export const MidContent = () => {
    return (    
    <ContentWrapper>
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <ImageContainer>
                <img src={timeAndMan} alt="Green clock with black man standing beside"></img>
            </ImageContainer>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <TextContainer>
                <Heading>Any time of day</Heading>
                <SubHeading>At any point in your day, 
                    early morning or in the middle of the night, 
                    if you have any healthcare-related questions, 
                    we are here to help.
                </SubHeading>
            </TextContainer>
        </ScrollAnimation>
    </ContentWrapper>
    );
}

