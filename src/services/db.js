import { 
    getDatabase, 
    ref,
    get, 
    set,
    update,
    runTransaction
} from 'firebase/database';

import {app} from "./firebase"

const db = getDatabase(app);

export default {
    async saveToDatabase(userId, data) {;
        await set(ref(db, userId), data);
    },

    async updateInDatabase(userId, data) {;
        await runTransaction(ref(db, userId), (currentData) => {
            if (currentData === null) {
                return data;
            } else {
                return {...currentData, ...data};
            }
        });        
    },

    async readFromDatabase(userId) {
        try {
            const snapshot = await get(ref(db, userId));
            return snapshot.exists() ? snapshot.val() : null;
        } catch (error) {
            console.error('Error reading from the database:', error.message);
            throw error;
        }
    },
  
}
