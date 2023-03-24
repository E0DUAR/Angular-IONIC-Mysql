<?php
header('Access-Control-Allow-Origin: *');
$mysqli = mysqli_connect("127.0.0.1", "root", "", "estudiantes");
if (!$mysqli) {
    die("Error en la conexión");
}
?>

