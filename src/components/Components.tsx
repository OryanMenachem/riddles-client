export function AuthFrom({ mode }: { mode: string }) {
  return (
    <form
      action={`http://localhost:3000/auth/${mode}`}
      className="form container-form"
      method="post"
    >
      
      <label className="label username-label" htmlFor="username">
        Username
      </label>
      <input
        className="input username-input"
        type="text"
        name="username"
        required
      />

      <label className="label password-label" htmlFor="password">
        Password
      </label>
      <input
        className="input password-input"
        type="password"
        name="password"
        required
      />

      <button className="btn submit-btn" type="submit">
        {mode}
      </button>
    </form>
  );
}
