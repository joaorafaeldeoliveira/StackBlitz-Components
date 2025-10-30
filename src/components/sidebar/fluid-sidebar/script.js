const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.sidebar-overlay');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.sidebar-header button');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);