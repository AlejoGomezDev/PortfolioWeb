export default function hamburguerMenu() {
    const d = document;
    const $panelBtn = d.querySelector(".panel-btn");
    const $panel = d.querySelector(".panel");
    const $menuLinks = d.querySelectorAll(".menu a");

    $panel.classList.toggle("is-active");
    $panelBtn.classList.toggle("is-active");

    $menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        $panel.classList.remove("is-active");
        $panelBtn.classList.remove("is-active");
      });
    });
  }