// import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

import "../index.css"

/* Functional JSX component. Name must start with capital letter */
// function BrowsingView(props){
//     // return(
//     // <div>
//     //     I'm the browsing view
//     // </div>
//     // );    

//     function SwipeCard({ profile, onSwipe }){
//         const handleStop = (event, data) => {
//             const threshold = 100;
            
//             if (Math.abs(data.x) > threshold) {
//                 // Determine the direction of the swipe
//                 const direction = data.x > 0 ? 'right' : 'left';
//                 onSwipe(direction);
//             }
//         };
        
//         return (
//             <Draggable
//                 axis="x"
//                 handle=".handle"
//                 defaultPosition={{ x: 0, y: 0 }}
//                 position={null}
//                 grid={[25, 25]}
//                 scale={1}
//                 onStop={handleStop}
//             >
//                 <div className="swipe-card handle">
//                 <div className="profile-content">
//                     {/* Your card content goes here */}
//                     <img src={profile.image} alt={profile.name} />
//                     <h3>{profile.name}</h3>
//                 </div>
//                 </div>
//             </Draggable>
//         );
//     };

//     const [profiles, setProfiles] = useState([
//         { id: 1, name: 'John Doe', image: 'john.jpg' },
//         { id: 2, name: 'ohn oe', image: 'ohn.jpg' },
//         { id: 3, name: 'h oe', image: 'hn.jpg' },
//         { id: 4, name: 'n Doe', image: 'n.jpg' },
//         // Add more profiles as needed
//     ]);


//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleSwipe = (direction) => {
//         // Implement logic to handle swiping effect
//         if (direction === 'right') {
//         console.log('Swiped right!');
//         // Add logic for a right swipe (e.g., remove current card, add to liked profiles)
//         } else if (direction === 'left') {
//         console.log('Swiped left!');
//         // Add logic for a left swipe (e.g., remove current card)
//         }

//         // Update the current index to show the next profile
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//     };

//     return (
//         <div className="app">
//         {profiles.map((profile, index) => (
//             <SwipeCard
//             key={profile.id}
//             profile={profile}
//             onSwipe={handleSwipe}
//             style={{ display: index === currentIndex ? 'block' : 'none' }}
//             />
//         ))}
//         </div>
//     );
// }

function BrowsingView(props) {
    const [profiles, setProfiles] = useState([
        { id: 1, name: 'John Doe', image: 'john.jpg' },
        { id: 2, name: 'ohn oe', image: 'ohn.jpg' },
        { id: 3, name: 'h oe', image: 'hn.jpg' },
        { id: 4, name: 'n Doe', image: 'n.jpg' },
        // Add more profiles as needed
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction) => {
        // Implement logic to handle swiping effect
        if (direction === 'right') {
            console.log('Swiped right!');
            // Add logic for a right swipe (e.g., remove current card, add to liked profiles)
        } else if (direction === 'left') {
            console.log('Swiped left!');
            // Add logic for a left swipe (e.g., remove current card)
        }

        // Update the current index to show the next profile
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    function SwipeCard({ profile, onSwipe }) {
        const handleStop = (event, data) => {
            const threshold = 100;

            if (Math.abs(data.x) > threshold) {
                // Determine the direction of the swipe
                const direction = data.x > 0 ? 'right' : 'left';
                onSwipe(direction);
            }
        };

        return (
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
        );
    }

    return (
        <div className="app">
            {profiles.map((profile, index) => (
                <SwipeCard
                    key={profile.id}
                    profile={profile}
                    onSwipe={handleSwipe}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                />
            ))}
        </div>
    );
}

export default BrowsingView;



 


