<?php
$pdo = new PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "UPDATE org_info SET
    org_name = :org_name,
    type_seq = :type_seq,
    business_id = :business_id,
    website = :website,
    remarks = :remarks,
    mod_dt = NOW()
WHERE seq = :seq";
$statement = $pdo->prepare($query);
$statement->bindValue(':org_name', $_POST['org_name'], PDO::PARAM_STR);
$statement->bindValue(':type_seq', $_POST['type_seq'], PDO::PARAM_INT);
$statement->bindValue(':business_id', $_POST['business_id'], PDO::PARAM_STR);
$statement->bindValue(':website', $_POST['website'], PDO::PARAM_STR);
$statement->bindValue(':remarks', $_POST['remarks'], PDO::PARAM_STR);
$statement->bindValue(':seq', $_POST['seq'], PDO::PARAM_INT);
$statement->execute();


/*
echo $_POST['menu_id'];
echo $_POST['menu_title'];
*/
echo 'modify';
header('Location: module-list.html');







?>