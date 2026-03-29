<template>
  <nav class="navbar">
    <div class="container nav-container">
      <!-- LOGO -->
      <a href="#" class="logo">CT<span>.</span></a>

      <!-- BOUTON BURGER (Visible uniquement sur mobile) -->
      <button class="burger-btn" @click="toggleMenu" aria-label="Menu">
        <span class="bar" :class="{ active: isMenuOpen }"></span>
        <span class="bar" :class="{ active: isMenuOpen }"></span>
        <span class="bar" :class="{ active: isMenuOpen }"></span>
      </button>

      <!-- LIENS DE NAVIGATION -->
      <ul class="nav-links" :class="{ open: isMenuOpen }">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" @click="closeMenuOnMobile">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  links: Array
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Empêcher le scroll du body quand le menu est ouvert
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto';
};

const closeMenuOnMobile = () => {
  if (window.innerWidth <= 768) {
    isMenuOpen.value = false;
    document.body.style.overflow = 'auto';
  }
};
</script>

<style scoped>
/* --- BASE (Desktop) --- */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(12, 10, 5, 0.95);
  height: var(--nav-height, 80px);
  display: flex;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  font-family: var(--font-heading);
  z-index: 1001; /* Au-dessus du menu mobile */
}

.logo span { color: var(--color-dell); }

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  color: #ccc;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s;
}

.nav-links a:hover { color: var(--color-gold); }

/* --- BURGER BUTTON (Caché sur Desktop) --- */
.burger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 1001;
  padding: 0;
}

.bar {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 0;
}

.bar:nth-child(1) { top: 0; }
.bar:nth-child(2) { top: 50%; transform: translateY(-50%); }
.bar:nth-child(3) { bottom: 0; }

/* Animation du Burger en Croix */
.bar.active:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  background-color: var(--color-gold);
}
.bar.active:nth-child(2) {
  opacity: 0;
}
.bar.active:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
  background-color: var(--color-gold);
}

/* --- RESPONSIVE MOBILE (< 768px) --- */
@media (max-width: 768px) {
  .burger-btn {
    display: block; /* Affiche le bouton burger */
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%; /* Caché hors écran à droite */
    width: 70%; /* Largeur du menu */
    max-width: 300px;
    height: 100vh;
    background: var(--color-blackout);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transition: right 0.4s ease-in-out;
    box-shadow: -5px 0 15px rgba(0,0,0,0.5);
    padding: 2rem;
  }

  .nav-links.open {
    right: 0; /* Le menu glisse vers l'intérieur */
  }

  .nav-links a {
    font-size: 1.2rem;
    color: white;
  }
  
  .nav-links a:hover {
    color: var(--color-gold);
  }
}
</style>