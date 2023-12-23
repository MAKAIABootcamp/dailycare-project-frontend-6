import "./styles.sass";
import enfoqueImage from "../../assets/images/w-meditation.png";
import vueltaImage from "../../assets/images/m-meditation.png";
import yogaImage from "../../assets/images/woman-yoga.png";
import basicosImage from "../../assets/images/basicos-meditacion.png";
import estresImage from "../../assets/images/reducir-estres.png";
import playlistImage from "../../assets/images/playlist.png";

const ExploreActivity = () => {
  return (
    <main className="main-explore">
      <div className="container">
        <div className="container__title">
          <h1>Explorar Actividad</h1>
        </div>
        <section className="container__activity__A">
          <div className="container__activity__A--nivel1">
            <div className="activity-1">
              <img src={enfoqueImage} alt="" />
              <p>Enfoque</p>
            </div>
            <div className="activity-1">
              <img src={vueltaImage} alt="" />
              <p>Vuelta a la calma</p>
            </div>
            <div className="activity-1">
              <img src={yogaImage} alt="" />
              <p>Relajación</p>
            </div>
          </div>
        </section>
        <section className="container__activity__B">
          <div className="ccontainer__activity__B--nivel2">
            <h2>Meditaciones básicas</h2>
          </div>
          <div className="activity-2">
            <img src={basicosImage} alt="admin" />
            <p>Básicos de la meditación</p>
          </div>
          <div className="activity-2">
            <img src={estresImage} alt="user" />
            <p>Reducir estrés y ansiedad</p>
          </div>
        </section>
        <section className="container-activity-C">
          <div className="container-activity-C--nivel1">
            <img src={playlistImage} alt="" />
            <h2>Playlist para entrar en mood</h2>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExploreActivity;
