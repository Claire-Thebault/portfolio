<template>
  <div class="home-page">
    <NavBar :links="navLinks" />

    <Hero :profile="profile" />
    
    <Projects :projects="projects" @open-project="openModal" />
    
    <PathwayTabs :experiences="experiences" :education="education" />
    
    <SkillsSection :skills="skills" />
    
    <CvSection />
    
    <Contact :profile="profile" :socials="socials" />
    
    <AppFooter />

    <ProjectModal 
      :is-open="!!selectedProject" 
      :project="selectedProject" 
      @close="closeModal" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import Hero from '../components/Hero.vue';
import Projects from '../components/Projects.vue';
import PathwayTabs from '../components/PathwayTabs.vue';
import SkillsSection from '../components/SkillsSection.vue';
import CvSection from '../components/CvSection.vue';
import Contact from '../components/Contact.vue';
import AppFooter from '../components/AppFooter.vue';
import ProjectModal from '../components/ProjectModal.vue';

// --- DONNÉES 
const profile = {
  name: "Claire Thébault",
  title: "Élève Ingénieure en Technologies de la Santé",
  description: "Actuellement à l'ESIR Rennes, je combine expertise informatique (Web, Mobile, Data) et connaissances médicales. Je recherche une alternance de 2 ans à partir de septembre 2026 pour concevoir des solutions numériques innovantes au service de la santé.",
  email: "claire.thebault2@gmail.com",
  phone: "07 68 57 68 20",
  location: "Rennes, France"
};

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Projets', href: '#projets' },
  { name: 'Parcours', href: '#parcours' },
  { name: 'CV', href: '#cv' },
  { name: 'Contact', href: '#contact' }
];

const projects = ref([
  {
    id: 1,
    title: "Plateforme de Prise de RDV (Type Doctolib)",
    desc: "Conception fullstack d'une application Web et mobile facilitant la prise de rendez-vous pour les artisans. Architecture scalable et sécurité des données.",
    techs: ["Vue.js", "Ionic", "Node.js", "PostgreSQL", "REST API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80", // Image bureau/tech
    link: "#"
  },
  {
    id: 2,
    title: "Segmentation d'Images Médicales",
    desc: "Projet de recherche appliquée : segmentation et analyse de l'aorte et du cœur pour le diagnostic de pathologies. Utilisation d'outils avancés de traitement d'image.",
    techs: ["3D Slicer", "Python", "Traitement d'image", "Analyse médicale"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", // Image médicale/scan
    link: "#"
  },
  {
    id: 3,
    title: "Analyse de Données : Communes Bretonnes",
    desc: "Application de valorisation de données publiques (Open Data) pour analyser l'attractivité territoriale. Conception BDD et interface de visualisation.",
    techs: ["Java", "JavaFX", "SQL", "API REST", "Data Viz"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Image data
    link: "#"
  },
  {
    id: 4,
    title: "Recherche : Élastographie par Ondes de Cisaillement",
    desc: "Étude approfondie et dossier de recherche sur les techniques d'imagerie médicale par élastographie. Analyse des principes physiques et applications cliniques.",
    techs: ["Recherche documentaire", "Physique médicale", "Imagerie", "Rédaction scientifique"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80", // Image labo/recherche
    link: "#"
  },
  {
    id: 5,
    title: "Attractivité des communes",
    desc: "Application complète d'analyse de données publiques pour valoriser les communes bretonnes. Conception BDD et interface JavaFX.",
    techs: ["Java", "JavaFX", "MySQL", "CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "SportTrack Interface",
    desc: "Interface utilisateur moderne pour une application de suivi sportif. Gestion de comptes et visualisation de données JSON.",
    techs: ["HTML5", "CSS3", "Bootstrap", "JS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 7,
    title: "Promotion Hédé-Bazouges",
    desc: "Site web vitrine créé sous WordPress pour attirer les jeunes actifs. Intégration de plugins et optimisation SEO.",
    techs: ["WordPress", "PHP", "Elementor"],
    image: "https://images.unsplash.com/photo-1444723121867-c616969a27ca?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 8,
    title: "Jeu de Wythoff",
    desc: "Implémentation algorithmique du jeu de Nim variant. Développement d'une IA capable de privilégier les coups gagnants.",
    techs: ["Java", "Algorithmique", "POO"],
    image: "https://images.unsplash.com/photo-1610890716271-e7150eaee882?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
]);

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

// --- EXPÉRIENCES (Incluant le futur stage à Montréal) ---
const experiences = ref([
  {
    id: 1,
    role: "Stagiaire UX/UI & Développement Web",
    company: "La Technothèque - Centre de réadaptation Marie Enfant",
    location: "Montréal, Canada",
    date: "Juin 2026 - Août 2026 (À venir)",
    desc: "Conception et optimisation de la plateforme numérique de réadaptation pédiatrique. Architecture de l'information, intégration de ressources multimédias (VR, jeux actifs) et amélioration de l'expérience utilisateur (UX) pour les cliniciens.",
    techs: ["UX Design", "Architecture de l'information", "Web Dev", "Tests utilisateurs"]
  },
  {
    id: 2,
    role: "Stagiaire Développement Web",
    company: "DAVID Systems",
    location: "Munich, Allemagne",
    date: "Janvier 2025 - Mars 2025",
    desc: "Développement de nouvelles fonctionnalités pour une plateforme de programmation radio. Tests automatisés et travail en méthode OKR au sein d'une équipe internationale.",
    techs: ["Ember.js", "Cypress.io", "GitLab", "Agile/OKR"]
  },
  {
    id: 3,
    role: "Service Civique & Engagement",
    company: "Unis-Cité & Mairie de Hédé-Bazouges",
    location: "Rennes, France",
    date: "2020 - 2021",
    desc: "Animation en EHPAD, création de jardin partagé et aide aux personnes sans-domicile. Développement fort des soft-skills : empathie, autonomie et travail d'équipe.",
    techs: ["Gestion de projet", "Communication", "Engagement social"]
  }
]);

const education = ref([
  {
    id: 1,
    degree: "Diplôme d'Ingénieur - Spécialité TIS",
    school: "ESIR Rennes (Université de Rennes 1)",
    year: "2025 - 2028 (En cours)",
    details: "Spécialité Technologies de l'Information pour la Santé. Cours : Traitement du signal, Imagerie médicale, Dispositifs médicaux, IoT Santé."
  },
  {
    id: 2,
    degree: "DUT Informatique (Diplôme Universitaire de Technologie)",
    school: "IUT de Vannes - Université Bretagne Sud",
    year: "2023 - 2025",
    details: "Développement Web, Mobile, Bases de données, Algorithmique. Projets tuteurés en gestion de projet agile."
  },
  {
    id: 3,
    degree: "Licence Économie-Sociologie",
    school: "Université Toulouse-II-Jean-Jaurès",
    year: "2021 - 2024",
    details: "Analyse de données sociales, Statistiques, Compréhension des enjeux sociétaux et organisationnels."
  },
  {
    id: 4,
    degree: "Baccalauréat Scientifique",
    school: "Lycée Les Rimains, Saint-Malo",
    year: "2020",
    details: "Spécialité Sciences de l'Ingénieur. Mention Bien."
    }
]);


// --- COMPÉTENCES ---
const skills = {
  dev: { title: "Développement", items: ["Java", "Python", "C", "SQL", "Vue.js", "Node.js",  "JavaScript/TypeScript", "HTML5/CSS3"] },
  tools: { title: "Outils & Méthodes", items: ["Git/GitLab", "Docker", "Linux", "VS Code", "Méthode Scrum", "Méthode OKR", "Jira & Confluence"] },
  medical: { title: "Santé ", items: ["3D Slicer", "Traitement du signal", "Imagerie médicale", "Dispositifs médicaux", "Anatomie"] },
  soft: { title: "Soft Skills", items: ["Travail d'équipe", "Résolution de problèmes", "Adaptabilité", "Gestion de projet", "Anglais Courant"] }
};

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/claire-thebault-630329252/", icon: "fab fa-linkedin-in" },
  { name: "Email", url: "mailto:claire.thebault2@gmail.com", icon: "fas fa-envelope" }
];

</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}
</style>