<?php
//Aqui va la direccion ip del servidor, en este caso localhost pq se hace desde el localhost

$host = "localhost";
$user = "root";
$key = "";
$port = "3306";

//tambien se pueder usar mysqli_connect (investigar)

$conexion = new mysqli($host, $user, $key, $port);
$conexion->set_charset("utf8");

?>