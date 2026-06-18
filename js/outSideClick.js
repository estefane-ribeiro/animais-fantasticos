export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener("click", handleOutSideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener("click", handleOutSideClick);
      });
      element.setAttribute(outside, "");
    });
  }
}
