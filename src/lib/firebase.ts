// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5t75Gwk6FjL6dpi3bnrW2NEG_JgdHLaI',
  authDomain: 'work-exercise-bc6d9.firebaseapp.com',
  projectId: 'work-exercise-bc6d9',
  storageBucket: 'work-exercise-bc6d9.appspot.com',
  messagingSenderId: '576410055933',
  appId: '1:576410055933:web:8d282b8dd6237bc1b9ba94',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
