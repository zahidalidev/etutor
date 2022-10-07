// import * as SQLite from "expo-sqlite";

// const openDatabase = () => {
//   if (Platform.OS === "web") {
//     return {
//       transaction: () => {
//         return {
//           executeSql: () => {},
//         };
//       },
//     };
//   }

//   const db = SQLite.openDatabase("db.db");
//   return db;
// }

// const db = openDatabase();

import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore, initializeFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

import firebaseConfig from '../config/firebase'

const app = initializeApp(firebaseConfig)
initializeFirestore(app, { useFetchStraems: false, experimentalForceLongPolling: true })

const firebaseAuth = getAuth(app)
const firebaseDatabase = getDatabase(app)
const firebaseFirestore = getFirestore(app)

export { firebaseAuth, firebaseDatabase, firebaseFirestore }
