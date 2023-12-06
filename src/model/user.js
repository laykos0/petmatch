import auth from '../services/auth.js';
import db from '../services/db.js';

import personalityAttributes from "./personalityAttributes"

export default {
    userID: "", // string
    name: "", // string
    location: "", //string
    personalityPreferences: personalityAttributes, //personalityAttributes object
    seenDogs: [], // array of dog objects
    
    async updateUserInformation(dog) {
        this.seenDogs = updateUserSeenDogs(dog)
        this.personalityAttributes = updateUserAttributes(dog.personalityAttributes)
        const userDataToStore = this.userToPersistance(this.user)
        await this.saveUserToDatabase(userDataToStore)
    },

    userToPersistance() {
        return this.user  
    },
  
    async saveUserToDatabase(userDataToStore) {
          try {
              const user = await auth.getCurrentUser();
              if (user)
                  return await db.saveToDatabase(user.uid, userDataToStore);
              return
          } catch (error) {
              console.error('Error updating user information:', error.message);
              throw error;
          }
    },


    async retrieveUserInformation() {
        const user = await auth.getCurrentUser();
        if (user)
            return await db.readFromDatabase(user.uid);
    },

    updatePreferences(dog, liked_or_disliked){ // True if liked, False if disliked //update dogs seen
        // some maths to change the values of each attribute
        const num_seen = this.seenDogs.length;

        for (let attribute in dog.personalityAttributes) {
            if (dog.hasOwnProperty(attribute)) {
                // Calculate the running average based on the current value and the number of dogs seen
                const currentAverage = this.personalityPreferences[attribute];
                let updatedAverage;
                // If the dog was liked
                if (liked_or_disliked) {
                    // Increase the running average by adding a fraction of the difference between the current value and the average
                    updatedAverage = min(5,max(0,((currentAverage * (num_seen - 1)) + dog.personalityAttributes[attribute] ) / num_seen)); // 5 is the maximum value (e.g., out of 5)
                } else {
                    // Decrease the running average by adding a fraction of the difference between the current value and 0
                    updatedAverage =min(5,max(0,((currentAverage * (num_seen - 1)) - dog.personalityAttributes[attribute] ) / num_seen)); // 0 is the minimum value
                }
                // Update the attribute with the new running average          
                this.personalityPreferences[attribute] = updatedAverage;
            }
        }
    },

    updateSeen(dog){
        this.seenDogs= [...this.seenDogs, dog.id];
    }
    
}