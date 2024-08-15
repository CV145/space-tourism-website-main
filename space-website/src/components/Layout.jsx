import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const updateBackground = (pathname) => {
            switch (pathname) {
                case '/destination':
                    setBackgroundImage('url("/assets/destination/background-destination-desktop.jpg")');
                    break;
                case '/crew':
                    setBackgroundImage('url("/assets/crew/background-crew-desktop.jpg")');
                    break;
                case '/technology':
                    setBackgroundImage('url("/assets/technology/background-technology-desktop.jpg")');
                    break;
                default:
                    setBackgroundImage('url("/assets/home/background-home-desktop.jpg")');
                    break;
            }
        };

        updateBackground(location.pathname);
    }, [location.pathname]);

    return (
        <div
            className="layout"
            style={{
                backgroundImage: backgroundImage,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}
        >
            <NavBar />
            {children}
        </div>
    );
};

export default Layout;
