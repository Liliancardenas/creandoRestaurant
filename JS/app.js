const btnMenuOpen = document.getElementById("btnMenuOpen");
const btnMenuClse = document.getElementById("btnMenuClose");
const menuBar = document.getElementById("menuBar");

//Abrir menu
btnMenuOpen.addEventListener("click", function () {
    menuBar.classList.add("active");
});