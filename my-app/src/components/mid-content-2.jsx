import React from 'react';
import womanTexting from '../img/woman-texting.svg';
import { ContentWrapper, Heading, ImageContainer, SubHeading, TextContainer } from './mid-content-1';

export const MidContent2 = () => {
    return (    
    <ContentWrapper>
        <TextContainer>
            <Heading>Any where you are</Heading>
            <SubHeading>We will provide you with the most relevant 
                and up-to-date resources available to you 
                based on your location.
            </SubHeading>
        </TextContainer>
        <ImageContainer>
            <img src={womanTexting} alt="Green clock with black man standing beside"></img>
        </ImageContainer>
    </ContentWrapper>
    );
}
