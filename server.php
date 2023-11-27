<?php

include __DIR__ . '/db.php';

header('Content-Type: application/json');

$response = [
    'success' => true,
    'results' => $todos,
];
echo json_encode ($todos);

?>