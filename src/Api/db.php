<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
        $link = mysqli_connect("localhost", "root", "") or die(mysqli_connect_error());
        mysqli_select_db($link, "smart_travel"); 