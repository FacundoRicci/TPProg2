const btnCerrarSesion = document.querySelector("#cerrarSesion");
const iniciarSesion = document.querySelector("#iniciarSesion");
const paginaCarrito = document.querySelector("#paginaCarrito");

if(localStorage.getItem("logueado") === "si"){
    btnCerrarSesion.classList.toggle("invisible");
    iniciarSesion.classList.toggle("invisible");
    paginaCarrito.classList.toggle("invisible");
}

btnCerrarSesion.addEventListener("click",function(){
    localStorage.setItem("logueado","no");
    localStorage.removeItem("usuarioLogueado");
    btnCerrarSesion.classList.toggle("invisible");
    iniciarSesion.classList.toggle("invisible");
    paginaCarrito.classList.toggle("invisible");
})