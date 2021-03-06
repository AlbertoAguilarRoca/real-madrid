<!doctype html>
<html lang="ES">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Real Madrid CF</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


        <!-- CSS bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- ALGUNOS ESTILOS BASE -->
        <link rel="stylesheet" href="css/main.css">
        <!-- NUESTRO CSS -->
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/sorteo.css">
        <link rel="stylesheet" href="css/login.css">
        <link rel="stylesheet" href="css/aficionado.css">
        <link rel="stylesheet" href="css/comentarios.css">


    </head>
    <body id="main" onload="mostrarComentarios()">
    <!-- CONDICIONAL PARA IE9 E INFERIORES -->
        <!--[if lte IE 9]>
            <p class="browserupgrade">Estás usando un navegador <strong>obsoleto</strong>. Por favor <a href="http://browsehappy.com/">actualiza tu navegador</a>
             para mejorar la experiencia de navegación.</p>
        <![endif]-->

        <!-- Header -->
        <div class="container">
        <header>
            <div class="cabecera">
                <div class="row cabecera-logo">
                    <div class="col">
                        <div class="logo">
                            <a href="index.php"><img src="img/real-madrid-c-f.svg"></a>
                        </div>
                    </div>
                    <div class="col">
                        <p class="logotipo"><a href="index.php">Real<span>madrid</span></a></p>
                    </div>
                </div><!--end row-->
                
                <div id="menu-icon" class="menu-burguer" onclick="openNav()">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="menu">
                    <nav>
                        <ul class="menu-nav">
                            <li class="menu-nav-element"><a href="index.php">Inicio</a></li>
                            <li class="menu-nav-element"><a href="#">Futbol</a></li>
                            <li class="menu-nav-element"><a href="#">Baloncesto</a></li>
                            <li class="menu-nav-element"><a href="#">El club</a></li>
                            <li class="menu-nav-element"><a href="aficionado.php">Aficionados</a></li>
                            <li class="menu-nav-element"><a href="comentarios.php">Comentarios</a></li>
                        </ul>
                    </nav>
                    <ul class="menu-right">
                            <li class="menu-rigth-element"><a href="#">Entradas</a></li>
                            <li class="menu-rigth-element"><a href="#">Área Vip</a></li>
                            <li class="menu-rigth-element"><a href="#">Madridistas</a></li>
                            <li class="menu-rigth-element"><a href="#">Tour</a></li>
                            <li class="menu-rigth-element"><a href="#">Tienda</a></li>
                    </ul>
                    <div class="buscador-icono">
                        <div id="search-icon" class="buscador-search">
                        <img src="img/search-solid.svg" onclick="openSearch()">
                        </div>
                        <div class="buscador-input" id="buscador-form">
                            <input type="text" placeholder="Buscar..." autofocus>
                        </div>
                    </div>
                    <ul class="menu-top">
                            <li class="menu-top-element"><a href="#">Palmarés</a></li>
                            <li class="menu-top-element"><a href="#">Fundación</a></li>
                            <li class="menu-top-element"><a href="#">RM Next</a></li>
                            <li class="menu-top-element"><a href="#">Regístrate</a></li>
                            <li class="menu-top-element"><a href="login.php">Login</a></li>
                    </ul>
                </div>
                
            </div><!--final div cabecera-->
        </header>
        </div><!-- end div container -->


<div class="container">
    <h1>Página de comentarios</h1>
    <p>Bienvenido. En está página puedes hacer los comentarios que desees.</p>

    <div class="form_comentarios">
        <form id="formComentarios">
            <select name="userId" id="selecUser_comentario">
                <!-- usuarios que pueden hacer comentarios -->
            </select>
            <label for="nombre" class="labelForm">Título del comentario</label>
            <input type="text" name="title" class="tituloForm" id="comTitulo">
            <label for="comentario" class="labelForm">Cuerpo del comentario</label>
            <textarea name="body" class="cuerpoComentario" rows="5" id="comCuerpo"></textarea>
            <input type="submit" value="Realizar comentario" class="botonForm">
        </form>
        <p style="padding: 10px 0; color: green;" id="menExito"></p>
    </div>

    <!-- aquí van los comentarios -->
    <div id="contenido"></div>
</div>
    



<script src="js/comentarios.js"></script>
<?php include 'footer.php'; ?>