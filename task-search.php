<?php
    include 'database.php';
    $search = $_POST['search'];

    if(!empty($search)){
        $sql = "SELECT * FROM task WHERE task LIKE '$search%' ";
        $query = mysqli_query($con,$sql);
        if(!$query){
            die('Query Error'. mysqli_error($con));
        }

        $json = array();
        while($row = mysqli_fetch_array($query)){
            $json[] = array(
                'name' => $row['task'],
                'description' => $row['description'],
                'id' => $row['id'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

?>