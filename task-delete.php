<?php
include 'database.php';

if (isset($_POST['id'])) {
    $id = $_POST['id'];

    $sql = "DELETE FROM task WHERE id = $id";
    $stmt = mysqli_query($con,$sql);
    if(!$stmt){
        die('Query Failed');
    }
    echo "Task Deleted Successfully";
}
