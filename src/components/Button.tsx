import { useNavigate } from "react-router";

export function LoginButtons() {
  const navigate = useNavigate();
  return (
    <div className="container-loginButtons">
      <button className="btn play-btn" onClick={() => navigate("/play")}>
        Play
      </button>
      <button className="btn login-btn" onClick={() => navigate("/login")}>
        Login
      </button>
      <button className="btn signUp-btn" onClick={() => navigate("/signUp")}>
        SignUp
      </button>
    </div>
  );
}
