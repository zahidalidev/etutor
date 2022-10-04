import { collection, getDocs, where, query } from 'firebase/firestore'
import { firebaseFirestore } from '.'

export const fetchAllCategories = async () => {
  const snapshot = await getDocs(collection(firebaseFirestore, 'categories'))
  return snapshot.docs.map((doc) => doc.data())
}

export const fetchSubCategories = async id => {
  const q = query(collection(firebaseFirestore, 'subCategories'), where('quiz_id', '==', id))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => doc.data()).sort((prev, next) => prev.id - next.id)
}

export const fetchQuestions = async id => {
  const q = query(collection(firebaseFirestore, 'questions'), where('sub_quiz_id', '==', id))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => doc.data()).sort((prev, next) => prev.id - next.id)
}
