<?php
if (!empty($_POST["btnregistrar"])) {
    // Envío los datos a la base de datos
    $nombres = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $email = $_POST["email"];
    $usuario = $_POST["usuario"];
    $password = $_POST["password"];

    // Preparar la consulta SQL utilizando consultas preparadas
    $sql = "INSERT INTO usuarios (nombres, apellidos, email, usuario, password) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    
    if ($stmt) {
        // Vincular los parámetros y ejecutar la consulta
        $stmt->bind_param("sssss", $nombres, $apellidos, $email, $usuario, $password);
        $stmt->execute();

        // Verificar si la inserción fue exitosa
        if ($stmt->affected_rows > 0) {
            echo '<script>alert("Se ha registrado correctamente");</script>';
            header("location: index.php");
            exit;
        } else {
            echo '<script>alert("No se ha registrado correctamente");</script>';
        }

        // Cerrar la sentencia preparada
        $stmt->close();
    } else {
        // Manejar el error en caso de que la preparación de la consulta falle
        echo '<script>alert("Error en la consulta");</script>';
    }
}
?>
