import outSideClick from "./outSideClick.js";

export default class MenuMobile {
  constructor(btnMenu, menuList, events) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "ativo";
    if (events === undefined) {
      this.eventos = ["click", "touchstart"];
    } else {
      this.eventos = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  addMenuMobileEvents() {
    this.eventos.forEach((userEvent) => {
      this.btnMenu.addEventListener(userEvent, this.openMenu);
    });
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.btnMenu.classList.add(this.activeClass);

    outSideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.btnMenu.classList.remove(this.activeClass);
    });
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
