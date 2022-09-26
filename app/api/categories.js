import instance from '.'

export const fetchAllCategories = () => instance.get('/quiz')

export const fetchSubCategories = (page, id) => instance.get(`/sub/quiz/${id}?page=${page}`)

export const fetchQuestions = (id) => instance.get(`/sub/quiz/question/${id}`)

import { addDoc, collection} from 'firebase/firestore'
import { firebaseFirestore } from '../config/firebase'

export const fillData = async () => {
  const { data } = await fetchAllCategories()
  data.forEach(async(main) => {
    console.log('starting...', main.id)
    await addDoc(collection(firebaseFirestore, 'categories'), {
      id: main.id,
      title: main.title,
      status: main.status
    })

    const { data: subMain } = await fetchSubCategories()
    const pages = [...Array(subMain.last_pag).keys()]
    pages.forEach(async(sub) => {
      const { data: subCat } = await fetchSubCategories(sub, main.id)

      subCat.data.forEach(async(sub) => {
        await addDoc(collection(firebaseFirestore, 'subCategories'), {
          id: sub.id,
          quiz_id: sub.quiz_id,
          title: sub.title,
          status: sub.status,
        })
        data
        const { data: questions } = await fetchQuestions(sub.id)

        questions.forEach(async(ques) => {
          await addDoc(collection(firebaseFirestore, 'questions'), {
            id: ques.id,
            sub_quiz_id: ques.sub_quiz_id,
            question: ques.question,
            sub_quiz_options: ques.sub_quiz_options,
            status: ques.status,
          })
        })
      })
    })
  })
  console.log('done............')
}
