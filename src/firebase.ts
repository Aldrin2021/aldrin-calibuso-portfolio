import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBSDY3dHYFjm5M82AEJFD7Prm1jmISSLw",
  authDomain: "portfolio-d4545.firebaseapp.com",
  projectId: "portfolio-d4545",
  storageBucket: "portfolio-d4545.firebasestorage.app",
  messagingSenderId: "469976666155",
  appId: "1:469976666155:web:6d78541075db9b7fc75a6e",
  measurementId: "G-7RFNMQGGFM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
