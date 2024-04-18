<?php
// $pdo = new PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8mb4', 'root', '');
//  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = [
  'name' => '이시영',
  'age' => 33,
  'tall' => 178,
  'job' => 'dev'
];

echo json_encode($data);

