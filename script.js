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

