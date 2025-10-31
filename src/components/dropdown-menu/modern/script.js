document.addEventListener('DOMContentLoaded', () => {

  // Função para fechar todos os dropdowns abertos
  const closeAllDropdowns = (excludeDropdown = null) => {
    document.querySelectorAll('.dropdown__menu.show').forEach(menu => {
      // Se o menu não for o que acabamos de abrir, feche-o
      if (menu.closest('[data-dropdown]') !== excludeDropdown) {
        menu.classList.remove('show');
        // Atualiza o aria-expanded do trigger correspondente
        const trigger = menu.closest('[data-dropdown]').querySelector('[data-dropdown-trigger]');
        if (trigger) {
          trigger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  };

  // 1. Lógica para clicar no Trigger (Botão)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-dropdown-trigger]');
    
    if (trigger) {
      const dropdown = trigger.closest('[data-dropdown]');
      const menu = dropdown.querySelector('.dropdown__menu');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Fecha todos os outros dropdowns antes de abrir/fechar o atual
      closeAllDropdowns(dropdown);

      // Abre/fecha o menu atual
      menu.classList.toggle('show');
      trigger.setAttribute('aria-expanded', !isExpanded);
    }
  });

  // 2. Lógica para fechar ao clicar fora (Click Outside)
  window.addEventListener('click', (e) => {
    // Se o clique não foi dentro de um contêiner .dropdown
    if (!e.target.closest('[data-dropdown]')) {
      closeAllDropdowns();
    }
  });

  // 3. Lógica para fechar com a tecla 'Escape'
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });
});