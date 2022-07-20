const navmenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navmenu.addEventListener("click", toggleMenuDesktop);

function toggleMenuDesktop(){
    desktopMenu.classList.toggle("inactive");

}