<template>
    <section class="section-padding">
      <div class="container">
        <h2 class="section-title">Compétences Techniques</h2>
        <div class="skills-grid">
          <div v-for="(category, key) in skills" :key="key" class="skill-category">
            <h3>{{ category.title }}</h3>
            <div class="skill-tags">
              <span v-for="skill in category.items" :key="skill" class="skill-item">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
defineProps({
  skills: Array
});
</script>

<style scoped>
  .skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  }

  .skill-category {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  border-top: 4px solid var(--color-dell);
  }

  .skill-category h3 {
  color: var(--color-blackout);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  }

  .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  }

  .skill-item {
  background: var(--color-bg-light);
  color: var(--color-dell);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: 0.3s;
  }

  .skill-item:hover {
  background: var(--color-dell);
  color: white;
  }


  @media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr; /* Une seule colonne */
    gap: 1.5rem;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colonnes sur tablette */
  }
}
</style>