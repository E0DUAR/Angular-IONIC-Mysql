<?php
    include_once('conexiones.php');

    $id = $_GET['id'];
    $nombre = $_GET['nombre'];
    $correo = $_GET['correo'];
    $universidad = $_GET['universidad'];

    try {
        $query = "UPDATE universitarios SET nombre='$nombre', correo='$correo', universidad='$universidad' WHERE id='$id'";
        mysqli_query($mysqli, $query) or die("error en la edicion: " . mysqli_error($mysqli));
        $res = json_encode("Actualizacion exitosa");
        echo $res;
    } catch (Exception $e) {
        $error = "Error al actualizar: " . $e->getMessage();
        error_log($error);
        echo json_encode(array('error' => $error));
    }
?>