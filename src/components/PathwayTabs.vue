<template>
  <section id="parcours" class="section-padding bg-dark">
    <div class="container">
      <h2 class="section-title">Mon Parcours</h2>

      <div class="tabs-controls">
        <button 
          :class="['tab-btn', { active: activeTab === 'experience' }]" 
          @click="toggleTab('experience')">
          <i class="fas fa-briefcase"></i> Expériences Pro
        </button>
        <button 
          :class="['tab-btn', { active: activeTab === 'formation' }]" 
          @click="toggleTab('formation')">
          <i class="fas fa-graduation-cap"></i> Formation
        </button>
      </div>

      <div class="tabs-content">
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'experience'" key="exp" class="timeline">
            <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-year">{{ exp.date }}</span>
                <h3>{{ exp.role }}</h3>
                <h4 class="timeline-school">{{ exp.company }} | {{ exp.location }}</h4>
                <p>{{ exp.desc }}</p>
                <div class="tech-stack">
                  <span v-for="tech in exp.techs" :key="tech" class="tech-tag light">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-else key="form" class="timeline">
            <div v-for="edu in education" :key="edu.id" class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-year">{{ edu.year }}</span>
                <h3>{{ edu.degree }}</h3>
                <h4 class="timeline-school">{{ edu.school }}</h4>
                <p>{{ edu.details }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  experiences: Array,
  education: Array
});

const activeTab = ref('experience');

const toggleTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped>
.tabs-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab-btn {
  background: transparent;
  border: 2px solid var(--color-gold);
  color: #ccc;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
}

.tab-btn.active, .tab-btn:hover {
  background: var(--color-gold);
  color: var(--color-blackout);
  border-color: var(--color-gold);
}

/* Animation de transition Vue.js */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* TIMELINE FORMATION */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: var(--color-gold);
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-dell);
  border: 3px solid var(--color-blackout);
}

.timeline-year {
  display: inline-block;
  background: var(--color-citrine);
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  color: var(--color-gold);
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
}

.timeline-school {
  color: #fff;
  font-weight: 400;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.timeline-content p {
  color: #ccc;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .tabs-controls {
    flex-direction: column;
    gap: 0.5rem;
  }

  .tab-btn {
    width: 100%;
    padding: 0.8rem;
  }

  .timeline::before {
    left: 10px; /* Déplace la ligne verticale à gauche */
  }

  .timeline-item {
    padding-left: 35px; /* Espace pour la ligne */
  }

  .timeline-marker {
    left: 4px; /* Centre le point sur la ligne décalée */
  }

  .timeline-content h3 {
    font-size: 1.2rem;
  }
  
  .timeline-school {
    font-size: 0.95rem;
  }
}
</style>