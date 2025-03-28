import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SignupForm from "./signupform"; 
import LoginForm from "./loginform"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Route vers la page d'inscription */}
        <Route path="/signupform" element={<SignupForm/>} />

        {/* Route vers la page de connexion */}
        <Route path="/loginform" element={<LoginForm />} />

        {/* Redirection par défaut vers l'inscription */}
        <Route path="*" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
