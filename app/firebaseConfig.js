import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEEsY8viKR-VwfihKOx1CfHcxceUs3PW0",
  authDomain: "newage-11c44.firebaseapp.com",
  projectId: "newage-11c44",
  storageBucket: "newage-11c44.appspot.com",
  messagingSenderId: "507339556470",
  appId: "1:507339556470:web:ec7487478ebf3204f2c157"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);



