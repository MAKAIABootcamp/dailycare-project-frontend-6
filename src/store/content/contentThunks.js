import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs } from '@firebase/firestore'
import { setContent, setError } from './contentSlice'

const contentCollection = collection(firestore, 'content')

export const getData = () => async ( dispatch ) => {
  try {
    const tempArr = []
    const response = await getDocs(contentCollection)
    response.forEach((item) => {
      tempArr.push({ id: item.id, ...item.data() })
    })
    dispatch(setContent(tempArr))
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}