
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBp4tvbGSNr1Zk_oopOsOs9Ciycr5Iowr4",
  authDomain: "nonna-pili-pastas-caseras.firebaseapp.com",
  projectId: "nonna-pili-pastas-caseras",
  storageBucket: "nonna-pili-pastas-caseras.appspot.com",
  messagingSenderId: "1070295918044",
  appId: "1:1070295918044:web:1de2f07c1904ad57d05b19",
  measurementId: "G-75BC31EESR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
