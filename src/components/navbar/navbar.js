const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', () => {
    if(searchInput.value === '') { 
      alert('EITAAA')
    }
    alert(`Você pesquisou: ${searchInput.value}`);
    console.log('VAAAAAAAAAAAAAAAAAA')
  });
});