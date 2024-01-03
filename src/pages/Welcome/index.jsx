import { useNavigate } from "react-router-dom";
import adminImage from "../../assets/images/admin.png"
import userImage from "../../assets/images/user.png"
import "./styles.sass"

const Welcome = () => {
  const navigate = useNavigate()

    const goTo = () => navigate('/sign-in')

  return (
    <main className="main-welcome">
      <div className="container">
        <h1 className="container__title">Bienvenido</h1>
        <h2 className="container__subtitle">Elige tu rol</h2>
        <section className="container-rols">
          <div className="container-rols__div">
            <button className="rol container-rols__div--admin" onClick={() => goTo()}>
              <img src={adminImage} alt="admin" />
            </button>
          <p>Admin</p>
          </div>
          <div className="container-rols__div">
            <button className="rol container-rols__div--user" onClick={() => goTo()}>
              <img src={userImage} alt="user" />
            </button>
            <p>Usuario</p>
          </div>
        </section>
      </div>
    </main>
);
}

export default Welcome
