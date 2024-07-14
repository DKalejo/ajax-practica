<?php
include 'database.php';
if(isset($_POST['id'])){
    $id = $_POST['id'];
    $sql = "SELECT * FROM task WHERE id = $id";
    $stmt = mysqli_query($con,$sql);
    $json = array();
    while($row = mysqli_fetch_assoc($stmt)){
        $json[] = array(
            'id' => $row['id'],
            'name' => $row['task'],
            'description' => $row['description'],     
        );
    }
    $jsonencode = json_encode($json[0]);
    echo $jsonencode;
}





?>