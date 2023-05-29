<?php

    //Inicia sesión o reaunuda sesión iniciada
    session_start();
    //Destruye la sesión al llamarse el archivo a la acción
    session_destroy();
    //Redireccion al archivo en cuestión
    header("location: ../index.php");
    
?>