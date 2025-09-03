import { AuthFrom } from "../components/Components";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function Auth() {
  const location = useLocation();
  const { mode } = location.state || {};
  return (
    <div className={`page ${mode}-page`}>
      <Header />
      <h1 className={`title ${mode}-title`}>{mode}</h1>
      <AuthFrom mode={mode} />
    </div>
  );
}
