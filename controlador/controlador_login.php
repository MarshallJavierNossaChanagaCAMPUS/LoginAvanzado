<?php
//Funcion que inicia una sesion
session_start();
//Si se presiona el boton...
if (!empty($_POST["btningresar"])) {
    if (!empty($_POST["usuario"]) and !empty($_POST["password"])) {
        //Envio datos al servidor
        $usuario=$_POST["usuario"];
        $password=$_POST["password"];
        //Me selecciona todo de la tabla usuario del sql
        $sql=$conexion->query(" select * from usuarios where usuario='$usuario' and password='$password' ");
        //Si el usuario existe la base de datos va a devolver un array con toda la informacion
        if ($datos=$sql->fetch_object()) {
            //Guarda los datos recibidos por la base de datos
            $_SESSION["id"]=$datos->ID;
            $_SESSION["nombre"]=$datos->usuario;
            $_SESSION["password"]=$datos->password;
            header("location: inicio.php");
        } else {
            echo "<div class='alert alert-danger'>Acceso denegado</div>";
        }
    } else {
        echo "Campos vacios";
    }
   
}

?>