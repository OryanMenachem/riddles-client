import MainNavbar from "./Navbar";

export default function MainHeader() {
  return (
    <header className="header main-header">
      <Logo />
      <MainNavbar />
    </header>
  );
}

function Logo() {
  return <div className="logo">Riddles</div>;
}
