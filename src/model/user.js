import auth from '../services/auth.js';
import db from '../services/db.js';

import personalityAttributes from "./personalityAttributes"



export default {
    userID: "", // string
    name: "", // string
    location: "", //string
    personalityPreferences: personalityAttributes, //personalityAttributes object
    likedDogs: [], // array of dog objects
    dislikedDogs: [], // array of dog objects

    

    async updateUserInformation(data) {
        try {
            // Retrieve current user
            const user = await auth.getCurrentUser();
            
            if (user)
                await db.saveToDatabase(user.uid, data);
            
            // Retrieve the updated user data if needed
            //const new_data = await db.readFromDatabase(user.uid);
            
            //return new_data;
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
    }
}