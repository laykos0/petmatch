import auth from '../services/auth.js';
import db from '../services/db.js';
import personalityAttributes from "./personalityAttributes";

export default  {
    location: {
        zip: "02421",
        state: "MA"
    },
    personalityPreferences: personalityAttributes,
    seenDogs: [], 

    async updateUserLocation(location) {
        this.setLocation(location)
        return this.updateUserInDatabase(this.userLocationToPersistence());
    },

    async updateUserPreferences(dog, liked) {
        this.updateSeenDogs(dog)
        this.updatePreferences(dog.personalityPreferences, liked)
        return this.updateUserInDatabase(this.userPreferencesToPersistance());
    },

    userLocationToPersistence() {
        return {location: this.location};
    },
    
    userPreferencesToPersistance() {
        return {
            personalityPreferences: this.personalityPreferences,
            seenDogs: this.seenDogs
        };
    },

    setLocation(location) {
        this.location = location
    },

    updateSeenDogs(dog) {
        if (!this.seenDogs.includes(dog.name)) 
            this.seenDogs = [...this.seenDogs, dog.name];
    },

    updatePreferences(attributes, liked) {
        const num_seen = this.seenDogs.length;

        for (let attribute in attributes) {
            if (this.personalityPreferences.hasOwnProperty(attribute) && this.personalityPreferences[attribute] !== null) {                const current = this.personalityPreferences[attribute];
                this.personalityPreferences[attribute] = this.updatePreferenceAttribute(current, attributes[attribute], liked, num_seen);
            }
        }
    },

    updatePreferenceAttribute(current, attribute, liked, num_seen) {
        return liked ? 
            Math.min(5, Math.max(0, ((current * num_seen) + attribute) / (num_seen + 1))) :
            Math.min(5, Math.max(0, ((current * num_seen) - attribute) / (num_seen + 1)));
    },

    async updateUserInDatabase(data) {
        try {
            const user = await auth.getCurrentUser();
            if (user) 
                return await db.updateInDatabase(user.uid, data);
        } catch (error) {
            console.error('Error updating user information:', error.message);
            return { error: true, message: error.message };
        }
    },

    async retrieveUserFromDatabase() {
        const user = await auth.getCurrentUser();
        if (user) {
            const {location, personalityPreferences, seenDogs} = await db.readFromDatabase(user.uid);      
            this.user = {location, personalityPreferences, seenDogs};
        }
    },

}