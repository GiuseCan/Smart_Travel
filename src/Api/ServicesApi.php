<?php
include("db.php");
$res = array("error"=>false);
$action='';

if(isset($_GET['action'])){
    $action = $_GET["action"];
}

if($action == "services"){
    $query = "select * from location where location_start = `$_POST['noidi']` and location_end = `$_POST['noiden']`";
    $res = mysqli_query($link, $sql);

}

echo "hello";
