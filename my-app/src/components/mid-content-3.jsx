import React from 'react';
import onlineMessaging from '../img/online-messaging.svg';
import { ContentWrapper, Heading, ImageContainer, SubHeading, TextContainer } from './mid-content-1';
import ScrollAnimation from 'react-animate-on-scroll';

export const MidContent3 = () => {
    return (    
    <ContentWrapper>
          <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <ImageContainer>
                <img src={onlineMessaging} alt="Green clock with black man standing beside"></img>
            </ImageContainer>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
            <TextContainer>
                <Heading>We are here to help</Heading>
                <SubHeading>Our chat services will connect you to qualified health 
                    professionals who will give you appropriate health guidance.
                </SubHeading>
            </TextContainer>
        </ScrollAnimation>
    </ContentWrapper>
    );
}