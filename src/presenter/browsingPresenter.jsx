import React, { useState, useEffect } from 'react';
import BrowsingView from "../view/browsingView.jsx";

export default function Browsing(props){
    const [isLoading, setIsLoading] = useState(true);
    const modelToPass = isLoading ? {
        currentlyDisplayedDog: {
            name: "Loading",
            image_link: "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
        }
    } : props.model;

    useEffect(() => {
        async function fetchData() {
            await props.model.generateDisplayDog();
            setIsLoading(false);
        }
    
        fetchData();
    }, []); 

    async function rateACB(like) {
        props?.model?.user?.updateUserInformation(props.model.currentlyDisplayedDog, like)
        setIsLoading(true); 
        props?.model?.generateDisplayDog()
        await sleep(1000); 
        setIsLoading(false); 
    }

    return (
        <div>
            <BrowsingView model={modelToPass} rate={rateACB} />
        </div>
    );
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }