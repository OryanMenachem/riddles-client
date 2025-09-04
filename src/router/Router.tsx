import { BrowserRouter, Routes, Route } from "react-router";
import {
  Home,
  Play,
  Auth,
  AdminPortal,
  UserPortal,
  Profile,
  Leaderboard,
  Settings,
  About,
} from "../pages";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin-portal" element={<AdminPortal />} />
          <Route path="/user-portal" element={<UserPortal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
