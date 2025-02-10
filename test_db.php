<?php
require_once 'config/database.php';

try {
    $stmt = $pdo->query("SELECT * FROM products");
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "<pre>";
    print_r($products);
    echo "</pre>";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?> 