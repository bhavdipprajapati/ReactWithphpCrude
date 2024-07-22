<?php
require('Connection.php');
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

try {
    
    $dbObj = new Connection;
    $conn = $dbObj->Connect();

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === "POST") {
        $data = json_decode(file_get_contents('php://input'));
        if (isset($data->std_name, $data->std_stander, $data->std_address, $data->std_sid) &&
            !empty($data->std_name) && !empty($data->std_stander) &&
            !empty($data->std_address) && !empty($data->std_sid)) {

            $sql = $conn->prepare("INSERT INTO `student`(`std_name`, `std_stander`, `std_address`, `std_sid`, `create_at`) 
                                    VALUES(:std_name, :std_stander, :std_address, :std_sid, now())");

            $sql->bindParam(':std_name', $data->std_name);
            $sql->bindParam(':std_stander', $data->std_stander);
            $sql->bindParam(':std_address', $data->std_address);
            $sql->bindParam(':std_sid', $data->std_sid);

            if ($sql->execute()) {
                echo json_encode(['message' => 'Data inserted successfully', 'status' => 'OK']);
            } else {
                echo json_encode(['message' => 'Unable to insert data', 'status' => 'ERROR']);
            }
        } else {
            echo json_encode(['message' => 'All fields are required.', 'status' => 'ERROR']);
        }
    } else {
        echo json_encode(['message' => 'Method not allowed', 'status' => 'ERROR']);
    }
} catch (Exception $e) {
    error_log($e->getMessage());
    echo json_encode(['message' => 'Internal server error', 'status' => 'ERROR']);
}
?>
