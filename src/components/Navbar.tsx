import { Link } from "react-router";

export default function MainNavbar() {
  return (
    <nav className="nav main-nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/leaderboard"}>Leaderboard</Link>
      <Link to={"/settings"}>Settings</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
}


export  function AdminPortalNavbar() {
  return (
    <nav className="nav  admin-portal--nav">
      <Link to={"/admin-portal"}>Admin Portal</Link>
    </nav>
  );
}
