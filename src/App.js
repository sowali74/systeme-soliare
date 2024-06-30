import React, { useState } from 'react';
import './App.css';

const planets = {
  Mercure: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/911bca78-7308-49ad-9955-35284e6a603d/Default_la_plante_Mercure_1.jpg',
    description: "La plus proche du Soleil.\nPetite, avec une surface cratérisée semblable à celle de la Lune.\nTempératures extrêmes en raison de son atmosphère quasi inexistante."
  },
  Vénus: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/d1b90925-3545-4ad7-b9bd-573fcf095730/Default_la_plante_Vnus_0.jpg',
    description: "Deuxième planète la plus proche du Soleil.\nAtmosphère épaisse composée principalement de dioxyde de carbone, causant un effet de serre intense.\nSurface volcanique avec des températures extrêmement élevées."
  },
  Terre: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/7d195798-5ba0-46d3-b825-bac78485a977/Default_planette_terre_3.jpg',
    description: "Troisième planète du Soleil et la seule connue pour abriter la vie.\nAtmosphère riche en oxygène et en azote.\nClimat tempéré avec des océans liquides."
  },
  Mars: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/7be317d2-2eae-4b65-ac86-1e7b0889700f/Default_la_plante_Mars_1.jpg',
    description: "Quatrième planète du Soleil, souvent appelée la \"planète rouge\" en raison de la rouille (oxyde de fer) sur sa surface.\nPossède des calottes polaires de glace et des traces d'eau liquide dans le passé.\nAtmosphère mince principalement composée de dioxyde de carbone."
  },
  Jupiter: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/1ecd4d6c-b3dd-4dd1-b028-7d88fd9d095b/Default_la_plante_Jupiter_0.jpg',
    description: "Cinquième planète du Soleil et la plus grande du système solaire.\nComposée principalement d'hydrogène et d'hélium.\nPossède une Grande Tache Rouge, une tempête massive qui dure depuis au moins 400 ans."
  },
  Saturne: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/b6917599-7689-4b30-ae37-568788f56532/Default_la_plante_Saturne_1.jpg',
    description: "Sixième planète du Soleil, célèbre pour ses anneaux spectaculaires faits de glace et de roche.\nComposée principalement d'hydrogène et d'hélium.\nPossède de nombreuses lunes, dont Titan, qui a une atmosphère dense."
  },
  Uranus: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/6f3c6682-8fd8-4ffd-82dc-03ad3008332d/Default_la_plante_Uranus_1.jpg',
    description: "Septième planète du Soleil.\nUnique par son axe de rotation fortement incliné, quasiment parallèle au plan de son orbite.\nAtmosphère composée de méthane, d'hydrogène et d'hélium, lui donnant une couleur bleu-vert."
  },
  Neptune: {
    image: 'https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/908e3a91-b100-4726-80ff-7427496a8dc7/Default_la_plante_Neptune_0.jpg',
    description: "Huitième et dernière planète du Soleil.\nAtmosphère similaire à celle d'Uranus, avec une teinte bleue due au méthane.\nConnue pour ses vents extrêmement violents et sa Grande Tache Sombre, similaire à la Grande Tache Rouge de Jupiter."
  }
};

function App() {
  const [planet, setPlanet] = useState('');
  const [planetData, setPlanetData] = useState(null);

  const handleSearch = () => {
    if (planets[planet]) {
      setPlanetData(planets[planet]);
    } else {
      setPlanetData(null);
    }
  };

  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src="https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/643db157-a591-4a10-b6d4-5119fccbeb33/643db157-a591-4a10-b6d4-5119fccbeb33.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="App-header">
        <h1>Bienvenue dans l'univers de COSMOSSIENNE 🌌</h1>
        <p>
          Bonjour ! Je m'appelle Ali SOW. Je suis ravi de te présenter mon application COSMOSSIENNE, une porte d'entrée fascinante vers les mystères du système solaire.
        </p>
        <p>
          Si, comme moi, tu es passionné par les merveilles de l'univers, alors tu es au bon endroit ! Ton intérêt pour l'exploration des planètes fait de toi quelqu'un de vraiment spécial.
        </p>
        <p>
          Prêt à embarquer pour un voyage cosmique ? Choisis l'une des planètes ci-dessous et plonge-toi dans l'aventure :
        </p>
        <div className="planet-list">
          Mercure 🪐 Vénus 🌟 Terre 🌍 Mars 🚀 Jupiter 🌪️ Saturne 💫 Uranus ❄️ Neptune 🌊
        </div>
        <input
          type="text"
          placeholder="Entrez le nom d'une planète"
          value={planet}
          onChange={(e) => setPlanet(e.target.value)}
        />
        <button onClick={handleSearch}>Rechercher</button>
        {planetData && (
          <div className="planet-info">
            <img src={planetData.image} alt={planet} className="planet-image" />
            <p>{planetData.description}</p>
          </div>
        )}
        <div className="contact-info">
          <p>Si tu trouves cette application mignonne, fais-le moi savoir sur WhatsApp <strong>0745319799</strong></p>
        </div>
        <div className="photo-container">
          <video autoPlay loop muted className="profile-video">
            <source src="https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/29d5fe10-0259-4c23-80ab-550ee6a0e529/29d5fe10-0259-4c23-80ab-550ee6a0e529.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Ali SOW</p>
        </div>
      </header>
    </div>
  );
}

export default App;
