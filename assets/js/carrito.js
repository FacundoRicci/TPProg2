const contenedorPrincipal = document.getElementById("contenedorPrincipal");
const contenedorPrecio = document.getElementById("contenedorPrecio");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let cantidadProductos = 0;
let precioTotal = 0;

renderizarCarrito();

function renderizarCarrito(){
    
    contenedorPrincipal.innerHTML = "";

    cantidadProductos = 0;
    precioTotal = 0;

    carrito.forEach(libro => {

        const div = document.createElement("div");

        div.classList.add("producto");

        div.innerHTML = `
            <img src="${libro.image}">
            <p class="titulo-producto">${libro.name}</p>
            <p class="autor-producto">${libro.author}</p>
            <p class="precio">${libro.precio}</p>
            <p>Cantidad: ${libro.cantidad}</p>
            <button class="btn btn-quitar">Quitar</button>
        `;

        const botonQuitar = div.querySelector(".btn-quitar");

        botonQuitar.addEventListener("click", () => {
            quitarLibro(libro.id);
        });

        cantidadProductos += libro.cantidad;
        precioTotal += libro.precio * libro.cantidad;
        contenedorPrincipal.appendChild(div);
    });
    renderizarPrecios();
}


function quitarLibro(id){

    const libro = carrito.find(item => item.id === id);

    if(libro.cantidad > 1){
        libro.cantidad--;
    } else {
        carrito = carrito.filter(item => item.id !== id);
    }


    localStorage.setItem("carrito", JSON.stringify(carrito));

    renderizarCarrito();
}

function renderizarPrecios(){
    contenedorPrecio.innerHTML = `
        <p>Cantidad de productos: ${cantidadProductos}</p>
        <p>Precio Total: $${precioTotal}</p>
        <button class="btn">Continuar con la compra</button>
    `;
}

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