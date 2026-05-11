fetch("/db.json")
    .then(response => response.json())
    .then(datos => {
        const catalogo = document.getElementById("catalogo");

        datos.productos.forEach(libro => {
            const libros = datos.productos;

            catalogo.innerHTML += `
                <div class="producto">
                    <img class="imagen-producto" src="${libro.image}">
                    <p class="titulo-producto">${libro.name}</p>
                    <p class="autor-producto">${libro.author}</p>
                    <p class="precio">$${libro.precio}</p>
                    <button class="btn-agregar" id="agregarCarrito">Agregar al carrito</button>
                </div>
            `;
        });
    })