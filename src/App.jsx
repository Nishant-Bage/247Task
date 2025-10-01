import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import useIdleTimer from "./hooks/useIdleTimer";
import IdleLogoutModal from "./components/IdleLogoutModal";

const App = () => {
  const { user, logout } = useContext(AuthContext);

  const { showWarning, countdown, stayLoggedIn, logoutNow } = useIdleTimer({
    onLogout: logout,
  });

  return (
    <Router>
      {showWarning && (
        <IdleLogoutModal
          countdown={countdown}
          stayLoggedIn={stayLoggedIn}
          logoutNow={logoutNow}
        />
      )}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;