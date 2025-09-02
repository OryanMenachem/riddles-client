import Navbar from "./Navbar";

export default function MainHeader() {
  return (
    <header className="header main-header">
      <Logo />
      <Navbar />
    </header>
  );
}

function Logo() {
  return <div className="logo">RiddlesGame</div>;
}
