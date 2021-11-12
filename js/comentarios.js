
/*Solicita todos los usuarios*/
function solicitar() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            var resultado = document.getElementById('resultado')
            resultado.innerHTML = 'Id de usuario:' +response.id+ 'Nombre' +response.nombre;
        })

}


