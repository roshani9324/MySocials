import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout"; // ⬅️ ye import missing tha

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost"

function Placeholder({ title }) {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "grid",
        placeItems: "center",
        color: "white",
        fontSize: "40px",
        fontFamily: "Space Grotesk",
      }}
    >
      {title}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Placeholder title="Terms" />} />
        <Route path="/privacy" element={<Placeholder title="Privacy" />} />

        {/* Dashboard — ab DashboardLayout ke andar wrapped */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/calendar" element={<Placeholder title="Calendar" />} />
          <Route path="/content" element={<Placeholder title="Content" />} />
          <Route
            path="/analytics"
            element={<Placeholder title="Analytics" />}
          />
          <Route path="/accounts" element={<Placeholder title="Accounts" />} />
          <Route path="/settings" element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
