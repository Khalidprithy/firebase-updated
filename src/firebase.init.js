import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1su0aUUrK9tsDUxsjENVY9zEGuqzAVQc",
    authDomain: "breeze-ai-83a72.firebaseapp.com",
    projectId: "breeze-ai-83a72",
    storageBucket: "breeze-ai-83a72.appspot.com",
    messagingSenderId: "349941914325",
    appId: "1:349941914325:web:9444fccee1ab26a15a605c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
