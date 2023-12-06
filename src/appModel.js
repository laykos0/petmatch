import User from "./user.js"
import Dog from "./dog.js"
export default{
    user: User,
    currentlyDisplayedDog: Dog,
    currentlyRecommendedDogs: [], // array of dogs
    removeDog(dog){
        let indexToRemove = this.currentlyRecommendedDogs.indexOf(dog)
        if (indexToRemove !== -1) {
            // Remove the element using splice
            this.currentlyRecommendedDogs.splice(indexToRemove, 1);
          }
    }
}