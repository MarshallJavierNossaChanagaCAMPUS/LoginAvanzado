<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</head>
<body>
    <div class="login-content formulario position-absolute top-50 start-50 translate-middle">
        <form method="post" action="">
            <div class="div">
                <h5>Nombres</h5>
                <input type="text" name="nombres" id="nombres" class="input" required>
            </div>
            <div class="div">
                <h5>Apellidos</h5>
                <input type="text" name="apellidos" id="apellidos" class="input" required>
            </div>
            <div class="div">
                <h5>correo</h5>
                <input type="email" name="email" id="correo" class="input" required>
            </div>
            <div class="div">
                <h5>Usuario</h5>
                <input type="text" name="usuario" id="usuario" class="input" required>
            </div>
            <div class="div">
                <h5>Contraseña</h5>
                <input type="password" name="password" id="contrasena" class="input" required>
            </div>
            <input type="submit" name="btnregistrar" class="btn" value="REGISTRARSE">
            <?php
                include "modelo/conexion.php";
                include "controlador/controlador_register.php"
            ?>
        </form>
    </div>
</body>
</html>