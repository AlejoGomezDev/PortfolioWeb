 export default function hamburguerMenu(panelBtn, panel, menuLink){
    const d = document;
    d.addEventListener("click", (e) => {
        handleMenuEvent(e);
    });
    
    d.addEventListener("touchstart", (e) => {
        handleMenuEvent(e);
        console.log("touchstart event fired");
    });
    
    function handleMenuEvent(e) {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    };
    
 }