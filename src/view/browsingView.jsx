import { React, useState } from 'react';
import {motion} from "framer-motion"
import Draggable from 'react-draggable';
import { useObserver } from "mobx-react-lite";
import "../styles/browsing.css"

function BrowsingView(props){

    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

    function rateDog(liked) {
        if (!props.isLoading) {
            props.rate(liked)
            setShouldAnimate(true);
        }
    }

    function SwipeCard({ onSwipe }) {

        function handleStop(event, data){
            if (Math.abs(data.x) > 150) {
                onSwipe(data.x < 0);
            } else {
                setCurrentPosition({ x: 0, y: 0 });
                setShouldAnimate(false);
            }
        };

        return (
                    <div className='rounded mt-12'>
                        <motion.div animate={{ scale: 1 }} initial={{ scale: shouldAnimate ? 0.25 : 1 } }   transition={{ duration: 0.3 }} >
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
                                    <motion.button className='dislike absolute bottom-5 left-5 bg-white p-5 rounded-full hover:scale-125 hover:bg-red-600' onClick={() => {onSwipe(false)}}>
                                        👎
                                    </motion.button>
                                    <div className="profile-content">
                                        <button disabled={true} className=' font-bold bg-indigo-500 mb-5 p-5 rounded-full'>{props?.model?.currentlyDisplayedDog?.name}</button>
                                        <img className = "rounded-lg mb-16" src={props?.model?.currentlyDisplayedDog?.image_link}  loading="eager" />
                                    </div>
                                    <motion.button className='like absolute bottom-5 right-5 bg-white p-5 rounded-full hover:scale-125 hover:bg-green-400' onClick={() => {onSwipe(true)}}>
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