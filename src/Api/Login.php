<?php
include("db.php");

$res = array("error"=>false);
$action='';

if(isset($_GET['action'])){
    $action = $_GET["action"];
}

if($action == "login"){
    $query = "select * from user where email = `$_POST['email']` and password = `$_POST['password']`";
    $result = mysqli_query($link, $sql);
    if ($result->num_rows > 0) {
        // $_SESSION['user'] = $user;
        return true;
        // chuyen trang
    }else{
        return false;
    }
    
}