
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from '@firebase/firestore'
import { getAuth } from '@firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDNfsOaxPEHRK6ldcG3nOc_yE_Slzt-OSE",
  authDomain: "hype10-5f02d.firebaseapp.com",
  projectId: "hype10-5f02d",
  storageBucket: "hype10-5f02d.appspot.com",
  messagingSenderId: "108088325618",
  appId: "1:108088325618:web:3e4e22f057485b7fd6276b"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);
export const auth = getAuth(app)