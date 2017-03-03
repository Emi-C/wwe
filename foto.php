<?php
include('dbclass.php');

$id = isset($_GET['id']) ? $_GET['id'] :'';
if ($id=="") {
    $q = "select * from wwe_foto order by pos";
}else{
    $q = "select * from wwe_foto where id=".$id;
}
$res=mysqli_query($conn, $q);
//echo json_encode($res);

$cad=[];
$i=0;
while ($row = mysqli_fetch_array($res, MYSQLI_NUM)) {
  $cad[$i]["id"]=$row[0];
  $cad[$i]["tit"]=$row[1];
  $cad[$i]["testo"]=$row[2];
  $cad[$i]["cat"]=$row[3];
  $cad[$i]["img"]=$row[4];
  $cad[$i]["img1"]=$row[5];
  if ($cad[$i]["img1"]!=""){
    $cad[$i]["img1"]='<img class="img-responsive altfoto" src="'.$row[5].'">';
  }
  $cad[$i]["img2"]=$row[6];
  if ($cad[$i]["img2"]!=""){
    $cad[$i]["img2"]='<img class="img-responsive altfoto" src="'.$row[6].'">';
  }
  $cad[$i]["img3"]=$row[7];
  if ($cad[$i]["img3"]!=""){
    $cad[$i]["img3"]='<img class="img-responsive altfoto" src="'.$row[7].'">';
  }
    $i++;
}
echo json_encode($cad);

mysqli_close($conn);
?>
