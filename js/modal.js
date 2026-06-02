export default class Modal {
  constructor(containerModal, btnFechar, btnLogin) {
    this.containerModal = document.querySelector(containerModal);
    this.btnFechar = document.querySelector(btnFechar);
    this.btnLogin = document.querySelector(btnLogin);

    // bind this ao callback para fazer referencia ao objeto da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.foraModal = this.foraModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  foraModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.btnLogin.addEventListener("click", this.eventToggleModal);
    this.btnFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.foraModal);
  }

  init() {
    if (this.containerModal && this.btnFechar && this.btnLogin) {
      this.addModalEvents();
    }
    return this;
  }
}
