import debounce from "./debounce.js";
export default function goToTop() {
  const arrow = document.querySelector(".js-arrow");

  if (arrow) {
    function goUp() {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }

    arrow.addEventListener("click", goUp);
  }

  let ticking = false;

  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY >= 200) {
          arrow.classList.add("ativo");
        } else {
          arrow.classList.remove("ativo");
        }
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", debounce(handleScroll, 50));
}
