
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA2d5MiB1wdm2WL9OWU_5d4GVxXvr6vUhM",
  authDomain: "prueba-react-5ef89.firebaseapp.com",
  projectId: "prueba-react-5ef89",
  storageBucket: "prueba-react-5ef89.appspot.com",
  messagingSenderId: "802628996855",
  appId: "1:802628996855:web:7e17625100f0e485e78df2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google =  new GoogleAuthProvider();

export{
    app,
    db,
    google
}

