import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout"; // ⬅️ ye import missing tha

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost"
import Analytics from "./pages/Analytics/Analytics"
import Terms from "./pages/Terms/Terms"
import Privacy from "./pages/Privacy/Privacy"
import Settings from "./pages/Settings/Settings";
import Accounts from "./pages/Accounts/Accounts";
import Content from "./pages/Content/Content";
import Calendar from "./pages/Calendar/Calendar";
import Refunds from "./pages/Refunds/Refunds";
import Security from "./pages/Security/Security";
import Contact from "./pages/Contact/Contact";

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
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/security" element={<Security />} />

        {/* Dashboard — ab DashboardLayout ke andar wrapped */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/content" element={<Content />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
