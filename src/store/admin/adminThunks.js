import { getDocs, collection } from 'firebase/firestore'
import { firestore } from '../../firebase/firebaseConfig'
import { setUsers, setError } from './adminSlice'

const usersCollection = collection(firestore, "users")
export const getAllUsers = () => async ( dispatch ) => {
  try {
    const allUsers = await getDocs(usersCollection)
    const tempArr = []
    allUsers.forEach((doc) => {
        tempArr.push({ id: doc.id, ...doc.data() })
    });
    dispatch(
      setUsers(tempArr)
    )
    dispatch(setError(false))
  } catch (error) {
    console.warn(error)
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}

