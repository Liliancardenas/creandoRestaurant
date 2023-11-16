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