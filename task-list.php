<?php
    include 'database.php';

    $sql = "SELECT * FROM task";

    $stmt = mysqli_query($con,$sql);
    $json = array();
    while( $row =mysqli_fetch_assoc($stmt)){
        $json[] = array(
            'id' => $row['id'],
            'name' => $row['task'],
            'description' => $row['description'],
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;


?>