<?php

include 'database.php';
if(isset($_POST)){
    $name = $_POST['name'];
    $description = $_POST['description'];

    $sql = "INSERT INTO task(task,description) VALUE ('$name','$description')";

    $query = mysqli_query($con,$sql);
    if(!$query){
        die('Query error');
    }
    echo 'Task add successfully';

}




?>