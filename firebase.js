// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRnc1VTLfPJKoEZMpvfQa4n3geqmkPMyc",
    authDomain: "twitter-clone-dev.firebaseapp.com",
    projectId: "twitter-clone-dev",
    storageBucket: "twitter-clone-dev.appspot.com",
    messagingSenderId: "288998411586",
    appId: "1:288998411586:web:2718fc17df0ecb553e0cdb",
    measurementId: "G-YMQKNKT23M"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };