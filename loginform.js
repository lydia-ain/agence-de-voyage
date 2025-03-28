import React from "react";
import { Link } from "react-router-dom"; // ✅ Import de Link
import "./loginform.css";
import backgroundVideo from "./background2.mp4"; 

function LoginForm() {
  return (
    <div className="login-wrapper">
      {/* Vidéo en arrière-plan */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Contenu du formulaire */}
      <div className="login-container">
        <h2 className="login-title">Connexion</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Mot de passe" className="login-input" />
          <button type="submit" className="login-button">Se connecter</button>
        </form>

        {/* Lien vers la page d'inscription */}
        <p className="signup-link">
          <Link to="/signup">Vous n'avez pas de compte ? Inscrivez-vous</Link>
          <Link to="/signup">Mot de passe oublier?</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
