<?php include 'header.php';?>

<!-- imagen de cabecera -->
<body onload="guardado()">
<div class="container">
    <div class="slide-login">
        <img src="img/estadio-bernabeu.jpg">
        <h1 class="titulo-login">Login</h1>
    </div>

    <!-- registro -->
    <div class="login-form">
        <div class="login-form-cuerpo">
            <h2>Identifícate</h2>
            <input id="nameUser" type="text" placeholder="Usuario" name="user">
            <input id="passwordUser" type="password" placeholder="Contraseña" name="password">
            <input type="submit" value="Iniciar sesión" onclick="login()">
            <p><input type="checkbox" id="caja">Para recordarme en este equipo.</p>

            <p id="mensajeLogin" class="resultado-val"></p>
            <p id="mensajevacio"></p>
            <p class="registro"><a href="#">¿No tienes cuenta? Regístrate</a></p>
        </div>
    </div>
</div> <!-- fin de container -->


<!-- End de la web -->
</body>
<?php include 'footer.php';?>