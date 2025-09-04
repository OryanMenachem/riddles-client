import { useState } from "react";
import { sendHttpReq, parseJWT } from "../utilities/helpers";
import { saveToLocalStorage } from "../utilities/storage";

export function AuthForm({ mode }: { mode: string }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="form container-form">
      <label className="label username-label" htmlFor="username">
        Username
      </label>
      <input
        className="input username-input"
        type="text"
        name="username"
        required
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
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn submit-btn"
        onClick={() => {
          authManager(mode, {
            username,
            password,
          });
        }}
      >
        {mode}
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

async function authManager(mode: string, credentials: object) {
  const token = await getToken(mode, credentials);
  saveToLocalStorage("token", token);
  const decodedToken = parseJWT(token)
  
}
