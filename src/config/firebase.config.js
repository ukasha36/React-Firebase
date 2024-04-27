import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBSSdG_pirRC1UZgg45y6gBIMYCdClEIqw",
  authDomain: "react-firebase-a5fe3.firebaseapp.com",
  databaseURL: "https://react-firebase-a5fe3-default-rtdb.firebaseio.com",
  projectId: "react-firebase-a5fe3",
  storageBucket: "react-firebase-a5fe3.appspot.com",
  messagingSenderId: "442691228236",
  appId: "1:442691228236:web:c5301930ac293a7e20dae9",
  measurementId: "G-T0NBHPVWEV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const storage = getStorage(app);
export const db = getDatabase(app);

export { app, auth ,  storage };

