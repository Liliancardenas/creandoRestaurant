//funciona para el menú
const btnMenuOpen = document.getElementById("btnMenuOpen");
const btnMenuClose = document.getElementById("btnMenuClose");
const menuBarResponsive = document.getElementById("menuBar");
const enlaces = document.getElementById("enlaces");
//Abrir menu
btnMenuOpen.addEventListener("click", function () {
    menuBarResponsive.classList.add("active");
});
//Cerrar menu
btnMenuClose.addEventListener("click", function () {
    menuBarResponsive.classList.remove("active");
});
//Cerrar menú con los elementos de enlase
enlaces.addEventListener("click", function () {
    menuBarResponsive.style.transitionDelay = "0.5s";
    menuBarResponsive.classList.remove("active");
})


//funciona para los botones derechos e izquierdos
const slider = document.querySelector(".slider");
const btnDerecho = document.getElementById("btn-derecha");
const btnIzquierdo = document.getElementById("btn-izquierda");
btnDerecho.addEventListener("click", function () {
    slider.scrollLeft += slider.offsetWidth;
});
btnIzquierdo.addEventListener("click", function () {
    slider.scrollLeft -= slider.offsetWidth;
})


//Validación de formulario
const formulario = document.getElementById("formulario");
function validar(e) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const contenido = document.getElementById("comentario").value;

    if (nombre === "" || email === "" || contenido === "") {
        e.preventDefault();
        Swal.fire({
            title: "Error!",
            text: "Todos los campos son obligatorios",
            icon: "error",
        });
    } else {
        e.preventDefault();
        Swal.fire({
            title: "Datos enviados",
            text: "Gracias por ponerte en contacto",
            icon: "success",
        });
        formulario.reset();
    }
}
formulario.addEventListener("submit", validar);


//Btn de Scroll Top
const btnTop = document.getElementById("btn-top");
//Detectar scroll en nuestra pagina web
window.addEventListener("scroll", function () {
    const scroll = document.documentElement.scrollTop;
    const fullSize = document.documentElement.offsetHeight; //Tamaño completo de la pantalla
    const sizeVp = document.documentElement.clientHeight; // Tamaño visible de la pantalla

    if (scroll > 100) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }

    // modificar elemento cuando llegue a final de pagina
    if (scroll + sizeVp >= fullSize) {
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }
});
//detectamos evento click en el boton
btnTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});



//hacemos que el logo nos lleve arriba cuando esta en pantalla pequeña
const logo = document.getElementById("logo");
//detectamos evento click en el logo
logo.addEventListener("click", function () {
    window.scrollTo(0, 0);
});