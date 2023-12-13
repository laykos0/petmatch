import User from "./user.js";
import { getNewDogs } from "../services/dogApi.js";
import { getPetFinderData } from "../services/petFinderApi.js";

export default{  
    user: User,
    location:{
        zip:"02421",
        state:"MA"
    },
    organizations: [],
    dogDescriptions: {},
    currentlyDisplayedDog: {},
    dogsToDisplay: [],
    currentlyRecommendedDogs: [],

    async getDogRecommendations(){
        this.currentlyRecommendedDogs = await getNewDogs(this.user); 
    },

    selectDog(dog){
        this.currentlyDisplayedDog = dog;
    },

    removeDogFromRecommendations(dog){
        let indexToRemove = this.currentlyRecommendedDogs.indexOf(dog)
        if (indexToRemove !== -1) {
            this.currentlyRecommendedDogs.splice(indexToRemove, 1);
          }
    },

    async generateDisplayDog(){
        if (this.dogsToDisplay.length > 0){
            this.currentlyDisplayedDog = this.dogsToDisplay.pop();
        }
        else {
            this.dogsToDisplay = await getNewDogs(this.user);
            this.currentlyDisplayedDog = this.dogsToDisplay.pop();
        }
    },

    async getNearbyOrganizations(){
        await getPetFinderData(this);
    }
}