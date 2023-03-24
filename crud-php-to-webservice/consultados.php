<?php
    header('Access-Control-Allow-Origin: *');

    include_once('conexiones.php');

    $result = mysqli_query($mysqli, "select * from universitarios ORDER BY id DESC");

    if (!$result) {
        $error = mysqli_error($mysqli);
        echo json_encode(array("error" => "Error en la consulta: $error"));
        exit;
    }

    $rows = array();

    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }

    $respuesta = json_encode($rows);

    if (!$respuesta) {
        $error = json_last_error_msg();
        echo json_encode(array("error" => "Error al codificar la respuesta JSON: $error"));
        exit;
    }

    echo $respuesta;
?>