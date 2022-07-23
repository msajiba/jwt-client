
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlbLaQ90i2cwo6WbiD2qvMR1z1d3qKRdA",
  authDomain: "react-vite-832a6.firebaseapp.com",
  projectId: "react-vite-832a6",
  storageBucket: "react-vite-832a6.appspot.com",
  messagingSenderId: "428594276088",
  appId: "1:428594276088:web:c100e3a5f852990657bd0d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;