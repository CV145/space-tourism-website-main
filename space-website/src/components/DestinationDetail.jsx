import React, { useState } from 'react';
import data from '../data.json';
import './DestinationDetail.css';

const DestinationDetail = () => {
    const [selectedDestination, setSelectedDestination] = useState(data.destinations[0]); // Default to the first destination

    return (
        <div className="destination-page">
            <h2 className="section-title">01 PICK YOUR DESTINATION</h2>
            <div className="destination-tabs">
                {data.destinations.map((destination) => (
                    <button
                        key={destination.name}
                        className={selectedDestination.name === destination.name ? 'active' : ''}
                        onClick={() => setSelectedDestination(destination)}
                    >
                        {destination.name}
                    </button>
                ))}
            </div>
            <div className="destination-detail">
                <img src={selectedDestination.images.png} alt={selectedDestination.name} />
                <h1>{selectedDestination.name}</h1>
                <p>{selectedDestination.description}</p>
                <div className="destination-meta">
                    <div>
                        <h3>Avg. Distance</h3>
                        <p>{selectedDestination.distance}</p>
                    </div>
                    <div>
                        <h3>Est. Travel Time</h3>
                        <p>{selectedDestination.travel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetail;
