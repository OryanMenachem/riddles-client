import { useState } from "react";
import { sendHttpReq, parseJWT } from "../utilities/helpers";
import { saveToLocalStorage } from "../utilities/storage";
import { useNavigate } from "react-router-dom";



export function AuthForm({ mode }: { mode: string }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <label className="label username-label" htmlFor="username">
        Username
      </label>
      <input
        className="input username-input"
        type="text"
        name="username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="label password-label" htmlFor="password">
        Password
      </label>
      <input
        className="input password-input"
        type="password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn submit-btn"
        disabled={isLoading}
        onClick={async () => {
          setIsLoading(true);
          try {
            const role = await authManager(mode, { username, password });
            if (role === "admin") {
              navigate("/admin-portal");
            } else if (role === "user") {
              navigate("/user-portal");
            } else {
              navigate("/");
            }
          } catch (error) {
            console.error("Authentication failed:", error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {isLoading ? "Loading..." : mode}
      </button>
    </div>
  );
}

async function getToken(mode: string, credentials: object) {
  const endPoint = `auth/${mode}`;
  const method = "POST";
  const res = await sendHttpReq(endPoint, method, credentials);
  const token = res.token;
  return token;
}

async function authManager(mode: string, credentials: object): Promise<string> {
  const token = await getToken(mode, credentials);
  saveToLocalStorage("token", token);
  const decodedToken = await parseJWT(token);
  return decodedToken.role;
}
