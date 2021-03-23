<?php
include('dbconnection.php');

header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$sql = "SELECT * FROM markTable";
$res = $conn->query($sql);
$resp = array(
    'success' => true,
    'data' => $res,
    'message' => 'Loaded successfully!!'
);
echo json_encode($resp);
?>