import { AdminPortalNavbar } from "../../components/Navbar";
import { sendHttpReq } from "../../utilities/helpers";
import { useState, useEffect } from "react";

export default function ViewRiddles() {
  const [riddles, setRiddles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRiddles() {
      const endPoint = "riddles";
      const res = await sendHttpReq(endPoint, "GET");
      setRiddles(res);
    }

    fetchRiddles();
  }, []);
  
  return (
    <div className="riddles-container">
      <AdminPortalNavbar />
      <h1 className="title riddles--title">Riddles</h1>
      {riddles.map((r: any) => (
        <Riddle key={r._id} riddel={r} />
      ))}
    </div>
  );
}

function Riddle({ riddel: riddle }: { riddel: any }) {
  return (
    <div className="riddle-card">
      <p>Id - {riddle._id}</p>
      <p>Category - {riddle.category}</p>
      <p>Difficulty - {riddle.difficulty}</p>
      <p>RiddleDescription - {riddle.riddleDescription}</p>
      <p>Correct answer - {riddle.correctAnswer}</p>
    </div>
  );
}
