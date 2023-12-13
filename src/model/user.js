import auth from '../services/auth.js';
import db from '../services/db.js';

import personalityAttributes from "./personalityAttributes"

export default {
    location: {
        zip: "02421",
        state: "MA"
    }, //string
    personalityPreferences: personalityAttributes, //personalityAttributes object
    seenDogs: [], // array of dog objects
    
    async updateUserInformation(dog, likedOrDisliked) {
        this.updateSeenDogs(dog)
        this.updatePreferences(dog.personalityPreferences, likedOrDisliked)
        await this.saveUserToDatabase(this.userToPersistance())
    },

    userToPersistance() {
        return {
            location: this.location,
            personalityPreferences: this.personalityPreferences,
            seenDogs: this.seenDogs
        };
    },

    userInformationToPersistance() {
        return {
            personalityPreferences: this.personalityPreferences,
            seenDogs: this.seenDogs
        };
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

    async updateUserInDatabase(userDataToUpdate) {
        try {
            const user = await auth.getCurrentUser();
            if (user) 
              return await db.updateInDatabase(user.uid, userDataToUpdate);
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

    async persistenceToUser() {
        const user = await auth.getCurrentUser();
        if (user) {
            const {location, personalityPreferences, seenDogs } = await db.readFromDatabase(user.uid);
            this.user = {location, personalityPreferences, seenDogs}
        }
    },

    async setLocation(location) {
        const user = await auth.getCurrentUser();
        if (user) 
            await db.updateInDatabase(user.uid, {location: location})
    },

    updatePreferences(pA, liked) {
        const num_seen = this.seenDogs.length;

        for (let attribute in pA) {
            if (this.personalityPreferences.hasOwnProperty(attribute)) {
                const current = this.personalityPreferences[attribute];
                if (liked) {
                    this.personalityPreferences[attribute] = Math.min(5, Math.max(0, ((current * num_seen) + pA[attribute]) / (num_seen + 1))); // 5 is the maximum value (e.g., out of 5)
                } else {
                    this.personalityPreferences[attribute] = Math.min(5, Math.max(0, ((current * num_seen) - pA[attribute]) / (num_seen + 1))); // 0 is the minimum value
                }
            }
        }
    },

    updateSeenDogs(dog){
        this.seenDogs = this.seenDogs ? [dog.name] :  [...this.seenDogs, dog.name];
    }
    
}