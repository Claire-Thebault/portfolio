<template>
    <section id="cv" class="section-padding bg-dark">
      <div class="container">
        <h2 class="section-title">Mon Curriculum Vitae</h2>
        <div class="cv-container">
          <div class="cv-header">
            <p>Visualisez mon parcours complet ou téléchargez le document.</p>
            <a href="/cv-claire.pdf" download class="btn btn-gold">
              <i class="fas fa-download"></i> Télécharger le PDF
            </a>
          </div>
          <div class="pdf-viewer">
            <embed src="/cv-claire.pdf" type="application/pdf" width="100%" height="800px" />
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.cv-container {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.cv-header {
  background: var(--color-blackout);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.cv-header p { margin: 0; font-size: 1.1rem; color: #ccc; }

.pdf-viewer {
  width: 100%;
  height: 800px;
  background: #f4f4f4;
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  .hero-buttons { flex-direction: column; }
  .contact-wrapper { grid-template-columns: 1fr; gap: 2rem; }
  .cv-header { flex-direction: column; text-align: center; }
  .cv-header p { margin-bottom: 1rem; }
  .pdf-viewer {height: 400px; }
} 
</style>