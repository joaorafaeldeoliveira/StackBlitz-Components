const button = document.querySelector('.dropdown-button');
const menu = document.querySelector('.dropdown-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('active');
  }
});