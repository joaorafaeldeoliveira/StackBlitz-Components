

const button = document.getElementById('toggleButton');
button.addEventListener('click', () => {
  button.classList.toggle('active');
  button.textContent = button.classList.contains('active') ? 'Desativar' : 'Ativar';
});


const loadButton = document.getElementById('loadButton');
  loadButton.addEventListener('click', () => {
    loadButton.disabled = true;
    loadButton.innerHTML = '<span class="spinner"></span> Carregando...';

    setTimeout(() => {
        loadButton.disabled = false;
        loadButton.innerHTML = 'Concluído';
    }, 2000);
});