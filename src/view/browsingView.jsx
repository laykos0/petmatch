import { React, useState } from 'react';
import {motion} from "framer-motion"
import Draggable from 'react-draggable';
import "../browsing.css"
import { useObserver } from "mobx-react-lite";


// if currently displayed dog is null: loading
// whenever you swipe, update user preferences, and call generateDisplayDog
function BrowsingView(props){
    // const [profiles, setProfiles] = useState([
    //     // { id: 1, name: 'John Doe', image: 'john.jpg' },
    //     // { id: 2, name: 'ohn oe', image: 'ohn.jpg' },
    //     // { id: 3, name: 'h oe', image: 'hn.jpg' },
    //     // { id: 4, name: 'n Doe', image: 'n.jpg' },

    // ]);
    console.log(props)

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
        function handleStop(event, data){
            const threshold = 100;

            if (Math.abs(data.x) > threshold) {
                const direction = data.x > 0 ? 'right' : 'left';
                onSwipe(direction);
            }
        };

        return (
            <div>
                <motion.div animate = {{scale: 1}} initial = {{scale: 0.25}}>
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
                            <motion.button className='like' onClick={handleSwipe}>
                                👍 
                            </motion.button>
                            <div className="profile-content">
                                <img src={profile.image} alt={profile.name} />
                                <h3>{profile.name}</h3>
                            </div>
                            <motion.button className='dislike' onClick={handleSwipe}>
                                👎
                            </motion.button>
                        </div>
                    </Draggable>
                </motion.div>
            </div>
        );
    }

    return useObserver(() => (
        <div className="app">
            {profiles.slice(currentIndex, currentIndex + 1).map((profile) => (
                <SwipeCard
                    key={profile.id}
                    profile={profile}
                    onSwipe={handleSwipe}
                />
            ))}
        </div>
    ));
}

export default BrowsingView;