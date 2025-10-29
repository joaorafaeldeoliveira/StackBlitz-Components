
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
confirmModal.addEventListener('click', e => {
  if (e.target === confirmModal) confirmModal.classList.remove('show');
});


const formModal = document.getElementById('formModal');
const userForm = document.getElementById('userForm');

document.getElementById('openForm').onclick = () => formModal.classList.add('show');
document.getElementById('cancelForm').onclick = () => formModal.classList.remove('show');

userForm.addEventListener('submit', e => {
  e.preventDefault();
  alert("Usuário cadastrado com sucesso!");
  userForm.reset();
  formModal.classList.remove('show');
});

formModal.addEventListener('click', e => {
  if (e.target === formModal) formModal.classList.remove('show');
});