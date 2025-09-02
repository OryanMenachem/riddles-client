export default function LoginSignup() {
  return (
    <div className="page login-page">
      <h1>Login</h1>
      <form action="#" className="form container-form">
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

        <button className="btn login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
