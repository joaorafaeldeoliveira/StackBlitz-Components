const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.classList.add('show');
document.getElementById('closeModal').onclick = () => modal.classList.remove('show');
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('show');
});

const confirmModal = document.getElementById('confirmModal');
document.getElementById('openConfirm').onclick = () => confirmModal.classList.add('show');
document.getElementById('cancelConfirm').onclick = () => confirmModal.classList.remove('show');
document.getElementById('confirmDelete').onclick = () => {
  alert("Item excluído!");
  confirmModal.classList.remove('show');
};