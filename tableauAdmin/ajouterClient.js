import React, { useState } from "react";

const AdminAddClient = () => {
  const [clientData, setClientData] = useState({
    id: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    dateNaissance: "",
    adresse: "",
    motDePasse: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!clientData.id || !clientData.nom || !clientData.prenom || !clientData.email || !clientData.motDePasse) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });
      
      if (!response.ok) throw new Error("Erreur lors de l'ajout du client");
      setMessage("Client ajouté avec succès !");
      setClientData({
        id: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        dateNaissance: "",
        adresse: "",
        motDePasse: "",
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Ajouter un client</h2>
      {message && <p className="text-red-500 text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(clientData).map((key) => (
          <div key={key}>
            <label className="block capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
            <input
              type={key === "motDePasse" ? "password" : key === "dateNaissance" ? "date" : "text"}
              name={key}
              value={clientData[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Ajouter le client
        </button>
      </form>
    </div>
  );
};

export default AdminAddClient;
