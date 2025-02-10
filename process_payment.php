<?php
session_start();
require_once 'config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $pdo->beginTransaction();
        
        // Generate order number
        $orderNumber = 'FM' . date('Ymd') . rand(1000, 9999);
        
        // Get user data from session
        $userData = $_SESSION['user_data'];
        
        // Insert order
        $stmt = $pdo->prepare("INSERT INTO orders (user_id, order_number, total_amount, delivery_method, 
                              payment_method, order_status) 
                              VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $userData['id'],
            $orderNumber,
            $_POST['totalAmount'],
            $userData['delivery'],
            $_POST['paymentMethod'],
            'Pending'
        ]);
        
        $orderId = $pdo->lastInsertId();
        
        // Store cart items from session
        foreach ($_SESSION['cart'] as $item) {
            $stmt = $pdo->prepare("INSERT INTO order_items (order_id, product_name, quantity, price) 
                                  VALUES (?, ?, ?, ?)");
            $stmt->execute([
                $orderId,
                $item['name'],
                $item['quantity'],
                $item['price']
            ]);
        }
        
        $pdo->commit();
        
        // Store order number for confirmation page
        $_SESSION['order_number'] = $orderNumber;
        
        // Clear cart
        unset($_SESSION['cart']);
        
        header('Location: order-confirmation.php');
        exit;
        
    } catch (Exception $e) {
        $pdo->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?> 