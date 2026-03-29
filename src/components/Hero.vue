<template>
  <header id="accueil" class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <span class="hero-subtitle">Portfolio de</span>
      <h1 class="hero-title">{{ profile.name }}</h1>
      <h2 class="hero-role">{{ profile.title }}</h2>
      <p class="hero-desc">{{ profile.description }}</p>
      <div class="hero-buttons">
        <a href="#projets" class="btn btn-primary">Voir mes projets</a>
        <a href="#contact" class="btn btn-outline">Me contacter</a>
      </div>
    </div>
    <div class="hero-shape"></div>
  </header>
</template>

<script setup>
defineProps({
  profile: {
    title: String,
    desc: String,
    techs: Array,
    image: String,
    link: String
}}
);
</script>

<style scoped>
.hero {
  height: 100vh;
  background: url('/2.png') no-repeat center center/cover;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(12, 10, 5, 0.9) 0%, rgba(71, 101, 43, 0.7) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  animation: fadeIn Up 1s ease-out;
}

.hero-subtitle {
  display: block;
  color: var(--color-gold);
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.hero-role {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ddd;
  margin-bottom: 1.5rem;
}

.hero-desc {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  color: #ccc;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 100vh;
    padding-top: 100px; /* Compensation navbar */
    padding-bottom: 50px;
  }

  .hero-title {
    font-size: 2.5rem; /* Réduit de 4rem à 2.5rem */
    line-height: 1.1;
  }

  .hero-role {
    font-size: 1.2rem;
  }

  .hero-desc {
    font-size: 1rem;
    padding: 0 10px;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 2rem auto 0;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>