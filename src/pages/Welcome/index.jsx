
const Welcome = () => {
  return (
    <main>
      <div className="container">
        <div className="background"></div>
        <h1>Bienvenido</h1>
        <h2>Elige tu rol</h2>
        <div className="icons">
          <div className="icon">
            <img src="icon1.png" alt="Icon 1" />
            <p>Admin</p>
          </div>
          <div className="icon">
            <img src="icon2.png" alt="Icon 2" />
            <p>Usuario</p>
          </div>
        </div>
      </div>
    </main>
);
}

export default Welcome
