<?php
//Aqui va la direccion ip del servidor, en este caso localhost pq se hace desde el localhost

$host = "localhost";
$user = "campus";
$key = "campus2023";
$database = "Login";

//tambien se pueder usar mysqli_connect (investigar)

$conexion = new mysqli($host, $user, $key, $database);
$conexion->set_charset("utf8");

?>