
const carrito = [];

//Si el sessionStorage tiene contenido lo muestra en el carrito
mostrarCarritoSesion();

function validacionCantidad() {
    //seleccionamos el select del dom
    var idSeleccionado = document.getElementById("selectorEntradas");
    //guardamos en una variable el valor del atributo seleccionado
    var idAtributo = idSeleccionado.options[idSeleccionado.selectedIndex].value;
    //buscamos dentro del array el indice en el que se encuentra el identificador
    //del partido seleccionado
    var idEntrada = entradas.findIndex(i => i.id === idAtributo);

    //almacenamos el valor del input
    var inputCantidad = document.getElementById("cantidadEntradas");

    //en caso de que la cantidad sea menor al stock total, no este vacio y 
    //sea un numero, valida el formulario
    if(parseInt(inputCantidad.value) <= entradas[idEntrada].total_entradas &&
    inputCantidad != "" && !isNaN(inputCantidad.value)) {
        //reseteo el mensaje de error por si tiene contenido
        document.getElementById("error-compra").innerText = "";
        
        //creo un objeto producto para almacenar la informacion de la entrada
        const producto = {
            id: entradas[idEntrada].id,
            titulo: entradas[idEntrada].titulo,
            precio: entradas[idEntrada].precio * parseInt(inputCantidad.value),
            cantidad: parseInt(inputCantidad.value)
        };

        //variable booleana para comprobar si el producto ya esta en el carrito
        var estaProducto = false;
        var indiceProducto = carrito.findIndex(i => i.id === producto.id);

        if (indiceProducto >= 0) {
            //si encuentra el id dentro del carrito cambia a true
            estaProducto = true;
        }

        //si no esta el producto, lo mete dentro del array carrito
        if (!estaProducto) {
            //metemos el objeto producto dentro del array
            carrito.push(producto);
            
            //almacena en el sesionstorage el nuevo producto añadido al carrito
            almacenaCarrito();
            //genera el contenido html del producto
            addCarrito();
            //calcula el total del carrito
            calcularTotal();
        } else {
            document.getElementById("error-compra").innerText = "El producto ya está en el carrito";
        }

    } else {
        document.getElementById("error-compra").innerText = "Error en la selección";
    }

}

function addCarrito() {
    //genera un producto html en base a un indice y un array, en este
    //caso el carrito
    generaCarritoHTML(carrito.length-1, carrito);
}

//añadimos un handler para recoger el elemento que estoy clickando
function borrarProducto(event) {
    /*coge el elemento padre del boton (.entrada)*/ 
    var divPadre = this.parentElement; 
    //recoge el valor del id que quiero borrar
    var idPartido = divPadre.getElementsByTagName('p')[0].innerHTML;
    
    //buscamos el valor dentro del carrito y lo borramos del array

    for (var i = 0; i < carrito.length; i++) {
        if(carrito[i].id == idPartido){
            carrito.splice(i, 1);
        }
    }

    almacenaCarrito();
    
    
    //borra el elemento html
    divPadre.remove();
    //vuelve a calcular el total del precio del carrito
    calcularTotal();
}

function calcularTotal() {
    var totalPrecio = 0;
    //si tiene contenido el carrito
    if(carrito.length > 0) {
        //recorre el mismo y suma los precios del objeto producto
        for (var i = 0; i < carrito.length; i++) {
            totalPrecio += carrito[i].precio;
        }
        //imprime el resultado
        document.getElementById("precioCarrito").innerText = "Total: "+totalPrecio+" €";
    } else {
        document.getElementById("precioCarrito").innerText = "";
    }
}

//genera un producto en html en base a la informacion de un array y su indice
function generaCarritoHTML(indice, arreglo) {
    //crea un div .entrada dentro de un div del dom
    var carritoEntradas = document.getElementById("carrito");
    var productoEntrada = document.createElement("DIV");
    productoEntrada.className = "entrada";
    carritoEntradas.appendChild(productoEntrada);

    //titulo del producto
    var tituloProducto = document.createElement("H3");
    tituloProducto.innerText = arreglo[indice].titulo;
    productoEntrada.appendChild(tituloProducto);

    //creamos un boton para borrar la entrada del carrito
    var botonCerrar = document.createElement("BUTTON");
    botonCerrar.type = "button";
    botonCerrar.className = "btn-close boton-cerrar";
    botonCerrar.ariaLabel = "Close";
    var att = document.createAttribute("onclick");
    //por un lado borra el elemento del dom, y despues
    //borrar el elemento del array carrito. añadimos un manejador .call
    att.value = "borrarProducto.call(this,event)";
    botonCerrar.setAttributeNode(att);

    productoEntrada.appendChild(botonCerrar);

    //identificador del producto
    var idProducto = document.createElement("P");
    idProducto.className = "datos-entrada";
    idProducto.innerText = arreglo[indice].id;
    productoEntrada.appendChild(idProducto);

    //Cantidad del producto a comprar
    var cantidadProducto = document.createElement("P");
    cantidadProducto.className = "cantidadEntrada";
    cantidadProducto.innerText = arreglo[indice].cantidad;
    productoEntrada.appendChild(cantidadProducto);
    
    //precio del producto
    var precioProducto = document.createElement("P");
    precioProducto.className = "precio-carrito";
    precioProducto.innerText = arreglo[indice].precio;
    productoEntrada.appendChild(precioProducto);
}

//muestra el carrito con información de la sesion al cargarse la pagina
function mostrarCarritoSesion() {
    //se almacena los datos de la sesion en una variable
    var datosCarrito = sessionStorage.getItem('carrito');
    //se mete esa informacion en un array auxiliar parseándola
    const auxCarrito = JSON.parse(datosCarrito);

    //Si hay información dentro de la sesion
    if(auxCarrito.length > 0) {
        //Guardamos la informacion de la sesion dentro del carrito,
        //para despues ir mostrandola en el dom
        for (var i = 0; i < auxCarrito.length; i++) {
            
            carrito[i] = auxCarrito[i];
            generaCarritoHTML(i, carrito);
        }
        //por ultimo calcula el total
        calcularTotal();
    }
}

//Almacena la información del carrito dentro de la sesionStorage
function almacenaCarrito() {
    //crea un array auxiliar
    const auxCarrito = [];
    //recorre el carrito y mete la información dentro de ese 
    //array auxiliar
    for (var i = 0; i < carrito.length; i++) {
        auxCarrito[i] = carrito[i];
    }
    //guarda el array auxiliar dentro de la sesion
    sessionStorage.setItem("carrito", JSON.stringify(auxCarrito));
}

function actualizarEntradas() {
    //recogemos la informacion de las entradas del localStorage
    recogeEntradas();

    //Buscamos los productos que estan dentro del carrito
    //y actualizamos las cantidades restandolas
    for(var i = 0; i < carrito.length; i++) {
        for(var j = 0; j < entradas.length; j++) {
            if(carrito[i].id == entradas[j].id) {
                //Si encuentra una coincidencia, lo resta
                entradas[j].total_entradas -= carrito[i].cantidad;
            }
        }

    }

    //borro las entradas anteriores para que no salgan duplicadas
    const entradasDisponibles = document.getElementById("entradas-disponibles");
    borraElementosHTML(entradasDisponibles);

    //guardamos en el localStorage el array con las nuevas cantidades
    guardararray();
    //Vuelvo a mostrar las entradas actualizadas
    mostrarEntradas();

    //Limpiamos la información del carrito de la sesion
    sessionStorage.removeItem("carrito");
    //borramos el contenido html del carrito
    const carritoComprado = document.getElementById("carrito");
    borraElementosHTML(carritoComprado);
    
    //borramos la información del array carrito
    carrito.splice(0, carrito.length);

    mensajeExito();
    calcularTotal();
}

//Borra la informacion html previa a las compras (entradas y carrito)
function borraElementosHTML(elementoPadre) {
    while (elementoPadre.firstChild) {
        elementoPadre.removeChild(elementoPadre.lastChild);
    }
}

function mensajeExito() {
    var cajaExito = document.getElementById("purchaseSuccesful");
    cajaExito.style = "display: block ;height: initial;";
}