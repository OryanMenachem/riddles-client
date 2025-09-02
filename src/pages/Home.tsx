import MainHeader from "../components/Header";

export default function Home() {
  return (
    <div className="page home-page">
      <MainHeader />
      <h1 className="title riddlesGame-title">Riddles Game</h1>
      <p className="game-description">
        Challenge your knowledge with diverse questions across multiple
        categories
      </p>
      <div className="container-loginButtons">
        <button className="btn play-btn">Play</button>
        <button className="btn login-btn">Login</button>
        <button className="btn signUp-btn">SignUp</button>
      </div>
      <footer>
        <p className="copyright">© 2025 Riddles Game. All rights reserved</p>
      </footer>
    </div>
  );
}
