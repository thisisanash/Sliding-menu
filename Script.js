// Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.style.display = "none";
})


// menu

let menu = document.querySelector(".menu")
let menuBtn = document.querySelector("header .menu-bar");
let closeBtn = document.querySelector(".menu .close-btn");

let toggleMenu = () => {
    menu.classList.toggle("show");    
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

