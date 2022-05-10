<?php
$pdo = new PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "INSERT INTO org_info (org_name, type_seq, business_id, website, remarks, reg_dt) VALUES(:org_name, :type_seq, :business_id, :website, :remarks, NOW())";
$statement = $pdo->prepare($query);
$statement->bindValue(':org_name', $_POST['org_name'], PDO::PARAM_STR);
$statement->bindValue(':type_seq', $_POST['type_seq'], PDO::PARAM_INT);
$statement->bindValue(':business_id', $_POST['business_id'], PDO::PARAM_STR);
$statement->bindValue(':website', $_POST['website'], PDO::PARAM_STR);
$statement->bindValue(':remarks', $_POST['remarks'], PDO::PARAM_STR);
$statement->execute();




// echo 'regist';
header('Location: module-regist.html');




?>