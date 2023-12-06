import { 
    getDatabase, 
    ref,
    get, 
    set 
} from 'firebase/database';

import {app} from "./firebase"

const db = getDatabase(app);

export default {
    async saveToDatabase(userId, data) {
        set(ref(db, userId), {data});
    },

    async readFromDatabase(userId) {
        try {
            const snapshot = await get(ref(db, userId));

            if (snapshot.exists()) {
                const userData = snapshot.val();
                return userData;
            } else {
                console.log('No data found in the database for userId:', userId);
                return null;
            }
        } catch (error) {
            console.error('Error reading from the database:', error.message);
            throw error;
        }
    },
  
}
