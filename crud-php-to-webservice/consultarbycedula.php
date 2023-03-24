<?php
    include_once('conexiones.php');


    $id = $_GET['id'];
    $nombre = $_GET['nombre'];
    $cedula = $_GET['cedula'];
    $cantidad = $_GET['cantidad'];
    $modelo = $_GET['modelo'];
    $talla = $_GET['talla'];
    $valor = $_GET['valor'];

    $cedula = 1;

    $result=mysqli_query($mysqli, "select * from usuario where id='$cedula'") or die("error en la consula");
    $row = array();

    while ($r = mysqli_fetch_assoc($result)) {
        $rwo[] = $r;
    }

    $respuesta = json_encode($row);
    echo $respuesta;
    return $respuesta;
?>