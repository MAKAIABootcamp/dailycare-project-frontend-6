import "./styles.scss";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src="public/logo-daily-care.webp" className="loader" />
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
