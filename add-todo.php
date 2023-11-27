<?php
$newTodo = "newTodo";

// recuperando i dati presenti nel file
$newTodo = file_get_contents('./todos.json');
$todos = json_decode($newTodo, true);

$todos[ ] = [ ];

// sovrascrivere il contenuto del file con i nuovi dati aggiornati
$string = json_encode($students);
file_put_contents('./students.json', $string);

header('Location: ./index.php');