import React, { useState, useEffect } from 'react';
import BrowsingView from "../view/browsingView.jsx";
import { observer } from "mobx-react-lite";

export default observer(function Browsing(props){
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
        setIsLoading(true); 
        await props?.model?.user?.updateUserPreferences(props.model.currentlyDisplayedDog, like)
        await props?.model?.generateDisplayDog()
        setIsLoading(false); 
    }

    return (
        <div>
            <BrowsingView model={modelToPass} rate={rateACB} isLoading={isLoading}/>
        </div>
    );
})
