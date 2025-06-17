import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyA0L1dRwKFT_NM6EP3-G2AX2ovRxkJLXaE",
  authDomain: "worksyra-auth.firebaseapp.com",
  projectId: "worksyra-auth",
  storageBucket: "worksyra-auth.firebasestorage.app",
  messagingSenderId: "699176116538",
  appId: "1:699176116538:web:480d474320dfea5e4bf003",
  measurementId: "G-RC5LFH6TW8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
