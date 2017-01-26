<?php
include('../dbclass.php');
$tit=$_POST['tit'];
$txt=$_POST['txt'];
$img=$_FILES['img'];
$cat=$_POST['cat'];
//$anno=$_POST['anno'];

//$uploaddir = '/backend/imgups/';
$uploaddir = '/wwe/backend/imgups/';
$uploadfile = $uploaddir . basename($img['name']);

$x=1;
$newfilename=str_replace(" ","_",$uploadfile);

while(is_file($_SERVER['DOCUMENT_ROOT'].$newfilename)){
	$newfilename=str_replace(" ","_",$uploadfile);

	$fn=explode(".",$newfilename);
	$fp=(count($fn))-2;
	$fn[$fp].=$x;

	$newfilename=implode(".",$fn);
	$x++;
}

if (move_uploaded_file($img['tmp_name'], $_SERVER['DOCUMENT_ROOT'].$newfilename)) {
    echo "File ".$newfilename." is valid, and was successfully uploaded.\n";
} else {
	echo $newfilename."\n\n";
    echo "Possible file upload attack!\n";
}


//$q="insert into wwe_foto (tit,testo,img,cat,anno) values ('".$tit."','".$txt."','".$newfilename."',".$cat.",'".$anno."')";
$q="insert into wwe_foto (tit,testo,img,cat) values ('".$tit."','".$txt."','".$newfilename."',".$cat.")";
if (!mysqli_query($conn, $q)) {
    http_response_code(500);
    echo $q."\n";
    echo "Error insert table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
