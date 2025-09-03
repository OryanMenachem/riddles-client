import { AuthForm } from "../components/Auth";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function Auth() {
  const location = useLocation();
  const { mode } = location.state || {};
  return (
    <div className={`page ${mode}-page`}>
      <Header />
      <h1 className={`title ${mode}-title`}>{mode}</h1>
      <AuthForm mode={mode} />
    </div>
  );
}
