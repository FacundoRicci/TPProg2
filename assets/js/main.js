

/* Insertar dinamicamente el nav y footer en todas las paginas */
document.addEventListener('DOMContentLoaded',()=>{
  //Header - nav
  document.body.insertAdjacentHTML('afterbegin', `
    <header>
        <nav id="nav">
            <ul class="nav-a-href-1">
                <li><a href="/index.html">INICIO</a></li>
                <li><a href="#quienes-somos">QUIENES SOMOS</a></li>
                <li><a href="/assets/files/catalogo.html">CATALOGO</a></li>
                <li><a href="/assets/files/contactanos.html">CONTACTO</a></li>
            </ul>
            <ul class="nav-a-href-2"> 
                <li>
                    <a href="/index.html">
                        <img src="/assets/img/logo.png" alt="logo">
                        <h1>Book<span>ss</span>hop</h1>
                    </a>
                </li>
            </ul>
            <ul class="nav-a-href-3">
                <li><a href="/assets/files/login.html">INICIAR SESION</a></li>
                <li><a href="/assets/files/carrito.html"><img src="/assets/img/carrito.png" alt="carrito" id="carrito"></a></li>
                <li><button id="cerrarSesion" class="invisible">CERRAR SESION</button></li>
            </ul> 
            
        </nav>
    </header>
    `);

    //Footer
    document.body.insertAdjacentHTML('beforeend', `
      <footer>
        <section class="section-footer">
            <div>
                <ul>
                    <h5>Enlaces rapidos</h5>
                    <li><a href="#nav">Inicio</a></li>
                    <li>Que nos distingue</li>
                    <li>Catalogo</li>
                    <li><a href="#nav">Iniciar sesion</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h5>Contactanos</h5>
                    <li>Zeballos 1341</li>
                    <li>TP_UTN@gmail.com</li>
                    <li>3413998877</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h5>Ayuda</h5>
                    <li>Preguntas frecuentes</li>
                    <li>Como comprar</li>
                    <li>Boton de arrepentimiento</li>
                    <li>Da tu opinion</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h5>Suscribirse al newsLetter</h5>
                    <li>Enter email</li>
                    <li>Enviar mensaje</li>
                </ul>
            </div>
            <div>

            </div>
        </section>
    </footer>
      `)
})

const btnCerrarSesion = document.querySelector("#cerrarSesion")


if(localStorage.getItem("logueado") === "si"){
    btnCerrarSesion.classList.toggle("invisible");
}