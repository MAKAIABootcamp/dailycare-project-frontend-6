import {
GoogleAuthProvider,
signInWithPopup,
signInWithEmailAndPassword,
signOut,
} from "firebase/auth"
import { setError, setIsAuthenticated, setUser } from "./userSlice"
import { auth } from "../../firebase/firebaseConfig"

export const loginGoogle = () => {
    const provider = new GoogleAuthProvider()
    return async (dispatch) => {
        try {
        const userCredencial = await signInWithPopup(auth, provider)
        console.log(userCredencial)
        dispatch(setIsAuthenticated(true))
        dispatch(setUser(userCredencial))
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
        console.log(user);
        dispatch(setIsAuthenticated(true))
        dispatch(setError(false))
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

export const loginWithCodeAsync = ( code ) => async ( dispatch ) => {
    const confirmationResult = window.confirmationResult
    try {
        confirmationResult.confirm(code)
        .then(async response => {
            const user = response.user.auth.currentUser
            console.log(user)
            dispatch(setIsAuthenticated(true))
            dispatch(setUser(user))
            console.log(user)
            dispatch(setError(false))
        })
    } catch (error) {
        dispatch(
        setError({ error: true, code: error.code, message: error.message })
        )
    }
}