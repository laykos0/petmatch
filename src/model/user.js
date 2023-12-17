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
    removedDogs: [],

    async updateUserLocation(zip, state) {
        this.setLocation({zip: zip, state: state})
        return this.updateUserInDatabase(this.userLocationToPersistence());
    },

    async updateUserPreferences(dog, liked) {
        this.updateSeenDogs(dog)
        this.updatePreferences(dog.personalityPreferences, liked)
        return this.updateUserInDatabase(this.userPreferencesToPersistance());
    },

    async updateUserRemovedDogs(dog) {
        this.updateRemovedDogs(dog)
        return this.updateUserInDatabase(this.userRemovedDogsToPersistence()); 
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

    userRemovedDogsToPersistence() {
        return {removedDogs: this.removedDogs};
    },

    userToPersistence() {
        return {
            location: this.location, 
            personalityPreferences: this.personalityPreferences, 
            seenDogs: this.seenDogs, 
            removedDogs: this.removedDogs
        }
    },

    setLocation(location) {
        this.location = location 
    },

    updateSeenDogs(dog) {
        if (!this.seenDogs.includes(dog.name)) 
            this.seenDogs = [...this.seenDogs, dog.name];
    },

    updateRemovedDogs(dog) {
        if (!this.removedDogs.includes(dog.name)) 
            this.removedDogs = [...this.removedDogs, dog.name];
    },

    updatePreferences(attributes, liked) {
        const num_seen = this.seenDogs.length;

        for (let attribute in attributes) {
            if (attributes[attribute] !== undefined && this.personalityPreferences.hasOwnProperty(attribute) && this.personalityPreferences[attribute] !== null) {                const current = this.personalityPreferences[attribute];
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

    clearUser() {
        this.location = {
            zip: "02421",
            state: "MA"
        };
        this.personalityPreferences = personalityAttributes;
        this.seenDogs = [];
        this.removedDogs = [];
    },

    async retrieveUserFromDatabase() {
        const user = await auth.getCurrentUser();
        if (user) {
            let userData = await db.readFromDatabase(user.uid);
            if (!userData) {
                this.clearUser()
                await this.updateUserInDatabase(this.userToPersistence());
                userData = await db.readFromDatabase(user.uid);
            }
            const { location, personalityPreferences, seenDogs, removedDogs} = userData;
            this.user = { location, personalityPreferences, seenDogs, removedDogs };
        } else {
            this.clearUser()
        }
    },

}