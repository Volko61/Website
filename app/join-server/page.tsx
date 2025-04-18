import React from 'react';

const JoinServerPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rejoindre le Serveur</h1>
      <p className="mb-4">Pour rejoindre notre serveur Minecraft, suivez les instructions ci-dessous :</p>
      <ol className="list-decimal list-inside mb-4">
        <li>Ouvrez Minecraft et allez dans le menu "Multijoueur".</li>
        <li>Cliquez sur "Ajouter un serveur".</li>
        <li>Entrez l'adresse du serveur : <code className="bg-gray-200 p-1 rounded">beta.openmc.fr</code></li>
        <li>Cliquez sur "Terminé" et sélectionnez le serveur dans la liste pour vous connecter.</li>
      </ol>
      <p>Amusez-vous bien sur notre serveur !</p>
    </div>
  );
};

export default JoinServerPage;
