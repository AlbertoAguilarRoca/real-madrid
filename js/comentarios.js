var contenido = document.querySelector('#contenido');
getUsers().then(arrayUsers => {
    imprimirUsuarios(arrayUsers);
    getPost().then(arrayPost => {


        imprimirFinal(arrayPost, arrayUsers);
    })

});

//con este fecht obtenemos los usuarios guardandolo en un array y retornandolo para trabajar con el
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
    for (i = 0; i < arrayUsers.length; i++) {
        contenido.innerHTML += `
       <p>El id del usuario es :  ${arrayUsers[i].id}</p>
       <p>Su nombre es : ${arrayUsers[i].name}</p>
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
         <p>El id de usuario es :  ${arrayUsers[i].id}</p> 
         <p>El usuario es :  ${arrayUsers[i].name}</p>
         `
            // este segundo for recorre el post 
        for (x = 0; x < arrayPost.length; x++) {
            //comprobando si el comentario coincide con el id del usuario 
            //en caso de ser asi imprimimos todos sus titulos y comentarios
            if (arrayPost[x].userId == arrayUsers[i].id) {

                contenido.innerHTML += `
                <p>Su comentario ${y} es : ${arrayPost[x].title}</p>

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