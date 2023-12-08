import { React, useState } from 'react';
import {motion} from "framer-motion"
import Draggable from 'react-draggable';
import { useObserver } from "mobx-react-lite";
import "../styles/browsing.css"


// if currently displayed dog is null: loading
// whenever you swipe, update user preferences, and call generateDisplayDog
function BrowsingView(props){

    //const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

    function rateDog(liked) {
        props.rate(liked)
        //setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    function SwipeCard({ onSwipe }) {
        function handleStop(event, data){
            if (Math.abs(data.x) > 50) {
                onSwipe(data.x < 0);
            } else {
                //setCurrentPosition({ x: 0, y: 0 });
            }
        };

        return (
            <div>
                <motion.div animate = {{scale: 1}} initial = {{scale: 0.25}}>
                    <Draggable
                        axis="x"
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={currentPosition}
                        grid={[25, 25]}
                        scale={1}
                        onStop={handleStop}
                    >
                        <div className="swipe-card handle">
                        <motion.button className='dislike' onClick={() => {onSwipe(false)}}>
                             👎
                        </motion.button>
                            <div className="profile-content">
                                <img src={props?.model?.currentlyDisplayedDog?.image_link} />
                                <h3>{props?.model?.currentlyDisplayedDog?.name}</h3>
                            </div>
                            <motion.button className='like' onClick={() => {onSwipe(true)}}>
                                👍 
                            </motion.button>
                        </div>
                    </Draggable>
                </motion.div>
            </div>
        );
    }

    return useObserver(() => (<div className="app"> <SwipeCard onSwipe={rateDog} /> </div>));
}

export default BrowsingView;