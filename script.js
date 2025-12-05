// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      section.classList.add('active');
    }
  });
});

// Preencher barras de habilidades
window.addEventListener('load', () => {
  const skillFills = document.querySelectorAll('.skill-fill');
  skillFills.forEach(fill => {
    fill.style.width = fill.dataset.width;
  });
});

// Filtros de projetos
const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    projects.forEach(project => {
      if (category === 'all' || project.dataset.category === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
