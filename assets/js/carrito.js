const contenedorPrincipal = document.getElementById("contenedorPrincipal");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

renderizarCarrito();

function renderizarCarrito(){

    contenedorPrincipal.innerHTML = "";

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

        contenedorPrincipal.appendChild(div);
    });
}


function quitarLibro(id){

    carrito = carrito.filter(libro => libro.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    renderizarCarrito();
}