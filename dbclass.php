<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "wwe";
/*$servername = "localhost";
$username = "lswrdpsw_usr";
$password = "47$-notaTe";
$database = "lswr_dpsw_it";
$servername = "localhost";
$username = "wwe";
$password = "JSUdgtzve653Iw9";
$database = "wwe_db";*/

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
