import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://practice-c6d94-default-rtdb.firebaseio.com",
    projectId: "practice-c6d94",
    storageBucket: "practice-c6d94.appspot.com",
    messagingSenderId: "398125997298",
    appId: "1:398125997298:web:22a55c41a32a45f545c46b"
};

const app = initializeApp(firebaseConfig);


export const db = getDatabase(app)



