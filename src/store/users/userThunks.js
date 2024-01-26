import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import { setError, setIsAuthenticated, setUser, updateUser } from './userSlice'
import { createUserInCollection, getUserFromCollection, loginFromFirestore, updateUserFromCollection } from '../../services/userServices'


export const createAnAccountAsync = ( newUser ) => async ( dispatch ) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password,
    )
    await updateProfile(auth.currentUser, {
      displayName: newUser.name,
      photoURL: newUser.photoURL
    })
    const userLogged = await createUserInCollection(user.uid, {
      name: newUser.name,
      photoURL: newUser.photoURL,
      accessToken: user.accessToken,
      email: newUser.email,
      gender: newUser.gender,
      category: newUser.category,
      company: newUser.company,
      notificationCheck: newUser.notificationCheck,
      alertsCheck: newUser.alertsCheck,
      rol: newUser.rol, 
      
    })
    dispatch(
      setUser({
        id: userLogged.uid,
        displayName: userLogged.name,
        email: userLogged.email,
        photoURL: userLogged.photoURL, 
        accessToken: userLogged.accessToken,
        rol: userLogged.rol
      })
    )
    dispatch(setIsAuthenticated(true))
    dispatch(setError(false))
  } catch (error) {
    console.warn(error)
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  return async ( dispatch ) => {
    try {
      const userCredential = await signInWithPopup(auth, provider)
      const userLogged = await loginFromFirestore(userCredential.user)
      dispatch(setIsAuthenticated(true))
      dispatch(setUser(userLogged))
    } catch (error) {
      dispatch(setIsAuthenticated(false))
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      )
    }
  }
}

export const loginWithEmailAndPassword = ({ email, password }) => async ( dispatch ) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const userLogged = await getUserFromCollection(user.uid)
    if (userLogged) {
      dispatch(setIsAuthenticated(true))
      dispatch(setUser({ 
        email: userLogged.email, 
        id: user.uid, 
        name: userLogged.name, 
        photoURL: userLogged.photoURL, 
        accessToken: userLogged.accessToken, 
        rol: userLogged.rol 
      }))
      console.log(userLogged)
      dispatch(setError(false))
    } else {
      dispatch(setIsAuthenticated(false))
      dispatch(
        setError({ error: true })
      )
    }
  } catch (error) {
    dispatch(setIsAuthenticated(false))
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}

export const logoutAsync = () => async ( dispatch ) => {
  try {
    await signOut(auth)
    dispatch(setIsAuthenticated(false))
    dispatch(setUser(null))
    dispatch(setError(null))
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}

export const loginWithPhoneCodeAsync = ( code ) => async ( dispatch ) => {
  const confirmationResult = window.confirmationResult
  try {
    confirmationResult.confirm(code)
      .then(async response => {
        const user = response.user.auth.currentUser
        const userLogged = await loginFromFirestore(user)
        console.log(userLogged)
        dispatch(setIsAuthenticated(true))
        dispatch(setUser(userLogged))
        dispatch(setError(false))
      })
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}

export const updateProfileAsync = ({name, photoURL, id, gender, category, email})=> async(dispatch)=>{
  try {
    await updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL
    });
    await updateUserFromCollection({name, photoURL, id, gender, category, email});
    dispatch(updateUser({name, photoURL, gender, category, email}))
  } catch (error) {
    console.error(error);
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}