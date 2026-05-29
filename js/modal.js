export default function initModal() {
  const containerModal = document.querySelector(".container-modal");
  const btnFechar = document.querySelector("[data-modal=fechar]");
  const btnLogin = document.querySelector(".login");

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function foraModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  btnLogin.addEventListener("click", toggleModal);
  btnFechar.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", foraModal);
}
