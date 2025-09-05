import MainHeader from "../components/Header";

import { useNavigate } from "react-router-dom";

export default function AdminPortal() {
  const navigate = useNavigate();

  return (
    <div className="page adminPortal-page">
      <MainHeader />
      <h1 className="title adminPortal-title">Admin Portal</h1>
      <div className="menu admin-menu">
        <button
          className="btn view-all-riddles-btn"
          onClick={() => navigate("/view-riddles")}
        >
          View all riddles
        </button>
        <button className="btn add-riddle-btn">Add a riddle</button>
        <button className="btn edit-riddle-btn">Edit a riddle</button>
        <button className="btn delete-riddle-btn">Delete a riddle</button>
      </div>
    </div>
  );
}
