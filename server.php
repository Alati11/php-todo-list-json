<?php

// $todos_json = file_get_contents('./todos.json'):
$todos = [
    [
    'text' => 'HTML',
    'done' => true
    ],
    [
    'text' => 'CSS',
    'done' => true
    ],
    [
    'text' => 'JavaScript',
    'done' => true
    ],
    [
    'text' => 'PHP',
    'done' => false
    ],
    [
    'text' => 'Python',
    'done' => false
    ],
    ];

header('Content-Type: application/json');

$response = [
    'success' => true,
    'results' => $todos,
];
echo json_encode ($todos);

?>