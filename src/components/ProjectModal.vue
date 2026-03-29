<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-backdrop" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">&times;</button>
          
          <div class="modal-body">
            <div class="modal-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="modal-info">
              <h2>{{ project.title }}</h2>
              <div class="modal-meta">
                <span class="modal-date">{{ project.date || 'Projet Récent' }}</span>
              </div>
              
              <p class="modal-description">{{ project.fullDesc || project.desc }}</p>
              
              <div class="modal-techs">
                <h4>Technologies utilisées :</h4>
                <div class="tech-list">
                  <span v-for="tech in project.techs" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  project: Object
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(12, 10, 5, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  animation: slideUp 0.3s ease-out;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #555;
  cursor: pointer;
  z-index: 10;
  line-height: 1;
}
.modal-close:hover { color: var(--color-red-bean); }

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  min-height: 400px;
}

.modal-info {
  padding: 3rem;
  display: flex;
  flex-direction: column;
}

.modal-info h2 {
  font-size: 2rem;
  color: var(--color-blackout);
  margin-bottom: 0.5rem;
}

.modal-meta {
  font-size: 0.9rem;
  color: var(--color-gold);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.modal-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.modal-techs h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 1rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
}

/* Animation */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal-content, .modal-leave-to .modal-content {
  transform: translateY(20px);
  opacity: 0;
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}


@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 95vh;
    margin: 10px;
  }

  .modal-body {
    grid-template-columns: 1fr; /* Empiler image et texte */
  }

  .modal-image {
    height: 250px;
    width: 100%;
  }

  .modal-image img {
    border-radius: 12px 12px 0 0; /* Arrondi seulement en haut */
    min-height: auto;
    height: 100%;
  }

  .modal-info {
    padding: 1.5rem;
    overflow-y: auto; /* Scroll si le texte est trop long */
  }

  .modal-info h2 {
    font-size: 1.5rem;
  }

  .modal-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
</style>