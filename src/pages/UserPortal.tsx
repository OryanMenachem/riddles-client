import MainHeader from "../components/Header";

export default function UserPortal() {
  return (
    <div className="page userPortal-page">
      <MainHeader />
      <h1 className="title userPortal-title">User Portal</h1>
      <div className="menu user-menu">
        <button className="btn play-btn">Play </button>
        <button className="btn view-best-time-btn">View best time</button>
        <button className="btn add-riddle-btn">Add a riddle</button>
        <button className="btn edit-riddle-btn">Edit a riddle</button>
        <button className="btn delete-riddle-btn">Delete a riddle</button>
      </div>
    </div>
  );
}
