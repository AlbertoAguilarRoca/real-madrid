var contenido = document.querySelector('#contenido');
var selectorUsuario = document.querySelector('#selecUser_comentario'); 

//Imprimimos los usuarios en un select
getUsers().then(arrayUsers => {    
    imprimirUsuarios(arrayUsers);
});

//Ejecutamos esta funcion en onload cargando 
// los comentarios de cada usuario
function mostrarComentarios() {
    getUsers().then(arrayUsers => {
        getPost().then(arrayPost => {
            imprimirFinal(arrayPost, arrayUsers);
        })   
    });
}

//con este fecht obtenemos los usuarios guardandolo en un array y 
//retornandolo para trabajar con el
async function getUsers() {
    //1. Llamamos a la api con fetch (crea una promesa)
    var arrayUsers;
    //2. Promesa, recogemos la respuesta con them
    var arrayUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        //3. guardamos la respuesta .data en un array
        .then((responseInJson) => {

            return responseInJson;

        })
        .catch((error) => {
            console.log("Hubo un problema con la petición Fetch" + error);
        });
    return arrayUsers;
}
//imprimimos los usuarios con su id y nombre
function imprimirUsuarios(arrayUsers) {
    console.log(arrayUsers);

    //con este for recorremos el array imprimiendo el id de usuario y nombre
    //dentro de un select para realizar los comentarios
    for (i = 0; i < arrayUsers.length; i++) {
        selectorUsuario.innerHTML += `
       <option value='${arrayUsers[i].id}'> 
        ${arrayUsers[i].id}: ${arrayUsers[i].name}</option>
        `
    }

}

// segundo fecht en el cual guardamos en el array todos los titulos asi como todos los comentarios y el id del usuario que los escribió y lo retornamos para trabajar con el
async function getPost() {
    //1. Llamamos a la api con fetch (crea una promesa)
    var arrayPost;
    //2. Promesa, recogemos la respuesta con them
    var arrayPost = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        //3. guardamos la respuesta .data en un array
        .then((responseInJson) => {

            return responseInJson;

        })
        .catch((error) => {
            console.log("Hubo un problema con la petición Fetch" + error);
        });
    return arrayPost;
}


//con esta funcion recorremos ambos arrays devueltos por el fechts
//para imprimir los usuarios su id sus comentarios y compararlos en los diferentes arrays que toma como parametros.
function imprimirFinal(arrayPost, arrayUsers) {
    //variable para contabilizar los comentarios y su contenido
    y = 1;

    //con este 1er for recorremos los la api de usuarios imprimiendo el usuario id y el nombre
    for (i = 0; i < arrayUsers.length; i++) {

        contenido.innerHTML += `
        <hr>
         <h2 class="usuarioTitulo">${arrayUsers[i].name}. Id de usuario  ${arrayUsers[i].id}</h2>
         `
            // este segundo for recorre el post 
        for (x = 0; x < arrayPost.length; x++) {
            //comprobando si el comentario coincide con el id del usuario 
            //en caso de ser asi imprimimos todos sus titulos y comentarios
            if (arrayPost[x].userId == arrayUsers[i].id) {

                contenido.innerHTML += `
                <h3 class="comentarioTitulo">Comentario ${y} : ${arrayPost[x].title}</h3>

                <p>El contenido del comentario ${y}  es :  ${arrayPost[x].body}</p>
              
                `
                    //aumentamos la variable por cada nuevo comentario
                y++;
            }

        }
        //gualamos la variable a 1 para que al vovler a contabilizar vuelva a empezar por el 1
        y = 1;

    }
}

var formulario = document.getElementById("formComentarios");
var menExito = document.getElementById("menExito");
//Detectamos cuando el usuario pulsa el boton de enviar
formulario.addEventListener('submit', function(e) {
    //Desactivamos las funcionalidades de submit
    e.preventDefault();

    //Subimos a la api los datos del formulario
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById("comTitulo").value,
            body: document.getElementById("comCuerpo").value,
            userId: document.getElementById("selecUser_comentario").value,
          }),
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((json) => {

        //actualizamos el array con los datos para volver a imprimir
        //con el nuevo comentario
        getUsers().then(arrayUsers => {
            getPost().then(arrayPost => {
                menExito.innerHTML = "Comentario realizado";
                //Añade el nuevo post al array de post
                arrayPost.push(json);
                //Borra todo el div con contenido
                borraElementosHTML(contenido);
                //Vuelve a imprimirlo actualizado
                imprimirFinal(arrayPost, arrayUsers);
            })   
        });
    });
});

//Borra la informacion html previa de los usuarios
function borraElementosHTML(elementoPadre) {
    while (elementoPadre.firstChild) {
        elementoPadre.removeChild(elementoPadre.lastChild);
    }
}