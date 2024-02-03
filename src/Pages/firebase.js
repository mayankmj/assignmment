import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC_2Aw2UmzCtLnuY4rYQT8HtEwV2hGo43g",
  authDomain: "assignment-openinapp-8ed32.firebaseapp.com",
  projectId: "assignment-openinapp-8ed32",
  storageBucket: "assignment-openinapp-8ed32.appspot.com",
  messagingSenderId: "572148148947",
  appId: "1:572148148947:web:12843dd646a05cf2b4c226",
  measurementId: "G-BQ3MSD6FTR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth}