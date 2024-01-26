import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGoals } from "../../store/goals/goalThunks";
import HomeIcon from "../../assets/icons/HomeIcon";
import ActivityIcon from "../../assets/icons/ActivityIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import { ToastContainer } from "react-toastify";
import "./styles.sass";

const Footer = () => {

  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const { goals } = useSelector( store => store.goal );
  const { user, notificationCheck } = useSelector( store => store.user );

  const AlertMsg = (props) => (
    <div className='alert-message-container'>
      <h3>¡Tu meta: {props.title} ha caducado! ¿Lograste completarla?</h3>
    </div>
  )
  useEffect(() => {

    dispatch(getGoals())
    console.log(goals);
    const newArrayDate = goals.map(goal => {
      const newDeadlineDate = `${goal.deadlineDate.substring(3,5)}/${goal.deadlineDate.substring(0,2)}/${goal.deadlineDate.substring(6)}`
      return { ...goal, deadlineDate: newDeadlineDate }
    })
    //console.log(new Date(), new Date(newArrayDate[2].deadlineDate))
    console.log(newArrayDate)
    let goalsToAlert = newArrayDate.filter(goal => goal.user === user.email && (new Date() - new Date(goal.deadlineDate)) >= 0)
    goalsToAlert = goalsToAlert.sort((a, b) => { 
      return new Date(a.deadlineDate).getTime() - new Date(b.deadlineDate).getTime()
    });

    console.log(goalsToAlert);

    // const timer = setInterval(() => {
    //     const goalYear = goalsToAlert[0].deadlineDate.substring(6)
    //     const goalMonth = goalsToAlert[0].deadlineDate.substring(0,2)
    //     const goalDay = goalsToAlert[0].deadlineDate.substring(3,5)
    //     const goalMinutes = goalsToAlert[0].deadlineTime.substring(3,5)
    //     let goalHour = goalsToAlert[0].deadlineTime.substring(0,2)
    //     if(goalsToAlert[0].deadlinePeriod == 'PM') goalHour = parseInt(goalHour) + 12
    //     const goalDate = new Date(parseInt(goalYear), parseInt(goalMonth)-1, parseInt(goalDay), parseInt(goalHour), parseInt(goalMinutes), 0)
    //     // console.log(Math.trunc((goalDate - new Date())/1000))
    //     if(Math.trunc((goalDate - new Date())/1000) == 0){
    //       toast(<AlertMsg title={goalsToAlert[0].title} />)
    //     }
    // }, 1000);
    // return () => clearInterval(timer);
  },[])

  return (
    <nav className="footer">
      <Link to="/">
        <div className="option flex flex-col justify-center items-center gap-1">
          <HomeIcon active={pathname === "/"} />
          <span style={{ color: pathname === "/" ? "#4E7949" : "#A5A5A5" }}>
            Inicio
          </span>
        </div>
      </Link>
      <Link to="/activity">
        <div className="option flex flex-col justify-center items-center gap-1">
          <ActivityIcon active={pathname === "/activity"} />
          <span
            style={{ color: pathname === "/activity" ? "#4E7949" : "#A5A5A5" }}
          >
            Actividad
          </span>
        </div>
      </Link>
      <Link to="/user-profile">
        <div className="option flex flex-col justify-center items-center gap-1">
          <ProfileIcon active={pathname === "/user-profile"} />
          <span
            style={{
              color: pathname === "/user-profile" ? "#4E7949" : "#A5A5A5",
            }}
          >
            Perfil
          </span>
        </div>
      </Link>
      <div style={{position: 'absolute'}}>{notificationCheck ? <ToastContainer /> : ''}</div>
    </nav>
  );
};

export default Footer;
