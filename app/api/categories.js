import { collection, getDocs, where, query } from 'firebase/firestore'
import { firebaseFirestore } from '.'

import { sort } from '../utils/helpers'

export const fetchAllCategories = async () => {
  const snapshot = await getDocs(collection(firebaseFirestore, 'categories'))
  return snapshot.docs.map((doc) => doc.data())
}

export const fetchSubCategories = async (id) => {
  const q = query(collection(firebaseFirestore, 'subCategories'), where('quiz_id', '==', id))
  const snapshot = await getDocs(q)
  return sort(snapshot.docs)
}

export const fetchAllSubCategories = async () => {
  const q = query(collection(firebaseFirestore, 'subCategories'))
  const snapshot = await getDocs(q)
  return sort(snapshot.docs)
}

export const fetchQuestions = async (id) => {
  const q = query(collection(firebaseFirestore, 'questions'), where('sub_quiz_id', '==', id))
  const snapshot = await getDocs(q)
  return sort(snapshot.docs)
}

export const fetchAllQuestions = async () => {
  const q = query(collection(firebaseFirestore, 'questions'))
  const snapshot = await getDocs(q)
  return sort(snapshot.docs)
}
