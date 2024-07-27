// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Salon de Coiffure</h1>
          <nav>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Galerie</a></li>
              <li><a href="#testimonials">Témoignages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <img 
              src="https://cdn.leonardo.ai/users/bcb8c2a4-8718-4560-af80-ee111c2226a9/generations/26fcf918-ef40-4673-a4ed-32b0d24b61fd/Default_A_vibrant_and_bustling_African_hair_salon_with_bold_co_3..jpg" 
              alt="Salon de coiffure" 
              className="nav-photo" 
            />
          </nav>
        </div>
      </header>
      
      <section id="home">
        <div className="container">
          <h2>Bienvenue à notre salon de coiffure</h2>
          <p>Nous offrons les meilleurs services de coiffure en ville.</p>
        </div>
      </section>
      
      <section id="services">
        <div className="container">
          <h2>Nos Services</h2>
          
          <div className="service">
            <h3>Queue de cheval</h3>
            <p>La queue de cheval haute et élégante incarne la coiffure la plus polyvalente qui soit. Moderne, sophistiquée, et résolument cool, elle s'adapte sans effort à chaque instant de la journée. De l'aube au crépuscule, elle rehausse votre allure avec une grâce intemporelle, vous offrant une beauté saisissante à toute heure.</p>
            <div className="service-images">
              <img 
                src="https://i.pinimg.com/564x/63/80/f2/6380f207b632595630db8f24bf86df5b.jpg" 
                alt="Queue de cheval" 
              />
              <img 
                src="https://i.pinimg.com/564x/d1/8e/76/d18e76e650d07110d729adaaeff04ea1.jpg" 
                alt="Queue de cheval vue 2" 
              />
              <img 
                src="https://i.pinimg.com/564x/3e/79/8d/3e798d2e6046bf1d4d6b6db1000225f7.jpg" 
                alt="Queue de cheval vue 3" 
              />
            </div>
          </div>
          
          <div className="service">
            <h3>Knotless braids</h3>
            <p>Les knotless braids, ou "tresses sans nœud", sont des nattes individuelles réparties sur toute la chevelure, sans nœud à la racine. Réalisées en tressant d'abord les cheveux naturels puis en ajoutant des mèches synthétiques, elles offrent de nombreux avantages : moins de stress sur le cuir chevelu, adaptées à tous les types de cheveux, et maintiennent les cheveux en place de manière sécurisée. Elles constituent une coiffure protectrice durable, pouvant être portées pendant plusieurs semaines avec un bon entretien.</p>
            <div className="service-images">
              <img 
                src="https://i.pinimg.com/564x/fe/fd/02/fefd02142cabccf339647fe20a49b5f4.jpg" 
                alt="Knotless braids vue 1" 
              />
              <img 
                src="https://i.pinimg.com/564x/b0/c0/d6/b0c0d6730e66238556b81a5e38bca00b.jpg" 
                alt="Knotless braids vue 2" 
              />
              <img 
                src="https://i.pinimg.com/564x/95/57/4c/95574c8f9674cf9bf2a5b9cdf68d33fa.jpg" 
                alt="Knotless braids vue 3" 
              />
            </div>
          </div>
          
          <div className="service">
            <h3>Crochet</h3>
            <p>Les crochet braids, ou tresses au crochet, sont une méthode élégante de coiffure protectrice où des extensions sont ajoutées à l'aide d'un crochet spécial. Elles offrent une protection optimale pour les cheveux naturels, une polyvalence inégalée en matière de styles, une installation rapide et un entretien facile. Légères et confortables, les crochet braids permettent de changer de look tout en préservant la santé des cheveux.</p>
            <div className="service-images">
              <img 
                src="https://i.pinimg.com/564x/e5/6a/aa/e56aaad51551d41db72625ffa98da667.jpg" 
                alt="Crochet braids vue 1" 
              />
              <img 
                src="https://i.pinimg.com/564x/ae/d3/4f/aed34fc25cca5603c584ddd80cae6e4d.jpg" 
                alt="Crochet braids vue 2" 
              />
              <img 
                src="https://i.pinimg.com/564x/dc/b5/71/dcb571a7f3d9220e3557026be44b1dc8.jpg" 
                alt="Crochet braids vue 3" 
              />
            </div>
          </div>
          
          <div className="service">
            <h3>Faux locs</h3>
            <p>Les faux locs, ou faux locks, offrent un style audacieux et protecteur en recréant l'apparence des dreadlocks sans engagement permanent. Réalisés en enroulant des mèches synthétiques ou naturelles autour de cheveux tressés, ils protègent les cheveux naturels, minimisent les risques de casse et offrent une grande variété de styles. Durable et nécessitant peu d'entretien, cette coiffure polyvalente permet d'adopter un look unique et captivant, alliant esthétique et praticité.</p>
            <div className="service-images">
              <img 
                src="https://i.pinimg.com/564x/28/d0/51/28d051ab3f77f545db69839a60ce9e7a.jpg" 
                alt="Faux locs vue 1" 
              />
              <img 
                src="https://i.pinimg.com/564x/b9/f5/74/b9f5749513e329248d4ea0c7f764b0d4.jpg" 
                alt="Faux locs vue 2" 
              />
              <img 
                src="https://i.pinimg.com/564x/4a/e2/f3/4ae2f3045df4f6802d4dedc67f3d9f9b.jpg" 
                alt="Faux locs vue 3" 
              />
            </div>
          </div>
          
          <div className="service">
            <h3>Vanille</h3>
            <p>La coiffure vanille allie élégance et praticité avec ses twists en spirale, offrant un style distinctif et raffiné. Ces torsades délicates, souvent ornées d'accessoires comme des perles, protègent les cheveux naturels tout en minimisant les risques de casse. Polyvalente et durable, elle permet de jouer avec différentes longueurs et styles tout en simplifiant l'entretien. Adopter la coiffure vanille, c'est choisir une allure unique et soignée, qui met en valeur votre texture naturelle avec une touche de sophistication.</p>
            <div className="service-images service-vanille">
              <img 
                src="https://i.pinimg.com/564x/22/bf/e4/22bfe47eb9a1c6a80495f73c5be9397b.jpg" 
                alt="Vanille vue 1" 
              />
              <img 
                src="https://i.pinimg.com/564x/ec/e7/1b/ece71bd02ec71aaf0f4a40bbce1b97fb.jpg" 
                alt="Vanille vue 2" 
              />
              <img 
                src="https://i.pinimg.com/564x/55/bb/31/55bb31d658bb3a00ac23d7848fcc1c7f.jpg" 
                alt="Vanille vue 3" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="gallery">
        <div className="container">
          <h2>Galerie</h2>
          <div className="gallery-container">
            <div className="gallery-slide">
              <div className="gallery-item">
                <img 
                  src="https://i.pinimg.com/564x/63/80/f2/6380f207b632595630db8f24bf86df5b.jpg" 
                  alt="Galerie coupe de cheveux 1" 
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="https://i.pinimg.com/564x/d1/8e/76/d18e76e650d07110d729adaaeff04ea1.jpg" 
                  alt="Galerie coupe de cheveux 2" 
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="https://i.pinimg.com/564x/3e/79/8d/3e798d2e6046bf1d4d6b6db1000225f7.jpg" 
                  alt="Galerie coupe de cheveux 3" 
                />
              </div>
            </div>
            <div className="gallery-slide">
              <div className="gallery-item">
                <img 
                  src="https://i.pinimg.com/564x/fe/fd/02/fefd02142cabccf339647fe20a49b5f4.jpg" 
                  alt="Galerie coloration 1" 
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="https://i.pinimg.com/564x/b0/c0/d6/b0c0d6730e66238556b81a5e38bca00b.jpg" 
                  alt="Galerie coloration 2" 
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="https://i.pinimg.com/564x/95/57/4c/95574c8f9674cf9bf2a5b9cdf68d33fa.jpg" 
                  alt="Galerie coloration 3" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="testimonials">
        <div className="container">
          <h2>Témoignages</h2>
          <div className="testimonial">
            <p>"Excellent service, très satisfait de ma coupe !" - Marie D.</p>
          </div>
          <div className="testimonial">
            <p>"Une expérience agréable, je recommande vivement !" - Jean P.</p>
          </div>
          <div className="testimonial">
            <p>"Les coiffures sont toujours à la mode et les produits sont de qualité." - Emma L.</p>
          </div>
        </div>
      </section>
      
      <section id="contact">
        <div className="container">
          <h2>Contactez-nous</h2>
          <form action="submit_form" method="post">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="address">Adresse :</label>
            <input type="text" id="address" name="address" required />
            
            <label htmlFor="city">Ville :</label>
            <input type="text" id="city" name="city" required />
            
            <label htmlFor="postalcode">Code Postal :</label>
            <input type="text" id="postalcode" name="postalcode" required />
            
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </section>
      
      <footer>
        <div className="container">
          <p>&copy; 2024 Salon de Coiffure. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
