import { 
    getDatabase, 
    ref, 
    set 
} from 'firebase/database';

import {app} from "./firebase"

const db = getDatabase(app);

export default {
    async saveToDatabase(userId, data) {
        set(ref(db, "dinnerModel42"), {data});
    },

    async readFromDatabase(user) {
         console.log('Reading from database')
    },
  
}
