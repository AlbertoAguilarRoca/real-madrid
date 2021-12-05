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

    //con este for recorremos el array imprimiendo el id de usuario y nombre
    for (i = 0; i < arrayUsers.length; i++) {
        var parrafo1 = document.createElement("P");
        parrafo1.innerHTML = "El id del usuario es :" + arrayUsers[i].id;

        var parrafo2 = document.createElement("P");
        parrafo2.innerHTML = "Su nombre es :" + arrayUsers[i].name;

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
    var contenido = document.getElementById("contenido");


    //variable para contabilizar los comentarios y su contenido
    y = 1;

    //con este 1er for recorremos los la api de usuarios imprimiendo el usuario id y el nombre
    for (i = 0; i < arrayUsers.length; i++) {

        var conParra1 = document.createElement("P");
        conParra1.id = "parrafo1";
        var conParra2 = document.createElement("P");
        conParra2.id = "parrafo2";

        conParra1.innerHTML = "El id de usuario es :" + arrayUsers[i].id;
        conParra2.innerHTML = "El usuario es :" + arrayUsers[i].name;

        var parrafo1 = document.getElementById("parrafo1");
        var parrafo2 = document.getElementById("parrafo2");

        contenido.appendChild(parrafo1);
        contenido.appendChild(parrafo2);
        // este segundo for recorre el post 
        for (x = 0; x < arrayPost.length; x++) {
            //comprobando si el comentario coincide con el id del usuario 
            //en caso de ser asi imprimimos todos sus titulos y comentarios
            if (arrayPost[x].userId == arrayUsers[i].id) {

                var conParra3 = document.createElement("P");
                conParra3.id = "parrafo3";
                var conParra4 = document.createElement("P");
                conParra4.id = "parrafo4";

                conParra3.innerHTML = "Su comentario " + y + " es :" + arrayPost[x].title;

                conParra4.innerHTML = "El contenido del comentario " + y + " es :" + arrayPost[x].body;

                var parrafo3 = document.getElementById("parrafo3");
                var parrafo4 = document.getElementById("parrafo4");

                contenido.appendChild(parrafo3);
                contenido.appendChild(parrafo4);

                //aumentamos la variable por cada nuevo comentario
                y++;
            }

        }
        //gualamos la variable a 1 para que al vovler a contabilizar vuelva a empezar por el 1
        y = 1;

    }




}