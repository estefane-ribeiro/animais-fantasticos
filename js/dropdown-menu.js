import outSideClick from "./outSideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const dropdownUl = document.querySelector(".dropdown-menu");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");

    outSideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((dropdown) => {
    ["touchstart", "click"].forEach((userEvent) => {
      dropdown.addEventListener(userEvent, handleClick);
    });
  });
}
