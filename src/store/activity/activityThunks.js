import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs, addDoc, setDoc } from 'firebase/firestore'
import { addActivity, setError, setActivities } from './activitySlice'

const activitiesCollection = collection(firestore, 'activities')

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const tempArr = []
      const response = await getDocs(activitiesCollection);
      response.forEach((item) => {
          tempArr.push({ id: item.id, ...item.data() })
      });
      console.log(tempArr);
      dispatch(setActivities(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const createActivityAsync = (activity) => {
  return async (dispatch) => {
    try {
      let tempObject = { ...activity }
      const response = await addDoc(activitiesCollection, activity);
      console.log(response);
      tempObject.id = response.id;
      dispatch(addActivity(tempObject));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}
