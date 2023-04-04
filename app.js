const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu-box");


hamburger.addEventListener("click", () => { 
    if (menu.classList == "menu-box") {
        menu.classList.replace("menu-box", "menu-box-off");
    } else {
        menu.classList.replace("menu-box-off", "menu-box");
    }    
})