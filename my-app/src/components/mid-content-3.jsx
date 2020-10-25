import React from 'react';
import onlineMessaging from '../img/online-messaging.svg';
import { ContentWrapper, Heading, ImageContainer, SubHeading, TextContainer } from './mid-content-1';

export const MidContent3 = () => {
    return (    
    <ContentWrapper>
        <ImageContainer>
            <img src={onlineMessaging} alt="Green clock with black man standing beside"></img>
        </ImageContainer>
        <TextContainer>
            <Heading>We are here to help</Heading>
            <SubHeading>Our chat services will connect you to qualified health 
                professions who will give you appropriate health guidance.
            </SubHeading>
        </TextContainer>
    </ContentWrapper>
    );
}