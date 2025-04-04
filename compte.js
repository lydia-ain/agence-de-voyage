import React from "react";
import "./compte.css";
import profilePhoto from "./profile-photo.jpg";
import { FaPlane, FaHotel, FaLandmark, FaFlag } from "react-icons/fa";

const ReservationItem = ({ icon, text, status }) => {
  return (
    <div className={`reservation-item ${status}`}>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
      <div className={`statut-box ${status}`}>
        {status === "confirmed" ? "Confirmé" : "En attente"}
      </div>
    </div>
  );
};

const PastReservationItem = ({ icon, text, date }) => {
  return (
    <div className="reservation-item past">
      <div className="icon">{icon}</div>
      <div className="text">
        {text} ({date})
      </div>
    </div>
  );
};

const CountryVisitedItem = ({ icon, country, visits, lastVisit }) => {
  return (
    <li className="country-item">
      <div className="icon">{icon}</div>
      <span>
        {country} - {visits} visites (Dernière: {lastVisit})
      </span>
    </li>
  );
};

function compte() {
  return (
    <div className="app">
      <div className="profile-card">
        <header className="profile-header">
          <div className="avatar-container">
            <img
              src={profilePhoto}
              alt="Sophie Martin"
              className="profile-avatar"
            />
          </div>
          <h1>Sophie Martin</h1>
          <div className="profile-meta">
            <span>@sophiemartin</span>
            <span>Paris, France</span>
            <a href="mailto:sophie.martin@example.com">
              sophie.martin@example.com
            </a>
            <span>Inscrit depuis January 2022</span>
          </div>
        </header>

        <div className="divider"></div>

        <div className="stats-grid">
          <div className="stat-item">
            <h3>Vols Réservés</h3>
            <p className="stat-value">8</p>
            <p className="stat-change positive">↑ 2% from last month</p>
          </div>

          <div className="stat-item">
            <h3>Hôtels Réservés</h3>
            <p className="stat-value">6</p>
            <p className="stat-change positive">↑ 1% from last month</p>
          </div>

          <div className="stat-item">
            <h3>Voyages organisés</h3>
            <p className="stat-value">12</p>
            <p className="stat-change positive">↑ 3% from last month</p>
          </div>

          <div className="stat-item">
            <h3>Pays Visités</h3>
            <p className="stat-value">4</p>
            <p className="stat-change positive">↑ 1% from last month</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="personal-info">
          <h3>Informations Personnelles</h3>
          <div className="info-row">
            <span>Nom Complet</span>
            <strong>Sophie Martin</strong>
          </div>
          <div className="info-row">
            <span>Adresse</span>
            <strong>15 Rue de la Paix, 75001 Paris</strong>
          </div>
          <div className="info-row">
            <span>Email</span>
            <strong>sophie.martin@example.com</strong>
          </div>
          <div className="info-row">
            <span>Date de Naissance</span>
            <strong>15/04/1988</strong>
          </div>
        </div>

        <div className="divider"></div>
        <div className="reservations">
          <div className="reservations-section">
            <h3>Réservations à Venir</h3>
            <ReservationItem
              icon={<FaPlane />}
              text="Barcelone - 250,00€"
              status="confirmed"
            />
            <ReservationItem
              icon={<FaHotel />}
              text="Hôtel Royal, Barcelone - 780,00€"
              status="confirmed"
            />
            <ReservationItem
              icon={<FaLandmark />}
              text="Tour Sagrada Familia - 45,00€"
              status="pending"
            />
          </div>
          <div className="past-reservations">
            <h3>Réservations Passées</h3>

            <PastReservationItem
              icon={<FaPlane />}
              text="Vol pour Rome - 180,00€"
              date="Mars 2023"
            />
            <PastReservationItem
              icon={<FaHotel />}
              text="Hôtel Milano - 650,00€"
              date="Mars 2023"
            />
            <PastReservationItem
              icon={<FaLandmark />}
              text="Tour du Colisée - 50,00€"
              date="Mars 2023"
            />
          </div>

          <div className="countries-visited">
            <h3>Pays Visités</h3>
            <ul>
              <CountryVisitedItem
                icon={<FaFlag />}
                country="Italie"
                visits={3}
                lastVisit="Mars 2023"
              />
              <CountryVisitedItem
                icon={<FaFlag />}
                country="Grèce"
                visits={2}
                lastVisit="Août 2022"
              />
              <CountryVisitedItem
                icon={<FaFlag />}
                country="Portugal"
                visits={1}
                lastVisit="Décembre 2022"
              />
              <CountryVisitedItem
                icon={<FaFlag />}
                country="Allemagne"
                visits={1}
                lastVisit="Octobre 2022"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default compte;
