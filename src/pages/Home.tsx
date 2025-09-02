import MainHeader from "../components/Header";
import { LoginButtons } from "../components/Button";

export default function Home() {
  return (
    <div className="page home-page">
      <MainHeader />
      <h1 className="title riddlesGame-title">Riddles Game</h1>
      <p className="game-description">
        Challenge your knowledge with diverse questions across multiple
        categories
      </p>
      <LoginButtons />
      <footer>
        <p className="copyright">© 2025 Riddles Game. All rights reserved</p>
      </footer>
    </div>
  );
}
