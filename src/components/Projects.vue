<template>
  <section id="projets" class="section-padding">
    <div class="container">
      <h2 class="section-title">Projets</h2>
      
      <div class="carousel-3d-container">
        <!-- Conteneur des cartes -->
        <div class="carousel-track">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id"
            class="carousel-card"
            :class="getCardClass(index)"
            @click="handleCardClick(project)" 
          >
            
            <div class="card-inner">
              <div class="card-image-wrapper">
                <img :src="project.image" :alt="project.title" />
                <div class="card-overlay">
                </div>
              </div>
              <div class="card-body">
                <h3>{{ project.title }}</h3>
                <p>{{ project.desc }}</p>
                <div class="tech-stack-mini">
                  <span v-for="tech in project.techs.slice(0, 3)" :key="tech" class="tech-tag-mini">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contrôles -->
        <button @click="prevProject" class="carousel-nav-btn prev"><i class="fas fa-chevron-left"></i></button>
        <button @click="nextProject" class="carousel-nav-btn next"><i class="fas fa-chevron-right"></i></button>
      </div>

      <!-- Indicateurs -->
      <div class="carousel-indicators">
        <span 
          v-for="(project, index) in projects" 
          :key="project.id"
          :class="['dot', { active: index === currentProjectIndex }]"
          @click="goToProject(index)">
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['open-project']);

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

const currentProjectIndex = ref(1);

const nextProject = () => {
  if (currentProjectIndex.value < props.projects.length - 1) {
    currentProjectIndex.value++;
  } else {
    currentProjectIndex.value = 0;
  }
};

const prevProject = () => {
  if (currentProjectIndex.value > 0) {
    currentProjectIndex.value--;
  } else {
    currentProjectIndex.value = props.projects.length - 1;
  }
};

const goToProject = (index) => {
  currentProjectIndex.value = index;
};

const handleCardClick = (project) => {
  emit('open-project', project);
};

const getCardClass = (index) => {
  const diff = index - currentProjectIndex.value;
  const total = props.projects.length;
  
  if (diff === 0) return 'active';
  if (diff === -1) return 'prev';
  if (diff === 1) return 'next';
  
  // Gestion boucle infinie
  if (currentProjectIndex.value === 0 && index === total - 1) return 'prev';
  if (currentProjectIndex.value === total - 1 && index === 0) return 'next';
  
  return 'hidden';
};
</script>

<style scoped>
.carousel-3d-container {
  position: relative;
  width: 100%;
  height: 550px; /* Ajustez selon la hauteur de vos cartes */
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px; /* Crée l'effet de profondeur 3D */
  overflow: visible; /* Important pour voir les cartes sur les côtés */
  margin: 2rem 0;
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

.carousel-card {
  position: absolute;
  width: 320px;
  height: 450px;
  background: white;
  border-radius: var(--radius);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); /* Transition fluide et élastique */
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden; /* Cache le dos de la carte */
}

/* Contenu interne de la carte */
.card-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-image-wrapper {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.carousel-card:hover .card-image-wrapper img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(12, 10, 5, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.carousel-card:hover .card-overlay {
  opacity: 1;
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-body h3 {
  font-size: 1.2rem;
  color: var(--color-blackout);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.card-body p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limite à 3 lignes */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tech-stack-mini {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: auto; /* Pousse les tags en bas */
}

.tech-tag-mini {
  font-size: 0.75rem;
  background: #f0f4ed;
  color: var(--color-dell);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: 600;
}

/* --- LOGIQUE DE POSITIONNEMENT 3D --- */

/* Carte ACTIVE (Centre) */
.carousel-card.active {
  transform: translateX(0) scale(1.1) rotateY(0deg);
  z-index: 10;
  opacity: 1;
  box-shadow: 0 20px 40px rgba(71, 101, 43, 0.3);
  border: 2px solid var(--color-dell);
}

/* Carte Juste à GAUCHE (Précédente) */
.carousel-card.prev {
  transform: translateX(-140%) scale(0.85) rotateY(25deg);
  z-index: 5;
  opacity: 0.7;
  filter: brightness(0.8);
}

/* Carte Juste à DROITE (Suivante) */
.carousel-card.next {
  transform: translateX(140%) scale(0.85) rotateY(-25deg);
  z-index: 5;
  opacity: 0.7;
  filter: brightness(0.8);
}

/* Cartes LOIN (Cachées ou très loin) */
.carousel-card.hidden {
  transform: translateX(0) scale(0.6);
  z-index: 1;
  opacity: 0;
  pointer-events: none;
}

/* Boutons de navigation */
.carousel-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(12, 10, 5, 0.8);
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  backdrop-filter: blur(5px);
}

.carousel-nav-btn:hover {
  background: var(--color-dell);
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav-btn.prev { left: 0; }
.carousel-nav-btn.next { right: 0; }

/* Indicateurs */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  background: var(--color-dell);
  width: 30px;
  border-radius: 10px;
}

/* Responsive Mobile */
@media (max-width: 900px) {
  .carousel-3d-container {
    height: 550px; /* Hauteur fixe nécessaire pour le calcul 3D */
    overflow: hidden; /* Cache ce qui dépasse trop */
  }

  .carousel-card {
    width: 280px; /* Cartes plus petites */
    height: 420px;
  }

  /* Réduit l'écart et la rotation pour que ça rentre sur l'écran */
  .carousel-card.prev {
    transform: translateX(-110%) scale(0.8) rotateY(15deg);
    left: -20px; /* Ajustement fin si nécessaire */
  }

  .carousel-card.next {
    transform: translateX(110%) scale(0.8) rotateY(-15deg);
    right: -20px;
  }

  .carousel-nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    background: rgba(12, 10, 5, 0.6); /* Plus transparent */
  }
  
  .carousel-nav-btn.prev { left: 10px; }
  .carousel-nav-btn.next { right: 10px; }
}

@media (max-width: 500px) {
  /* Sur très petits écrans, on désactive presque l'effet 3D pour la lisibilité */
  .carousel-3d-container {
    perspective: 800px;
  }
  
  .carousel-card {
    width: 85%; /* La carte active prend 85% de l'écran */
    height: 450px;
  }

  .carousel-card.prev, .carousel-card.next {
    opacity: 0.4;
    transform: scale(0.7);
    /* On les éloigne moins pour ne pas qu'elles gênent */
  }
  
  .carousel-card.prev { transform: translateX(-130%) scale(0.7); }
  .carousel-card.next { transform: translateX(130%) scale(0.7); }
}
</style>