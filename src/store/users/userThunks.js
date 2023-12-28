import {
GoogleAuthProvider,
signInWithPopup,
signInWithEmailAndPassword,
signOut,
} from "firebase/auth"
import { setError, setIsAuthenticate, setUser } from "./userSlice"
import { auth } from "../../firebase/firebaseConfig"
import { getUserFromCollection, loginFromFirestore } from "../../services/userService"

export const loginGoogle = () => {
    const provider = new GoogleAuthProvider()
    return async (dispatch) => {
        try {
        const userCredencial = await signInWithPopup(auth, provider)
        // const userLogged = await loginFromFirestore(userCredencial.user)
        console.log(userCredencial)
        dispatch(setIsAuthenticate(true))
        dispatch(setUser(userCredencial))
        } catch (error) {
        dispatch(setIsAuthenticate(false))
        dispatch(
            setError({ error: true, code: error.code, message: error.message })
        )
        }
    }
}

export const loginWithEmailAndPassword = ({ email, password }) => async ( dispatch ) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        // const userLogged = await getUserFromCollection(user.uid)
        // if (userLogged) {
        // dispatch(setIsAuthenticate(true))
        // dispatch(setUser({ email: userLogged.email, id: userLogged.uid, name: userLogged.name, photoURL: userLogged.photoURL, accessToken: userLogged.accessToken }))
        // dispatch(setError(false))
        // } else {
        // dispatch(setIsAuthenticate(false))
        // dispatch(
        //     setError({ error: true })
        // )
        // }
        dispatch(setIsAuthenticate(true))
        // dispatch(setUser({ email: userLogged.email, id: userLogged.uid, name: userLogged.name, photoURL: userLogged.photoURL, accessToken: userLogged.accessToken }))
        dispatch(setError(false))
    } catch (error) {
        dispatch(setIsAuthenticate(false))
        dispatch(
        setError({ error: true, code: error.code, message: error.message })
        )
    }
}

export const logoutAsync = () => async ( dispatch ) => {
    try {
        await signOut(auth)
        dispatch(setIsAuthenticate(false))
        dispatch(setUser(null))
        dispatch(setError(null))
    } catch (error) {
        dispatch(
        setError({ error: true, code: error.code, message: error.message })
        )
    }
}

export const loginWithCodeAsync = ( code ) => async ( dispatch ) => {
    const confirmationResult = window.confirmationResult
    try {
        confirmationResult.confirm(code)
        .then(async response => {
            const user = response.user.auth.currentUser
            // const userLogged = await loginFromFirestore(user)
            console.log(user)
            dispatch(setIsAuthenticate(true))
            dispatch(setUser(user))
            console.log(user)
            // dispatch(setUser({ email: user.email, id: user.uid, name: user.displayName, photoURL: user.photoURL, accessToken: user.accessToken }))
            dispatch(setError(false))
        })
    } catch (error) {
        dispatch(
        setError({ error: true, code: error.code, message: error.message })
        )
    }
}