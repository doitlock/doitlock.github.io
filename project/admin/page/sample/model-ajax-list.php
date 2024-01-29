<?php
$pdo = new PDO('mysql:host=localhost;dbname=test;port=3306;charset=utf8mb4', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT
    *,
    (CASE
        WHEN type_seq = 14 THEN '대학교'
        WHEN type_seq = 15 THEN '기업'
        WHEN type_seq = 16 THEN '연구소'
        ELSE '미분류'
    END) AS type_text
FROM org_info
WHERE del_yn = 'N'
ORDER BY seq ASC";
$statement = $pdo->prepare($query);
$statement->execute();

$index = 0;
$result = [];
while (($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false) {
    $result[$index] = $row;
    $index++;
    // $row['org_name'] = htmlspecialchars($row['org_name'], ENT_QUOTES, 'UTF-8');
}

echo json_encode($result);
