import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>
                    Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                    Well sit back, and relax because we'll give you a truly out of this world experience!
                </p>
            </div>
            <div className="explore-button-container">
                <button className="explore-button">EXPLORE</button>
            </div>
        </section>
    );
};

export default HeroSection;
