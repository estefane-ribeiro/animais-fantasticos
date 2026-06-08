import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  const numeros = document.querySelectorAll("[data-numero]");
  const numerosGrid = document.querySelector(".numeros-grid");

  async function fetchAnimais() {
    try {
      const animaisResponse = await fetch("animaisapi.json");
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => {
        criarAnimais(animal);
      });

      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo",
      );
      animaNumeros.init();
    } catch (error) {
      console.log(error);
    }
  }

  function criarAnimais(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    numerosGrid.appendChild(div);
  }

  fetchAnimais();
}
