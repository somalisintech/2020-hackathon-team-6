import React from 'react';
import { LandingPage } from './landingPage';
import { MidContent } from './mid-content-1';
import { MidContent2 } from './mid-content-2';
import { MidContent3 } from './mid-content-3';

export const HomePage = () => {
    return (
        <>
            <LandingPage/>
            <MidContent />
            <MidContent2 />
            <MidContent3 />
        </>
    )
};