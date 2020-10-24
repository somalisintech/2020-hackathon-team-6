import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background: transparent;
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 15%;
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
  `;

const NavItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    margin-right: 50px;
`;

const NavItem = styled.p`
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;

    color: #FFFFFF;
`;


export const NavBar = () => {
    return (
        <Router>
            <Container>
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