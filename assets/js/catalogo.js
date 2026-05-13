fetch("/db.json")
    .then(response => response.json())
    .then(datos => {

        const catalogo = document.getElementById("catalogo");

        datos.productos.forEach(libro => {

            const div = document.createElement("div");

            div.classList.add("producto");

            div.innerHTML = `
                <img class="imagen-producto" src="${libro.image}">
                <p class="titulo-producto">${libro.name}</p>
                <p class="autor-producto">${libro.author}</p>
                <p class="precio">$${libro.precio}</p>
                <button class="btn-agregar">
                    Agregar al carrito
                </button>
            `;

            const boton = div.querySelector(".btn-agregar");

            boton.addEventListener("click", () => {
                agregarCarrito(libro);
            });

            catalogo.appendChild(div);
        });
    });


function agregarCarrito(libro){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(libro);

    localStorage.setItem("carrito", JSON.stringify(carrito));
}