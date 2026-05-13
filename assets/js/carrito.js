const contenedorPrincipal = document.getElementById("contenedorPrincipal");
const contenedorPrecio = document.getElementById("contenedorPrecio");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let cantidadProductos = 0;
let precioTotal = 0;

renderizarCarrito();
renderizarPrecios();

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
            <button class="btn btn-quitar">Quitar</button>
        `;

        const botonQuitar = div.querySelector(".btn-quitar");

        botonQuitar.addEventListener("click", () => {
            quitarLibro(libro.id);
        });

        cantidadProductos++;
        precioTotal += libro.precio;
        contenedorPrincipal.appendChild(div);
    });
}


function quitarLibro(id){

    carrito = carrito.filter(libro => libro.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    cantidadProductos--;

    renderizarCarrito();
    renderizarPrecios();
}

function renderizarPrecios(){
    contenedorPrecio.innerHTML = `
        <p>Cantidad de productos: ${cantidadProductos}</p>
        <p>Precio Total: $${precioTotal}</p>
        <button class="btn">Continuar con la compra</button>
    `;
}