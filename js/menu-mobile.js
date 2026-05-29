import outSideClick from "./outSideClick.js";

export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (btnMenu) {
    eventos.forEach((userEvent) => {
      btnMenu.addEventListener(userEvent, openMenu);
    });

    function openMenu(event) {
      menuList.classList.add("ativo");
      btnMenu.classList.add("ativo");

      outSideClick(menuList, eventos, () => {
        menuList.classList.remove("ativo");
        btnMenu.classList.remove("ativo");
      });
    }
  }
}
