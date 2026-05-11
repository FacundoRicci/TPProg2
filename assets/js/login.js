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

const ususarioLogin = document.querySelector("#usuarioLogin");
const mensajeErrorLoginUsuario = document.querySelector("#mensajeErrorLoginUsuario");

ususarioLogin.addEventListener("input",function(event){
    let user = event.target.value;
    if(user.length<4){
        mensajeErrorLoginUsuario.textContent="El usuario debe tener al menos 4 caracteres";
    }else{
        mensajeErrorLoginUsuario.textContent="";
    }
})

const contrasenaLogin = document.querySelector("#contrasenaLogin");
const mensajeErrorLoginContrasena = document.querySelector("#mensajeErrorLoginContrasena");

contrasenaLogin.addEventListener("input",function(event){
    let user = event.target.value;
    if(user.length<4){
        mensajeErrorLoginContrasena.textContent="La contraseña debe tener al menos 4 caracteres";
    }else{
        mensajeErrorLoginContrasena.textContent="";
    }
})


const usuarioRegistro = document.querySelector("#usuarioRegistro");
const mensajeErrorRegistroUsuario = document.querySelector("#mensajeErrorRegistroUsuario");

usuarioRegistro.addEventListener("input",function(event){
    let user = event.target.value;
    if(user.length<4){
        mensajeErrorRegistroUsuario.textContent="El usuario debe tener al menos 4 caracteres";
    }else{
        mensajeErrorRegistroUsuario.textContent="";
    }
})

const contrasenaRegistro = document.querySelector("#contrasenaRegistro");
const mensajeErrorRegistroContrasena = document.querySelector("#mensajeErrorRegistroContrasena");

contrasenaRegistro.addEventListener("input",function(event){
    let user = event.target.value;
    if(user.length<4){
        mensajeErrorRegistroContrasena.textContent="La contraseña debe tener al menos 4 caracteres";
    }else{
        mensajeErrorRegistroContrasena.textContent="";
    }
})

const repetirContrasenaRegistro = document.querySelector("#repetirContrasenaRegistro");
const mensajeErrorRegistroRepetirContrasena = document.querySelector("#mensajeErrorRegistroRepetirContrasena");

repetirContrasenaRegistro.addEventListener("input",function(event){
    let user = event.target.value;
    if(user.length<4){
        mensajeErrorRegistroRepetirContrasena.textContent="La contraseña debe tener al menos 4 caracteres";
    }else{
        mensajeErrorRegistroRepetirContrasena.textContent="";
    }
})