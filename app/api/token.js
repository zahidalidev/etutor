import { collection, addDoc } from 'firebase/firestore'
import { firebaseFirestore } from '../config/firebase'

export const saveNotificationToken = async body => {
  await addDoc(collection(firebaseFirestore, 'tokens'), body)
}
