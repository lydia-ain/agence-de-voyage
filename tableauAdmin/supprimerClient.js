import React, { useState } from "react";

const AdminDeleteClient = () => {
  const [clientId, setClientId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!clientId) {
      setMessage("Veuillez entrer un ID valide.");
      return;
    }
    try {
      const response = await fetch(`/api/clients/${clientId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erreur lors de la suppression du client");
      setMessage("Client supprimé avec succès !");
      setClientId("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Supprimer un client</h2>
      <label className="block mb-2">ID du client:</label>
      <input
        type="text"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={handleDelete} className="w-full bg-red-500 text-white p-2 rounded">
        Supprimer le client
      </button>
      {message && <p className="text-red-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default AdminDeleteClient;
