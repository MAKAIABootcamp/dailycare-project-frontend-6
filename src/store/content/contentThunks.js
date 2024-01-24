import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs, getDoc, doc } from '@firebase/firestore'
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

export const getDataById = ( id ) => async ( dispatch ) => {
  try {
    const documentRef = doc(contentCollection, id)
    const docSnap = await getDoc(documentRef)

    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() }

      dispatch(setContent([data]))
    } else {
      dispatch(setContent([]))
    }
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}