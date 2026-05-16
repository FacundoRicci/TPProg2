README
# Proyecto e-commerce libreria Online 'Bookshop'. TP P2 1TUP4 UTN.

Este proyecto es una aplicacion web para la venta de libros.
Incluye: 
* HTML/CSS/JS y JSON server para el CRUD de datos.
* Maquetacion con Flexbox y Grid en diferentes componentes.
* Formulario con validacion para registrarse e ingreso de usuario.
* Persistencia de datos.
* Diseño responsive con algunas inconsistencias por falta de tiempo para desarrollarlo eficientemente.
* Efectos de animacion en Nav, y tarjetas de productos en catalogo que incluyen transformacion, escalado y sombreado de elementos.
* Implementacion de carrito de compras.

# Instalacion (requisito previo: tener instalado JSON server)
1. Clonar el siguiente repositorio en la carpeta deseada: git clone https://github.com/FacundoRicci/TPProg2.git
2. Abrir en terminal la carpeta raiz y luego ejecutar el comando: npm install jason-server
3. Ejectuar el comando: npx json-server
4. Por ultima levantar el servidor con comando: npx json-server --watch db.json
Para para el servidor cerramos la ventana de la consola o apretar CTRL + C

# Indice
Cuenta con 5 paginas: 1. Inicio  2. Iniciar sesion  3.Catalogo  4. Carrito  5. Contacto
1. Inicio
    Pagina principal que cuenta con 5 secciones: 
    Nav. 
    Informacion, trabajada con Grid css.
    Libros mas vendidos de forma hardcode.
    Una pequena seccion quienes somos 
    Footer con varios enlaces que sirven para navegar en la pagina en la lista 'Enlaces rapidos', las demas listas estan para simular un footer de una pagina real.

2. Iniciar sesion
    Maneja login, registro y cierre de sesion con validacion en tiempo real, integracion con JSON server y persistencia de sesion con LocalStorage. Validacion en tiempo real con usuario y contraseña con un minimo de 4 caracteres, ademas validacion de coincidencia
    de contraseñas ingresadas para registrarse.

3. Catalogo
    Muestra todos los libros que se encuentran dentro de la base de datos, obtenidos con fetch.
    Los estilos fueron hechos con CSS Flexbox.
    Al hacer click en el boton "Agregar al carrito", se guarda ese libro dentro de localStorage para luego ser mostrado dentro de la pagina propia del carrito.
    El header y el footer reutilizados de la pagina principal.

4. Carrito
    Aparece solo si se encuentra logueado.
    Accede al localStorage en busca de libros agregados desde el Catalogo, en caso de que no haya ninguno, permanece vacio.
    Renderiza una lista con los libros agregados, especificando la cantidad de cada uno, y luego al final, hace una suma del precio total y de la cantidad total de libros.
    Al hacer click en el boton "Quitar" se resta 1 de la cantidad del libro especifico, caso de haber solo 1, se elimina del carrito, y luego se actualiza el localStorage
    Estilos hechos con CSS Flexbox
    Header y footer tambien reutilizados.


5. Contacto 
    El objetivo de esta pagina es simular un lugar fisico y datos de contacto. 
    Ubicacion del local ficticio con una etiqueta I-frame, redes sociales, e-mail y Whatsapp, estos ultimos tres no son interactivos.