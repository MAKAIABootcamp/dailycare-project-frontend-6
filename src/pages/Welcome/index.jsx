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
          <div className="container-rols__div">
            <button className="rol container-rols__div--admin">
              <img src={adminImage} alt="admin" />
            </button>
          <p>Admin</p>
          </div>
          <div className="container-rols__div">
            <button className="rol container-rols__div--user">
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
