import { collection, addDoc } from 'firebase/firestore'
import { firebaseFirestore } from '.'

export const saveNotificationToken = async body => {
  await addDoc(collection(firebaseFirestore, 'tokens'), body)
}
