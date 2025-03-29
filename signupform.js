import React from "react";
import { Link } from "react-router-dom"; // ✅ Import de Link
import "./singupform.css";
import backgroundVideo from "./background.mp4"; 

function SignupForm() {
  return (
    <div className="signup-wrapper">
      {/* Vidéo en arrière-plan */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
       {/* Flèche de retour à l'accueil */}
       <Link to="/" className="back-to-home">
        &#8592; 
      </Link>

      {/* Contenu du formulaire */}
      <div className="signup-container">
        <h2 className="signup-title">S'inscrire</h2>
        <form className="signup-form">
          <input type="text" placeholder="Nom" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Mot de passe" className="signup-input" />
          <input type="password" placeholder="Confirmer le mot de passe" className="signup-input" />
          <button type="submit" className="signup-button">S'inscrire</button>
        </form>

        {/* Lien vers la page de connexion */}
        <p className="login-link">
          <Link to="/loginform">Vous avez déjà un compte ?</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
