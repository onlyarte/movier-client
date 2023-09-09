import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBeaCSBth9bNrr5l-LOItLGTC9vF-nIqGg',
  authDomain: 'movier-371821.firebaseapp.com',
  projectId: 'movier-371821',
  storageBucket: 'movier-371821.appspot.com',
  messagingSenderId: '899981005574',
  appId: '1:899981005574:web:f4d2ca80f185b81d410487',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
