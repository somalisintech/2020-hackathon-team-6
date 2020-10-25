import React from 'react';
import styled from 'styled-components';
import timeAndMan from '../img/time-and-man.svg';

export const ContentWrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 100px;
    margin: 100px;

    div {
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;

       @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    
    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    
    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    
    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    }
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
        <ImageContainer>
            <img src={timeAndMan} alt="Green clock with black man standing beside"></img>
        </ImageContainer>
        <TextContainer>
            <Heading>Any time of day</Heading>
            <SubHeading>At any point in your day, 
                early morning or in the middle of the night, 
                if you have any healthcare-related questions, 
                we are here to help.
            </SubHeading>
        </TextContainer>
    </ContentWrapper>
    );
}

