<?php

include('dbconnection.php');

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
    $id = $data['id'];
    $delete = "DELETE FROM markTable WHERE id = '$id'";
    if (!$id) {
        $resp = array(
            'success' => false,
            'message' => 'Invalid item name',
            'name' => $id,
            'data' => $data
        );
        echo json_encode($resp);  
        exit;      
    }
    $err = $conn->query($delete);
    $resp = array(
        'success' => true,
        'message' => 'Deleted successfully!!',
        'name' => $id,
        'data' => $data
    );
    echo json_encode($resp);
?>