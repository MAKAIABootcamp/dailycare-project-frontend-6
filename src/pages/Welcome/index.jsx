import "./styles.sass"
import adminImage from "../../assets/images/admin.png"
import userImage from "../../assets/images/user.png"
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="main-welcome">
      <div className="container">
        <h1 className="container__title">Bienvenido</h1>
        <h2 className="container__subtitle">Elige tu rol</h2>
        <section className="container-rols">
          <div className="rol container-rols__admin">
            <img src={adminImage} alt="admin" />
            <p>Admin</p>
          </div>
          <div className="rol container-rols__user">
            <img src={userImage} alt="user" />
            <p>Usuario</p>
          </div>
        </section>
      </div>
    </main>
);
}

export default Welcome
