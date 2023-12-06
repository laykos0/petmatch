import User from "./user.js";
import Dog from "./dog.js";
import { getNewDogs } from "../services/dogApi.js";
export default{
    user: User,
    currentlyDisplayedDog: Dog,
    dogsToDisplay: [],
    currentlyRecommendedDogs: [],
    removeDog(dog){
        let indexToRemove = this.currentlyRecommendedDogs.indexOf(dog)
        if (indexToRemove !== -1) {
            // Remove the element using splice
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
            console.log(this.currentlyDisplayedDog);
        }
    }
}