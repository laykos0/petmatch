// import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

import "../index.css"

/* Functional JSX component. Name must start with capital letter */
function BrowsingView(props){
    // return(
    // <div>
    //     I'm the browsing view
    // </div>
    // );    

    const [profiles, setProfiles] = useState([
        { id: 1, name: 'John Doe', image: 'john.jpg' },
        { id: 2, name: 'ohn oe', image: 'ohn.jpg' },
        { id: 3, name: 'h oe', image: 'hn.jpg' },
        { id: 4, name: 'n Doe', image: 'n.jpg' },
        // Add more profiles as needed
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleSwipe(direction){
        if (direction === 'right') {
            console.log('Swiped right!');
        } 
        else if (direction === 'left') {
            console.log('Swiped left!');
        }

        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    function SwipeCard({ profile, onSwipe }) {
        const handleStop = (event, data) => {
            const threshold = 100;

            if (Math.abs(data.x) > threshold) {
                const direction = data.x > 0 ? 'right' : 'left';
                onSwipe(direction);
            }
        };

        return (
            <div>
                <button onClick={()=>window.location.hash="#/result-details"}>Browsing Results</button>
                <Draggable
                    axis="x"
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    onStop={handleStop}
                >
                    <div className="swipe-card handle">
                        <div className="profile-content">
                            {/* Your card content goes here */}
                            <img src={profile.image} alt={profile.name} />
                            <h3>{profile.name}</h3>
                        </div>
                    </div>
                </Draggable>
            </div>
        );
    }

    return (
        <div className="app">
            {profiles.slice(currentIndex, currentIndex + 1).map((profile) => (
                <SwipeCard
                    key={profile.id}
                    profile={profile}
                    onSwipe={handleSwipe}
                />
            ))}
        </div>
    );
}

export default BrowsingView;