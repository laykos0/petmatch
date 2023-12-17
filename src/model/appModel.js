import User from "./user.js";
import { getNewDogs } from "../services/dogApi.js";
import { getPetFinderData } from "../services/petFinderApi.js";
import { generateDogDescription } from "../services/llmApi.js";
export default{  
    user: User,
    location:{
        zip:"02421",
        state:"MA"
    },
    organizations: [],
    dogDescriptions: {},
    currentlyDisplayedDog: {},
    detailsDisplayedDog: {},
    dogsToDisplay: [],
    currentlyRecommendedDogs: [],

    async getDogRecommendations(){
        this.currentlyRecommendedDogs = await getNewDogs(this.user); 
    },

    async selectDog(dog){
        let name = dog.name
        this.detailsDisplayedDog = dog;
        if(!(name in this.dogDescriptions)){
            this.dogDescriptions[name] = await generateDogDescription(name);
        }
        console.log("new dog descriptions: ", this.dogDescriptions[name])
    },

    async updateUserLocation(zipCode, stateCode){
        this.location.zip = zipCode;
        this.location.state = stateCode;
        await this.getNearbyOrganizations();
    },

    removeDogFromRecommendations(dog){
        let indexToRemove = this.currentlyRecommendedDogs.indexOf(dog)
        if (indexToRemove !== -1) {
            this.currentlyRecommendedDogs.splice(indexToRemove, 1);
          }
    },

    async generateDisplayDog() {
        if (this.dogsToDisplay.length > 0) {
          this.currentlyDisplayedDog = this.dogsToDisplay.pop();
        } else {
          try {
            this.dogsToDisplay = await getNewDogs(this.user);
      
            this.dogsToDisplay = this.dogsToDisplay.filter(
              dog => !this.user.seenDogs.some(seenDog => seenDog === dog.name)
            );

            if (this.dogsToDisplay.length > 0) 
              this.currentlyDisplayedDog = this.dogsToDisplay.pop();
            else 
              console.log("No more dogs to display.");
            
          } catch (error) {
            console.error("Error fetching new dogs:", error);
          }
        }
      },
      
    async getNearbyOrganizations(){
        await getPetFinderData(this);
    }
}