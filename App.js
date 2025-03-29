import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import SignupForm from "./signupform"; 
import LoginForm from "./loginform"; 
import HomePage from "./Homepage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route par défaut vers la page d'accueil */}
        <Route path="/" element={<Navigate to="/HomePage" />} />

        {/* Route vers la page d'accueil */}
        <Route path="/HomePage" element={<HomePage />} />

        {/* Route vers la page de connexion */}
        <Route path="/loginform" element={<LoginForm />} />

        {/* Route vers la page d'inscription */}
        <Route path="/signupform" element={<SignupForm />} />

        {/* Redirection pour toute autre route */}
        <Route path="*" element={<Navigate to="/HomePage" />} />
      </Routes>
    </Router>
  );
}

export default App;

