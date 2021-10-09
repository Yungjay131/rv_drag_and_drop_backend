<?php

$filename = 'data.json';

$data = file_get_contents($filename);

header('Content-type:application/json;charset-utf-8');

$query_param = $_GET['users'];
$_data = json_decode($data, true);

/* echo '<pre>';
var_dump($_data);
echo '</pre>'; */

$_result = [];
for ($index = 0; $index < $query_param; $index++) {
    $_result[$index] =  $_data[$index];
}


$__result = json_encode($_result);
echo $__result;
