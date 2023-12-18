import { 
    getDatabase, 
    ref,
    get, 
    set,
    update
} from 'firebase/database';

import {app} from "./firebase"

const db = getDatabase(app);

export default {
    async saveToDatabase(userId, data) {;
        set(ref(db, userId), data);
    },

    async updateInDatabase(userId, data) {;
        update(ref(db, userId), data);
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
