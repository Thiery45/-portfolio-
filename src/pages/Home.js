// src/pages/Home.js
import React from 'react';
import profilePic from '../assets/profile.jpg'; // Importation d'une image statique depuis 'assets'

const Home = () => (
  <div className="home">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h1>Bienvenue, je suis [Votre Nom]</h1>
    <p>
      Étudiant en Master 2 en Intelligence Artificielle, passionné par la data science et le machine learning.
    </p>
    <button className="btn-primary">Voir mes projets</button>
  </div>
);

export default Home;
