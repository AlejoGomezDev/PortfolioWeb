 export default function hamburguerMenu(panelBtn, panel, menuLink){
    const d = document;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const eventType = isTouchDevice ? "touchstart" : "click";
    
    d.addEventListener(eventType, (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
    
 }