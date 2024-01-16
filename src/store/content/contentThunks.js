import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs } from '@firebase/firestore'
import { setContent, setError } from './contentSlice'

const contentCollection = collection(firestore, 'content')

export const getData = ( category = null ) => async ( dispatch ) => {
  try {
    let data = []
    const tempArr = []
    const response = await getDocs(contentCollection)
    response.forEach((item) => {
      tempArr.push({ id: item.id, ...item.data() })
    })
    if (category) {
      data = tempArr.filter((entry) => entry.categories.toLowerCase().startsWith(category.toLowerCase()))
    } else {
      data = tempArr
    }
    dispatch(setContent(data))
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}