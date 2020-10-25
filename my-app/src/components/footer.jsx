import React from 'react';
import styled from "styled-components";
// import cdLogo from '../img/cd-logo.svg';

const FooterContainer = styled.div`
    height: 50px;
    width: 100%;
    background: #878B8B;
`;

// const LogoContainer = styled.div`
//     width: auto;
// `;

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
    align-items: center;
    height: 100%;
    justify-content: center;
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <FlexContainer>
                {/* <LogoContainer>
                    <img src={cdLogo} alt="Caafimaad Direct Logo" style={{width: "300px"}}></img>
                </LogoContainer> */}
                <CopyrightText>© 2020 Caafimaad Direct. All Rights Reserved.</CopyrightText>
              </FlexContainer>
        </FooterContainer>
    )
}