
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBo9NKiVR672S-O6F7uLmNsbAfGXpZOCYs",
  authDomain: "groxi-warehouse.firebaseapp.com",
  projectId: "groxi-warehouse",
  storageBucket: "groxi-warehouse.appspot.com",
  messagingSenderId: "789051482593",
  appId: "1:789051482593:web:bec49fa2af79b8e432b2a0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;