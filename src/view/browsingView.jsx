import { React, useState } from 'react';
import {motion} from "framer-motion"
import Draggable from 'react-draggable';
import { useObserver } from "mobx-react-lite";
import "../styles/browsing.css"


// if currently displayed dog is null: loading
// whenever you swipe, update user preferences, and call generateDisplayDog
function BrowsingView(props){

    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

    function rateDog(liked) {
        props.rate(liked)
        setShouldAnimate(true); // Disable animation after swiping
    }

    function dislike() {
        props.x(false)
    }

    function handleSwipe(direction){
        if (direction === true) {
            console.log('Swiped right!');
            props.x(false)
            console.log(props.model.currentlyDisplayedDog.name)
        } 
        else if (direction === false) {
            console.log('Swiped left!');
            props.x(true)
            console.log(props.model.currentlyDisplayedDog.name)
        }
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    function likeACB() {
        console.log('Like button pressed!');
        props.x(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    function dislikeACB() {
        console.log('Dislike button pressed!');
        props.x(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    function SwipeCard({ onSwipe }) {
        function handleStop(event, data){
            if (Math.abs(data.x) > 150) {
                onSwipe(data.x < 0);
            } else {
                setCurrentPosition({ x: 0, y: 0 });
                setShouldAnimate(false); // Disable animation after swiping
            }
        };

        return (
            <div>
                <motion.div animate={{ scale: 1 }} initial={{ scale: shouldAnimate ? 0.25 : 1 }}>
                    <Draggable
                        axis="x"
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={currentPosition}
                        grid={[25, 25]}
                        scale={1}
                        onStop={handleStop}
                        cancel=".like, .dislike" 
                    >
                        <div className="swipe-card handle">
                            <motion.button className='like' onClick={likeACB}>
                                👍 
                            </motion.button>
                            <div className="profile-content">
                                <img src={props.model.currentlyDisplayedDog.image_link} />
                                <h3>{props.model.currentlyDisplayedDog.name}</h3>
                            </div>
                            <motion.button className='dislike' onClick={dislikeACB}>
                                👎
                            </motion.button>
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