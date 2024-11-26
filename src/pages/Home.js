// src/pages/Home.js
import React from 'react';
import profilePic from '../assets/profile.png'; // L'image de profil
import './Home.css'; // Fichier CSS pour les styles de la page d'accueil

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h1>Bonjour, je suis Thiery !</h1>
          <p>
            Étudiant en Master 2 en Intelligence Artificielle, passionné par la Data Science et le Machine Learning.
          </p>
          <button className="cta-btn">Voir mes projets</button>
        </div>
      </header>

      <section className="about-section">
        <h2>À propos de moi</h2>
        <p>
          Je suis un étudiant enthousiaste en IA, passionné par la résolution de problèmes complexes et l'exploration de
          données. Mon objectif est de contribuer à des projets utilisant l'intelligence artificielle pour résoudre des
          défis réels.
        </p>
      </section>

      <section className="projects-section">
        <h2>Mes Projets</h2>
        <div className="project-cards">
          {/* Carte de projet 1 */}
          <div className="project-card">
            <img src="https://via.placeholder.com/250" alt="Project 1" />
            <h3>Projet 1: Analyse de Données</h3>
            <p>Un projet d'analyse de données utilisant Python et Pandas.</p>
          </div>
          {/* Carte de projet 2 */}
          <div className="project-card">
            <img src="https://via.placeholder.com/250" alt="Project 2" />
            <h3>Projet 2: Prédiction avec Machine Learning</h3>
            <p>Prédictions basées sur un modèle d'apprentissage supervisé avec Scikit-Learn.</p>
          </div>
          {/* Carte de projet 3 */}
          <div className="project-card">
            <img src="https://via.placeholder.com/250" alt="Project 3" />
            <h3>Projet 3: Classification d'images</h3>
            <p>Utilisation de TensorFlow pour classifier des images avec un réseau neuronal convolutif.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Contactez-moi via mes réseaux sociaux</p>
        <div className="social-links">
          <a href="https://github.com/Thiery45" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/thiery/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

