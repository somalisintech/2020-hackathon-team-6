import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.div`
    color: white;
    background: #005C65;
    border-radius: 30px;
    width: 268px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #FFFFFF;
`;

export const Button = (props) => {
    return (
        <ButtonContainer>
            <ButtonText>
                {props.buttonText}
            </ButtonText>
        </ButtonContainer>
    )
} 

