<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
include('dbconnection.php');
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
    $name = $data['name'];
    $sub = $data['sub'];
    $ins = "INSERT INTO markTable (Name,subjectAndMark) VALUES ( '$name','$sub' )";
    if (!$name) {
        $resp = array(
            'success' => false,
            'message' => 'Invalid item name',
            'name' => $name,
            'data' => $data
        );
        echo json_encode($resp);  
        exit;      
    }
    $err = $conn->query($ins);
    $resp = array(
        'success' => true,
        'message' => 'Added successfully!!',
        'name' => $name,
        'data' => $data
    );
    echo json_encode($resp);
?>