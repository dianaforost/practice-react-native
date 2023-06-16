import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFNmt_LsmqIMg_Dmr6Yae-ZUthD2z81oI",
  authDomain: "react-native-8d35a.firebaseapp.com",
  projectId: "react-native-8d35a",
  storageBucket: "react-native-8d35a.appspot.com",
  messagingSenderId: "445768348935",
  appId: "1:445768348935:web:770aa22012768fd99381a2",
  measurementId: "G-J4DPNBVYVZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);