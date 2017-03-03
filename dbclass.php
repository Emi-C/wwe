<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*$servername = "localhost";
$username = "root";
$password = "";
$database = "wwe";*/
$servername = "localhost";
$username = "yh22kfvy";
$password = "2-?w3e{d87k$";
$database = "yh22kfvy_ec";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
