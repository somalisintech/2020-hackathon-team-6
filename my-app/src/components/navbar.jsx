import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import styled from "styled-components";
import cdLogo from '../img/cd-logo.svg';

const Container = styled.div`
    z-index: 10;
    background: transparent;
    position: absolute;
    top: 0px;
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    width: 100vw;
  `;

const NavItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 100px;
    width: 500px;
`;

const NavItem = styled.p`
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;

    color: #FFFFFF;
`;

const LogoContainer = styled.div`
    position: relative;
    top: 40px;
    left: 80px;
`;


export const NavBar = () => {
    return (
        <Router>
            <Container>
                <LogoContainer>
                    <img src={cdLogo} alt="Caafimaad Direct Logo"></img>
                </LogoContainer>
                <NavItemContainer>
                    <Link to="/about" style={{textDecoration: "none"}}>
                        <NavItem>About us</NavItem>
                    </Link>
                    <Link to="/guidelines" style={{textDecoration: "none"}}>
                        <NavItem>Government Guidelines</NavItem>
                    </Link>
                    <Link to="/contact" style={{textDecoration: "none"}}>
                        <NavItem>Contact Us</NavItem>
                    </Link>
                </NavItemContainer>
            </Container>
        </Router>
    )
};