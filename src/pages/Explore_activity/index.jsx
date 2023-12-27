import "./styles.sass";
import enfoqueImage from "../../assets/images/w-meditation.png";
import vueltaImage from "../../assets/images/m-meditation.png";
import yogaImage from "../../assets/images/woman-yoga.png";
import basicosImage from "../../assets/images/basicos-meditacion.png";
import estresImage from "../../assets/images/reducir-estres.png";
import playlistImage from "../../assets/images/playlist.png";
import playImage from "../../assets/images/playImage.png";

const ExploreActivity = () => {
  return (
    <main className="main-explore">
      <div className="container3">
        <div className="container3__title">
          <h1>Explorar Actividad</h1>
        </div>
        <section className="container3__activity__A">
          <div className="container3__activity__A__nivel1">
            <div className="container3__activity__A__nivel1__X">
                <img className="line1"src={enfoqueImage} alt="" />
              <div className="line2">
                <p className="line3">Enfoque</p>
              </div>
            </div>
            <div className="container3__activity__A__nivel1__X">
                <img className="line1" src={vueltaImage} alt="" />
              <div className="line2">
                <p className="line3">Vuelta a la calma</p>
              </div>
            </div>
            <div className="container3__activity__A__nivel1__X">
                <img className="line1" src={yogaImage} alt="" />
              <div className="line2">
                <p className="line3">Relajación</p>
              </div>
          </div>
          </div>
        </section>
        <div className="container3__subtitle">
          <h2>Meditaciones básicas</h2>
        </div>
        <section className="container3__activity__B">
          <div className="container3__activity__B__nivel2">
            <div className="container3__activity__B__nivel2__Y">
              <img className="container3__activity__B__nivel2__Y--line4" src={basicosImage} alt="admin" />
              <p className="container3__activity__B__nivel2__Y--line5">Básicos de la meditación</p>
          </div>
          <div className="container3__activity__B__nivel2">
            <div className="container3__activity__B__nivel2__Y">
              <img className="container3__activity__B__nivel2__Y--line4" src={estresImage} alt="user" />
              <p className="container3__activity__B__nivel2__Y--line5">Reducir estrés y ansiedad</p>
            </div>
          </div>
          </div>
        </section>
        <section className="container3__activity__C">
          <div className="container3__activity__C__nivel1">
            <div>
              <img className="container3__activity__C__nivel1__Z--line6" src={playlistImage} alt="" />
            </div>
            <div className="container3__activity__C__nivel1__Z">
                <img className="container3__activity__C__nivel1__Z--line7" src={playImage} alt="" />
              <div className="container3__activity__C__nivel1__Z--line8">
                <h3>Playlist para entrar en mood</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExploreActivity;
