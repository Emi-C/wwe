<?php
include('../dbclass.php');
$artid=$_POST['artid'];
$pos=$_POST['pos'];

$q="select * from wwe_foto where id=".$artid;
$res=mysqli_query($conn, $q);

while ($row = mysqli_fetch_assoc($res)) {
	$actpos=$row["pos"];
}

if ($pos>=$actpos){
	$qu="update wwe_foto set pos=pos-1 where pos>".$actpos." and pos<=".$pos;
}else{
	$qu="update wwe_foto set pos=pos+1 where pos<".$actpos." and pos>=".$pos;
}
$que="update wwe_foto set pos=".$pos." where id=".$artid;


if (!mysqli_query($conn, $qu)){
	echo $qu."<br>";
	echo("Error description shift: " . mysqli_error($conn));
}

if (!mysqli_query($conn, $que)){
	echo $qu."<br>";
	echo("Error description update: " . mysqli_error($conn));
}

mysqli_close($conn);
?>
