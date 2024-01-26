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
      dispatch(setActivities(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const createActivityAsync = (activity, userId) => {
  return async (dispatch) => {
    try {
      let tempObject = {
          badge: activity.badge,
          img: activity.cardImage,
          name: activity.title,
          score: activity.score,
          userId: userId
      }
      const response = await addDoc(activitiesCollection, tempObject)
      tempObject.id = response.id
      dispatch(addActivity(tempObject))
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}
