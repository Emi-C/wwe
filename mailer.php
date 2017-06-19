<?php
$name=$_POST["name"];
$cog=$_POST["cog"];
$mail=$_POST["mail"];
$msg=$_POST["msg"];

$subject='Nuovo messaggio da '.$name.' '.$cog.' - '.$mail;
$to = 'emil.costanzo@gmail.com';
$message = $msg;
$headers = 'From: '.$name." ".$cog.' <'.$mail.'>';
if (!mail($to, $subject, $message, $headers)) {  http_response_code (400);} else {  http_response_code (200);}
?>
