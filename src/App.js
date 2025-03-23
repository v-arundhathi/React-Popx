import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignInPage from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;

