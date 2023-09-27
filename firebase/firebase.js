// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-tm3BUEWKOXcOV_hkI6YKOFpwOQQKYaE",
  authDomain: "chat-app-next-firebase.firebaseapp.com",
  projectId: "chat-app-next-firebase",
  storageBucket: "chat-app-next-firebase.appspot.com",
  messagingSenderId: "815351332242",
  appId: "1:815351332242:web:a5af08eefba871c1a3554b",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
