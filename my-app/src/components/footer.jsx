import React from 'react';
import styled from "styled-components";
import cdLogo from '../img/cd-logo.svg';

const FooterContainer = styled.div`
    height: auto;
    width: 100%;
    background: #575858;
`;

const LogoContainer = styled.div`
    width: auto;
`;

const CopyrightText = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #FFFFFF;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 400px;
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <FlexContainer>
                <LogoContainer>
                    <img src={cdLogo} alt="Caafimaad Direct Logo"></img>
                </LogoContainer>
                <CopyrightText>© 2020 Caafimaad Direct</CopyrightText>
              </FlexContainer>
        </FooterContainer>
    )
}