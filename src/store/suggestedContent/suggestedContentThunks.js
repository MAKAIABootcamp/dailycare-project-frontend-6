import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs } from '@firebase/firestore'
import { setSuggestedContent, setError } from './suggestedContentSlice'

const suggestedContentCollection = collection(firestore, 'suggestedContent')

export const getDataFromSuggestedContent = ( category = null ) => async ( dispatch ) => {
  try {
    let data = []
    const tempArr = []
    const response = await getDocs(suggestedContentCollection)
    response.forEach((item) => {
      tempArr.push({ id: item.id, ...item.data() })
    })
    if (category) {
      data = tempArr.filter((entry) => entry.category.toLowerCase().startsWith(category.toLowerCase()))
    } else {
      data = tempArr
    }
    dispatch(setSuggestedContent(data))
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}