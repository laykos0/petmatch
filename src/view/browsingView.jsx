import { React, useState } from 'react';
import {motion} from "framer-motion"
import Draggable from 'react-draggable';
import { useObserver } from "mobx-react-lite";
import "../browsing.css"


// if currently displayed dog is null: loading
// whenever you swipe, update user preferences, and call generateDisplayDog
function BrowsingView(props){

    const [currentIndex, setCurrentIndex] = useState(0);


    function like() {
        props.x(true)
    }

    function dislike() {
        props.x(false)
    }

    function handleSwipe(direction){
        
        if (direction === 'right') {
            console.log('Swiped right!');
            props.generateDog()
            console.log(props.model.currentlyDisplayedDog.name)
        } 
        else if (direction === 'left') {
            console.log('Swiped left!');
            props.generateDog()
            console.log(props.model.currentlyDisplayedDog.name)
        }

        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    function SwipeCard({ onSwipe }) {
        function handleStop(event, data){
            const threshold = 50;

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
                            <motion.button className='like' onClick={(() => {handleSwipe("right")})}>
                                👍 
                            </motion.button>
                            <div className="profile-content">
                                <img src={props.model.currentlyDisplayedDog.image_link} />
                                <h3>{props.model.currentlyDisplayedDog.name}</h3>
                            </div>
                            <motion.button className='dislike' onClick={(() => {handleSwipe("left")})}>
                                👎
                            </motion.button>
                        </div>
                    </Draggable>
                </motion.div>
            </div>
        );
    }

    return useObserver(() => (<div className="app"> <SwipeCard onSwipe={handleSwipe} /> </div>));
}

export default BrowsingView;