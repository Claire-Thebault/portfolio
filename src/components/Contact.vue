<template>
  <section id="contact" class="section-padding">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-info">
          <h2>Discutons de votre projet</h2>
          <p>Je suis actuellement à la recherche d'une alternance. N'hésitez pas à me contacter pour échanger sur vos besoins.</p>
          
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <span>{{ profile.email }}</span>
          </div>
            <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>{{ profile.phone }}</span>
          </div>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Rennes, France (Mobile)</span>
          </div>

          <div class="social-links">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="social-btn">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
        
        <form 
          action="https://formsubmit.co/claire.thebault2@gmail.com" 
          method="POST"
          class="contact-form"
        >
          <!-- Configuration cachée pour FormSubmit -->
          <input type="hidden" name="_subject" value="Nouveau message du Portfolio !">
          <input type="hidden" name="_captcha" value="false"> <!-- Désactive le captcha pour plus de propreté -->
          <input type="hidden" name="_template" value="table"> <!-- Rend le mail reçu plus joli -->
          

          <!-- Si vous ne mettez rien, FormSubmit affichera une page par défaut -->
          <input type="hidden" name="_next" value="https://claire-thebault.github.io/"> 

          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="votre@email.com" required />
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Votre message..." required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Envoyer le message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  socials: Array,
  profile: Array
});

</script>

<style scoped>
/* CONTACT */
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2 {
  font-size: 2.5rem;
  color: var(--color-blackout);
  margin-bottom: 1.5rem;
}

.contact-info > p {
  color: #666;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: var(--color-dell);
  font-weight: 600;
}

.info-item i {
  width: 40px;
  height: 40px;
  background: rgba(71, 101, 43, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-dell);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-btn {
  width: 50px;
  height: 50px;
  background: var(--color-blackout);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: 0.3s;
}

.social-btn:hover {
  background: var(--color-dell);
  transform: translateY(-5px);
}

/* FORMULAIRE */
.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: var(--radius);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-blackout);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  transition: 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-dell);
  box-shadow: 0 0 0 3px rgba(71, 101, 43, 0.1);
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr; /* Une seule colonne */
    gap: 3rem;
  }

  .contact-info h2 {
    font-size: 2rem;
  }

  .info-item {
    font-size: 1rem;
  }

  .social-links {
    justify-content: center; /* Centre les icônes */
  }
  
  .contact-form {
    padding: 1.5rem;
  }
}
</style>