import wavingHand from "../../assets/icons/waving-hand.svg";
import star from "../../assets/icons/star.svg";
import ActivityCard from "../../components/ActivityCard";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import "./styles.sass";
import { useEffect, useState } from "react";
import { getActivities } from "../../store/activity/activityThunks";

const Activity = () => {
  const [totalScore, setTotalScore] = useState(0);

  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { activities } = useSelector((store) => store.activity);

  useEffect(() => {
    dispatch(getActivities());
    console.log(user);
  }, []);

  useEffect(() => {
    if (activities.length > 0) {
      const accumulatedScore = activities
        .filter((activity) => activity.userId === user.id)
        .reduce((sum, activity) => sum + activity.score, 0);

      setTotalScore(accumulatedScore);
    }
  }, [activities, user]);

  return (
    <>
      <main className="activity">
        <div className="activity__hi">
          <h3 className="activity__hi--title">
            Hola, <span>{user.name}</span>
          </h3>
          <img src={wavingHand} alt="waving hand icon" />
        </div>
        <h2 className="activity__welcome">¡Bienvenido de nuevo!</h2>
        <section className="activity__points">
          <div className="activity__points--icon">
            <img src={star} alt="star icon" />
          </div>
          <div className="activity__points--points-number">
            <span className="text">Tus puntos</span>
            <span className="number">{totalScore}</span>
          </div>
        </section>
        <section className="activity__cards-container">
          {activities.length ? (
            activities.map((activity, index) => {
              return (activity.userId === user.id ? <ActivityCard key={index} activity={activity} /> : null
            )})
          ) : (
            <p>Cargando datos...</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Activity;
