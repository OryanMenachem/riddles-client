import { useState } from "react";

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
          sendHttpReq(`http://localhost:3000/auth/${mode}`, "POST", {
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

export async function sendHttpReq(url: string, method: string, body = {}) {
  let res;
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    body: "",
  };

  if (method.toUpperCase() !== "GET" && body !== null) {
    options.body = JSON.stringify(body);
  }

  // await new Promise((res) => setTimeout(res, 1000));

  try {
    res = await fetch(url, options);

    if (res.ok) {
      res = await res.json();
      const token = res.token;
      localStorage.setItem("token", JSON.stringify(token));
      parseJWT();
    }
  } catch (error) {
    console.log(error);

    return error;
  }
}

function parseJWT() {
  let token = localStorage.getItem("token");
  if (token) {
    const payload = token.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decoded);
  }
  return null;
}
