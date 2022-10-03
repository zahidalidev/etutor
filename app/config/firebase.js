import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { initializeApp } from 'firebase/app'
import { getFirestore, initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {

}

const app = initializeApp(firebaseConfig)
initializeFirestore(app, {useFetchStraems: false, experimentalForceLongPolling:true});
const firebaseAuth = getAuth(app)
const firebaseDatabase = getDatabase(app)
const firebaseFirestore = getFirestore(app)

export { firebaseAuth, firebaseDatabase, firebaseFirestore }