import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { addGoal, deleteGoal, setError, setGoals, updateGoal } from './goalSlice'

const goalsCollection = collection(firestore, 'goals')

export const getGoals = () => {
  return async (dispatch) => {
    try {
      const tempArr = []
      const response = await getDocs(goalsCollection);
      response.forEach((item) => {
          tempArr.push({ id: item.id, ...item.data() })
      });
      dispatch(setGoals(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const createGoalAsync = (goal) => {
  return async (dispatch) => {
    try {
      let tempObject = { ...goal }
      const response = await addDoc(goalsCollection, goal);
      console.log(response);
      tempObject.id = response.id;
      dispatch(addGoal(tempObject));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const updateGoalAsync = (goal) => {
  const documentRef = doc(goalsCollection, goal.id); /** Referencia del documento */
  return async (dispatch) => {
    try {
      dispatch(updateGoal(goal));
      delete goal.id;
      await setDoc( documentRef, goal);
      // console.log(response);
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const deleteGoalAsync = (id) => {
  const documentRef = doc(goalsCollection, id);
  return async (dispatch) => {
    try {
      dispatch(deleteGoal(id));
      const response = await deleteDoc(documentRef);
      console.log(response);
    } catch (error) {
      console.log(error);
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  }
}