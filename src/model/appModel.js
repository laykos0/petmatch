import User from "./user.js";
import { getNewDogs } from "../services/dogApi.js";
import { getPetFinderData, getPetFinderDataState } from "../services/petFinderApi.js";
import { generateDogDescription } from "../services/llmApi.js";
export default {  
    user: User,
    organizations: [],
    stateOrganizations: [],
    dogDescriptions: {},
    currentlyDisplayedDog: {},
    detailsDisplayedDog: {},
    dogsToDisplay: [],
    currentlyRecommendedDogs: [],
    unmatchedDogs: [],

    async getDogRecommendations() {
        console.log("IN DOG RECS APP MODEL");
        const rec = 0;
        console.log("before");
        console.log(User.personalityPreferences);
        console.log("after");
        this.currentlyRecommendedDogs = await getNewDogs(this.user.personalityPreferences, rec); 
    },

    async selectDog(dog) {
        let name = dog.name
        this.detailsDisplayedDog = dog;
        if (!(name in this.dogDescriptions)) {
            this.dogDescriptions[name] = await generateDogDescription(name);
        }
        console.log("new dog descriptions: ", this.dogDescriptions[name])
    },

    async updateUserLocation(zipCode, stateCode) {
        await this.user.updateUserLocation(zipCode, stateCode)
        await this.getNearbyOrganizations();
    },

    async removeDogFromRecommendations(dog) {
      try {
          await this.user.updateUserRemovedDogs(dog);
  
          this.currentlyRecommendedDogs = this.currentlyRecommendedDogs.filter(
              (recommendedDog) => recommendedDog.name !== dog.name
          );
      } catch (error) {
          console.error('Error removing dog from recommendations:', error);
      }
    },
  

    async generateDisplayDog() {
        if (this.dogsToDisplay.length > 0) {
          this.currentlyDisplayedDog = this.dogsToDisplay.pop();
        } else {
          try {
            const rand = 1;
            this.dogsToDisplay = await getNewDogs(this.user, rand);
      
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
      
    async getNearbyOrganizations() {
        await getPetFinderData(this);
        await getPetFinderDataState(this);
    },

    clearModel() {
      this.user.clearUser()
      this.organizations = [];
      this.stateOrganizations = [];
      this.dogDescriptions = {};
      this.currentlyDisplayedDog = {};
      this.detailsDisplayedDog = {};
      this.dogsToDisplay = [];
      this.currentlyRecommendedDogs = [];
    },

    async initializeModel() {
      await this.user.retrieveUserFromDatabase()
      await this.getNearbyOrganizations()
      await this.generateDisplayDog()
    }
}