<?php
include('dbconnection.php');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$result = $conn->query("SELECT name FROM markTable");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"Name":"'  . $rs["name"] . '"}';
 
}
$outp ='{"records:"['.$outp.']';
$conn->close();

echo($outp);
?>