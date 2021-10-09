<?php

$file = 'data.json';

$conditionOne = filesize($file) < 16;
$conditionTwo = empty(trim(file_get_contents($file)));

if ($conditionOne || $conditionTwo)
    die('The JSON file has already been populated.');

$json = $_POST['data'];

file_put_contents($file, json_encode($json));
