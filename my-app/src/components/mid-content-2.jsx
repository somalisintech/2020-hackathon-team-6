import React from 'react';
import womanTexting from '../img/woman-texting.svg';
import { ContentWrapper, Heading, ImageContainer, SubHeading, TextContainer } from './mid-content-1';
import ScrollAnimation from 'react-animate-on-scroll';

export const MidContent2 = () => {
    return (    
    <ContentWrapper>
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <TextContainer>
                <Heading>Any where you are</Heading>
                <SubHeading>We will provide you with the most relevant 
                    and up-to-date resources available to you 
                    based on your location.
                </SubHeading>
            </TextContainer>
            </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <ImageContainer>
                <img src={womanTexting} alt="Green clock with black man standing beside"></img>
            </ImageContainer>
        </ScrollAnimation>
    </ContentWrapper>
    );
}
