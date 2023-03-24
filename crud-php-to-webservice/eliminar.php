<?php
    include_once('conexiones.php');

    $id=$_GET['id'];

    mysqli_query($mysqli, "delete from universitarios where id='$id'") or die ("Error al eliminar");
    $res = json_encode("Borrado correctamente");
    echo $res;
    return $res;
?>