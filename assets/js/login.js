const btnCambioRegistrar = document.querySelector("#btnCambioRegistrar");
const formularioLogin = document.querySelector("#formularioLogin");
const btnCambioLogin = document.querySelector("#btnCambioLogin");
const formularioRegistrarse = document.querySelector("#formularioRegistrarse");
const btnCerrarSesion = document.querySelector("#cerrarSesion");
const iniciarSesion = document.querySelector("#inciarSesion");

btnCambioRegistrar.addEventListener("click", function () {
    formularioLogin.classList.toggle("invisible");
    formularioRegistrarse.classList.toggle("invisible");
})
btnCambioLogin.addEventListener("click", function () {
    formularioLogin.classList.toggle("invisible");
    formularioRegistrarse.classList.toggle("invisible");
})

const ususarioLogin = document.querySelector("#usuarioLogin");
const mensajeErrorLoginUsuario = document.querySelector("#mensajeErrorLoginUsuario");

ususarioLogin.addEventListener("input", function (event) {
    let user = event.target.value;
    if (user.length < 4) {
        mensajeErrorLoginUsuario.textContent = "El usuario debe tener al menos 4 caracteres";
    } else {
        mensajeErrorLoginUsuario.textContent = "";
    }
})

const contrasenaLogin = document.querySelector("#contrasenaLogin");
const mensajeErrorLoginContrasena = document.querySelector("#mensajeErrorLoginContrasena");

contrasenaLogin.addEventListener("input", function (event) {
    let user = event.target.value;
    if (user.length < 4) {
        mensajeErrorLoginContrasena.textContent = "La contraseña debe tener al menos 4 caracteres";
    } else {
        mensajeErrorLoginContrasena.textContent = "";
    }
})


const usuarioRegistro = document.querySelector("#usuarioRegistro");
const mensajeErrorRegistroUsuario = document.querySelector("#mensajeErrorRegistroUsuario");

usuarioRegistro.addEventListener("input", function (event) {
    let user = event.target.value;
    if (user.length < 4) {
        mensajeErrorRegistroUsuario.textContent = "El usuario debe tener al menos 4 caracteres";
    } else {
        mensajeErrorRegistroUsuario.textContent = "";
    }
})

const contrasenaRegistro = document.querySelector("#contrasenaRegistro");
const mensajeErrorRegistroContrasena = document.querySelector("#mensajeErrorRegistroContrasena");

contrasenaRegistro.addEventListener("input", function (event) {
    let user = event.target.value;
    if (user.length < 4) {
        mensajeErrorRegistroContrasena.textContent = "La contraseña debe tener al menos 4 caracteres";
    } else {
        mensajeErrorRegistroContrasena.textContent = "";
    }
})

const repetirContrasenaRegistro = document.querySelector("#repetirContrasenaRegistro");
const mensajeErrorRegistroRepetirContrasena = document.querySelector("#mensajeErrorRegistroRepetirContrasena");

repetirContrasenaRegistro.addEventListener("input", function (event) {
    let user = event.target.value;
    if (user.length < 4) {
        mensajeErrorRegistroRepetirContrasena.textContent = "La contraseña debe tener al menos 4 caracteres";
    } else {
        mensajeErrorRegistroRepetirContrasena.textContent = "";
    }
})

const btnLogin = document.querySelector("#btnLogin");
const mensajeErrorLoginGeneral = document.querySelector("#mensajeErrorLoginGeneral");
const cartelBienvenida = document.querySelector("#cartelBienvenida");
const textoCartel = document.querySelector("#textoCartel")

async function obtenerDatosUsuarios(user,password) {
    fetch("http://localhost:3000/usuarios")
        .then(response => response.json())
        .then(datos => datos.forEach(element => {
            if(element.usuario === user && element.contrasena === password){
                localStorage.setItem("logueado", "si");
                localStorage.setItem("usuarioLogueado", user);
                comprobarLog();
            }else{
                mensajeErrorLoginGeneral.textContent = "Usuario o contraseña incorrectos intente nuevamente";
            }
        }))
        .catch(error => console.log(error))
}


/*function verificarUsuarioContrasena(user,password){
    datosUsuarios.forEach((datosUsuario) => {
        if(datosUsuario.usuario === user || datosUsuario.contrasena === password){
            localStorage.setItem("logueado", "si");
            localStorage.setItem("usuarioLogueado", user);
            comprobarLog();
        }else{
            mensajeErrorLoginGeneral.textContent = "Usuario o contraseña incorrectos intente nuevamente";
        }
    })
}
*/
btnLogin.addEventListener("click", function () {
    let user = ususarioLogin.value;
    let password = contrasenaLogin.value;
    obtenerDatosUsuarios(user,password);
    ususarioLogin.value = "";
    contrasenaLogin.value = "";
})

function comprobarLog() {
    let logueado = localStorage.getItem("logueado");
    let usuarioLogueado = localStorage.getItem("usuarioLogueado");

    if (logueado === "si") {
        formularioLogin.classList.toggle("invisible");
        cartelBienvenida.classList.toggle("invisible");
        iniciarSesion.classList.toggle("invisible");
        textoCartel.textContent = ("Bienvenido a la tienda online " + usuarioLogueado + "!");
        btnCerrarSesion.classList.toggle("invisible");
    }
}
comprobarLog();

const btnRegistrarse = document.querySelector("#btnRegistrarse");
const mensajeErrorRegistroGeneral = document.querySelector("#mensajeErrorRegistroGeneral");
const emailRegistro = document.querySelector("#emailRegistro");


async function registrarUsuario() {
    let data = {
        id: '',
        usuario: usuarioRegistro.value,
        contrasena: contrasenaRegistro.value,
        email: emailRegistro.value
    }

    let options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'content-type': 'application/json; charset:UTF-8'}
    }

    await fetch("http://localhost:3000/usuarios",options)
        .then(response => response.json())
        .then(json => {
            if(json){
                console.info('Ha sido registrado correctamente.');
            }else{
                console.error('Ha ocurrido un error al registrar los datos.');
            }
        })
        .catch(error => console.error(error));
}


btnRegistrarse.addEventListener("click",function(){
    if(
        contrasenaRegistro.value === repetirContrasenaRegistro.value &&
        contrasenaRegistro.value.length >= 4 &&
        usuarioRegistro.value.length >= 4
        ){
        registrarUsuario();
        localStorage.setItem("logueado", "si");
        localStorage.setItem("usuarioLogueado", usuarioRegistro.value);
        comprobarLog();    
    }else{
        mensajeErrorRegistroGeneral.textContent = "Completa correctamente todos los campos";
    }
})


btnCerrarSesion.addEventListener("click",function(){
    localStorage.setItem("logueado","no");
    localStorage.removeItem("usuarioLogueado");
    btnCerrarSesion.classList.toggle("invisible");
    formularioLogin.classList.toggle("invisible");
    cartelBienvenida.classList.toggle("invisible");
    comprobarLog();
})