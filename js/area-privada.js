function validateLogin() {
    var password = document.getElementById("passwordUser").value;
    var contrasena = "password";
    var contador = 2;
    var mensaje = "";

        if (password == contrasena) {
            window.location.replace('area-privada.php');
        } else {

            while (mensaje != contrasena || contador > 0) {
              mensaje = prompt("Contraseña errónea, vuelve a introducirla. Te quedan "+contador+" intentos.");
              contador--;
              console.log(mensaje); 
              console.log(contador);
            }
            
        }


        if (mensaje == contrasena) {
            window.location.replace('area-privada.php');
        }

        if (contador < 1) {
            window.location.replace('index.php');
        }

}