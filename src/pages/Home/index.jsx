import "./styles.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Divider from "../../components/Divider";
const Home = () => {
  return (
    <main>
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
            <div className="img-container">
              <img
                className="img"
                src="src/assets/images/run.jpg"
                alt="Image 1"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-container">
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
              <div className="img-container">
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
              <div className="img-container">
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
            padding: {
              right: "8rem",
            },
            pagination: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="card altcard">
              <img
                className="img"
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
            <div className="card altcard">
              <img
                className="img"
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
      </div>
    </main>
  );
};

export default Home;
