<?php

    if (!empty($_POST["btnregistrar"])) {

        //Envio los datos a la db
        $nombres=$_POST["nombres"];
        $apellidos=$_POST["apellidos"];
        $email=$_POST["email"];
        $usuario=$_POST["usuario"];
        $password=$_POST["password"];

        //Inserta los datos a la base de datos
        $insertar = "INSERT INTO usuarios VALUES ('$nombres', '$apellidos', '$email', '$usuario', '$password')";

        //Hago la conexión de mysql con el envio de datos (falta probarlo)
        $query = mysqli_query($conectar, $insertar);
        if ($query) {
            echo `<script>
                    alert("Se ha registrado correctamente")
                  </script>`;
            header("location: index.php");
        } else {
            echo `<script>
                    alert("No se ha registrado correctamente")
                  </script>`;
        }
    }

?>