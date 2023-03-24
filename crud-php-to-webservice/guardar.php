<?php
    header('Access-Control-Allow-Origin: *');
    include_once('conexiones.php');

    $nombre = $_GET['nombre'];
    $correo = $_GET['correo'];
    $universidad = $_GET['universidad'];

    mysqli_query($mysqli, "insert into universitarios (nombre, correo, universidad) values ('$nombre', '$correo', '$universidad')");
    $res=json_encode("Universitario insertado con exito");
    echo $res;
    return $res;
?>