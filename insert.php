<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
include('dbconnection.php');
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
print_r($data['sub']);
    $name = $data['name'];
    $tamil = $data['tamil'];
    $english = $data['english'];
    $maths = $data['maths'];
    $science = $data['science'];
    $social = $data['social'];
    $total = $data['total'];
    $ins = "INSERT INTO markTable (name,tamil,english,maths,science,social,total) VALUES ( '$name','$tamil','$english','$maths','$science','$social','$total')";
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