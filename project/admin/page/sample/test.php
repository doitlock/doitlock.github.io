<?php

$pdo = new PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT * FROM org_info WHERE seq = :seq";
$statement = $pdo->prepare($query);
$statement->bindValue(':seq', 5, PDO::PARAM_INT);
$statement->execute();
if (($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {
  print_r($row);
}

