import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Firebase configs could be moved into GitHub secrets
// or environment specific .env file parameters
const firebaseConfig = {
    apiKey: "",
    authDomain: "test.firebaseapp.com",
    projectId: "test",
    storageBucket: "test.appspot.com",
    messagingSenderId: "",
    appId: ""
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);