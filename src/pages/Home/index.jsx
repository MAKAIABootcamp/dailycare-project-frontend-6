import "./styles.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Divider from "../../components/Divider";
import DrawerAntD from "../../components/Drawer";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate()

    const goTo2 = () => navigate('/reading-detail');
    const goTo3 = () => navigate('/video-detail')
    const goTo4 = () => navigate('/explore-activity')
    const goTo5 = () => navigate('/user-profile')
    

  return (
    <main className="homeMain">
      <DrawerAntD/>
      <div className="padding">
        <h1 className="title">
          Bienvenido <span className="title-user">Usuario</span>
        </h1>
        <h3 className="subtitle">Sesiones del día</h3>
        <Splide
          options={{
            type: "loop",
            gap: "3rem",
            padding: {
              right: "10rem",
            },
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="img-container" onClick={() => goTo4()}>
              <p className="overText">Correr</p>
              <img
                className="img"
                src="src/assets/images/run.jpg"
                alt="Image 1"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-container" onClick={() => goTo4()}>
              <p className="overText">Estirar</p>
              <img
                className="img"
                src="src/assets/images/stretch.png"
                alt="Image 2"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <Divider />
      <div className="padding">
        <h3 className="subtitle">Pausas activas</h3>
        <Splide
          options={{
            type: "loop",
            gap: "2rem",
            padding: {
              right: "8rem",
            },
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="card">
              <div className="img-container" onClick={() => goTo5()}>
                <img
                  className="img"
                  src="src/assets/images/run.jpg"
                  alt="Image 1"
                />
              </div>
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Ejercicios de yoga</p>
                <p className="text-subtitle">Relajación - Antiestres</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="img-container" onClick={() => goTo3()}>
                <img
                  className="img"
                  src="src/assets/images/stretch.png"
                  alt="Image 2"
                />
              </div>
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Ejercicios de yoga</p>
                <p className="text-subtitle">Relajación - Antiestres</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <Divider />
      <div className="padding">
        <h3 className="subtitle">Ejercicios de hoy</h3>
        <Splide
          options={{
            type: "loop",
            gap: "2rem",
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="card altcard" onClick={() => goTo2()}>
              <img
                className="img todayImage"
                src="src/assets/images/run.jpg"
                alt="Image 1"
              />
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Ejercicios de yoga</p>
                <p className="text-subtitle">Relajación - Antiestres</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card altcard" onClick={() => goTo2()}>
              <img
                className="img todayImage"
                src="src/assets/images/stretch.png"
                alt="Image 2"
              />
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Ejercicios de yoga</p>
                <p className="text-subtitle">Relajación - Antiestres</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <h3 className="subtitle">Recomendados para ti</h3>
        <Splide
          className="customSplide"
          options={{
            type: "loop",
            gap: "1rem",
            padding: {
              right: "10rem",
            },
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="card">
              <div className="img-container" onClick={() => goTo2()}>
                <img
                  className="img todayImage"
                  src="src/assets/images/run.jpg"
                  alt="Image 1"
                />
              </div>
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Meditación</p>
                <p className="text-subtitle">Antiestres</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="img-container" onClick={() => goTo2()}>
                <img
                  className="img todayImage"
                  src="src/assets/images/stretch.png"
                  alt="Image 2"
                />
              </div>
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Ejercicios de yoga</p>
                <p className="text-subtitle">Relajación - Antiestres</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            padding: {
              right: "10rem",
            },
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="card">
              <div className="img-container" onClick={() => goTo3()}>
                <img
                  className="img todayImage"
                  src="src/assets/images/run.jpg"
                  alt="Image 1"
                />
              </div>
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Meditación</p>
                <p className="text-subtitle">Antiestres</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="card">
              <div className="img-container" onClick={() => goTo3()}>
                <img
                  className="img todayImage"
                  src="src/assets/images/stretch.png"
                  alt="Image 2"
                />
              </div>
              <div className="card-text">
                <p className="text-time">5 minutos</p>
                <p className="text-title">Ejercicios de yoga</p>
                <p className="text-subtitle">Relajación - Antiestres</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <Divider />
      <div className="padding homeFooter">
        <h3 className="subtitle">Herramientas Gestión del estrés</h3>
        <div className="cardContainer">
          <div className="card simpleAltcard">
            <div className="img-container" onClick={() => goTo3()}>
              <img
                className="img todayImage"
                src="src/assets/images/run.jpg"
                alt="Image 1"
              />
            </div>
            <div className="card-text">
              <p className="text-time">5 minutos</p>
              <p className="text-title">Ejercicios de yoga</p>
              <p className="text-subtitle">Relajación - Antiestres</p>
            </div>
          </div>
          <div className="card simpleAltcard">
            <div className="img-container" onClick={() => goTo3()}>
              <img
                className="img todayImage"
                src="src/assets/images/run.jpg"
                alt="Image 1"
              />
            </div>
            <div className="card-text">
              <p className="text-time">5 minutos</p>
              <p className="text-title">Ejercicios de yoga</p>
              <p className="text-subtitle">Relajación - Antiestres</p>
            </div>
          </div>
          <div className="card simpleAltcard">
            <div className="img-container" onClick={() => goTo3()}>
              <img
                className="img todayImage"
                src="src/assets/images/run.jpg"
                alt="Image 1"
              />
            </div>
            <div className="card-text">
              <p className="text-time">5 minutos</p>
              <p className="text-title">Ejercicios de yoga</p>
              <p className="text-subtitle">Relajación - Antiestres</p>
            </div>
          </div>
          <div className="card simpleAltcard">
            <div className="img-container" onClick={() => goTo3()}>
              <img
                className="img todayImage"
                src="src/assets/images/run.jpg"
                alt="Image 1"
              />
            </div>
            <div className="card-text">
              <p className="text-time">5 minutos</p>
              <p className="text-title">Ejercicios de yoga</p>
              <p className="text-subtitle">Relajación - Antiestres</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
