import React, { useEffect } from 'react';
import { LandingPage } from './landingPage';
import { MidContent } from './mid-content-1';
import { MidContent2 } from './mid-content-2';
import { MidContent3 } from './mid-content-3';

export const HomePage = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://widget.flowai.app/w/YVVrN1dJeUdkfGNyMGJpTjNOWQ==/flow-webclient-1.1.2.min.js"
        script.async = true 

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    })
    return (
        <>
            <LandingPage/>
            <MidContent />
            <MidContent2 />
            <MidContent3 />
        </>
    )
};