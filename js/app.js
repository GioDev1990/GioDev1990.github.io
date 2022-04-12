const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const show = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    show.classList.toggle("show")


})

