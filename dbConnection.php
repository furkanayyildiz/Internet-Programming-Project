<?php

$local= "localhost";
$username= "root";
$password = "";
$db_name = "user_info";

$conn = mysqli_connect($local, $username, $password, $db_name);

if (!$conn) {
	echo "Connection failed!";
}