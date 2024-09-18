export default function hamburguerMenu(panelBtn, panel, menuLink) {
    const d = document;
  
    d.addEventListener("touchstart", (e) => {
      if (e.target.matches(panelBtn) || e.target.closest(panelBtn)) {
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
      }
      if (e.target.matches(menuLink)) {
        console.log(e.target);
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
      }
    });
  }
  