<?php
include 'database.php';
if(isset($_POST['id'])){
    $task = $_POST['name'];
    $description = $_POST['description'];
    $id = $_POST['id'];
    $sql = "UPDATE task SET task = '$task', description = '$description' WHERE id = '$id'";
    $stmt = mysqli_query($con,$sql);
    if(!$stmt){
        die('Query Failed');
    }
}



?>