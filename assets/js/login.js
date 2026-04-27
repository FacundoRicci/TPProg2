const btnCambioRegistrar = document.querySelector("#btnCambioRegistrar");
const formularioLogin = document.querySelector("#formularioLogin");
const btnCambioLogin = document.querySelector("#btnCambioLogin");
const formularioRegistrarse = document.querySelector("#formularioRegistrarse");

btnCambioRegistrar.addEventListener("click",function(){
    formularioLogin.classList.toggle("invisible");
    formularioRegistrarse.classList.toggle("invisible");
})
btnCambioLogin.addEventListener("click",function(){
    formularioLogin.classList.toggle("invisible");
    formularioRegistrarse.classList.toggle("invisible");
})