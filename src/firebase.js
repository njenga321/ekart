// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyBz3pAEyUhH_lur7FRL40wpB_KMckeK2KE",
    authDomain: "e-kart-challange.firebaseapp.com",
    projectId: "e-kart-challange",
    storageBucket: "e-kart-challange.appspot.com",
    messagingSenderId: "585516772155",
    appId: "1:585516772155:web:8094a3a9d626ffd0cfa51e",
    measurementId: "G-TGHR5EDCKZ"
  };

//Initialize firebase
const app =  initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

//Initialize Firebase Authentication and get a reference to the service
export {db, auth };
