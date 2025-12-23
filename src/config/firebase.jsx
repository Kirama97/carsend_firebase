
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY ,
  // authDomain:  import.meta.env.VITE_AUTH_DOMAIN ,
  // projectId:  import.meta.env.VITE_PROJECT_ID,
  // storageBucket:  import.meta.env.VITE_STORAGE_BUCKET ,
  // messagingSenderId:  import.meta.env.VITE_SENDER_ID,
  // appId:  import.meta.env.VITE_APP_ID 
  
   apiKey: "AIzaSyBSS4q6kYTJI_pXk3DSwZg-cynl1n4sRJo",
   authDomain: "carsend-852f3.firebaseapp.com",
   projectId: "carsend-852f3",
   storageBucket: "carsend-852f3.firebasestorage.app",
   messagingSenderId: "756318161488",
   appId: "1:756318161488:web:c0d2e73404794056e65f55" 
  
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);