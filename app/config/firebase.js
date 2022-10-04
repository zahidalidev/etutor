import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { initializeApp } from 'firebase/app'
import { getFirestore, initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtzmjoquH-JZQBM_dhzykbV6v2ZdkiWQk",
  authDomain: "egrammer-b4f0d.firebaseapp.com",
  projectId: "egrammer-b4f0d",
  storageBucket: "egrammer-b4f0d.appspot.com",
  messagingSenderId: "501717507743",
  appId: "1:501717507743:web:070499731f6d73fa7cccaa",
  measurementId: "G-WKGXXV9T4E"
}

const app = initializeApp(firebaseConfig)
initializeFirestore(app, { useFetchStraems: false, experimentalForceLongPolling: true });
const firebaseAuth = getAuth(app)
const firebaseDatabase = getDatabase(app)
const firebaseFirestore = getFirestore(app)

export { firebaseAuth, firebaseDatabase, firebaseFirestore }