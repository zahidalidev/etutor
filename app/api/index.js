// import 'expo-firestore-offline-persistence'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore, initializeFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import firebaseConfig from '../config/firebase'

let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
db.enablePersistence()
  .then((data) => console.log('Offline successfully enable: ', data))
  .catch((error) => console.log('Offline error: ', error))

initializeFirestore(app, { useFetchStraems: false, experimentalForceLongPolling: true })

const firebaseAuth = getAuth(app)
const firebaseDatabase = getDatabase(app)
const firebaseFirestore = getFirestore(app)

export { firebaseAuth, firebaseDatabase, firebaseFirestore }
