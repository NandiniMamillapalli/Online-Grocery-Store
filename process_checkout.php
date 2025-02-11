<?php
session_start();
require_once 'config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Begin transaction
        $pdo->beginTransaction();
        
        // Insert user data
        $stmt = $pdo->prepare("INSERT INTO users (first_name, last_name, email, phone, address, city, state, pin_code) 
                              VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $_POST['firstName'],
            $_POST['lastName'],
            $_POST['email'],
            $_POST['phone'],
            $_POST['address'],
            $_POST['city'],
            $_POST['state'],
            $_POST['pinCode']
        ]);
        
        $userId = $pdo->lastInsertId();
        
        // Store user data in session for payment page
        $_SESSION['user_data'] = [
            'id' => $userId,
            'firstName' => $_POST['firstName'],
            'lastName' => $_POST['lastName'],
            'email' => $_POST['email'],
            'phone' => $_POST['phone'],
            'address' => $_POST['address'],
            'city' => $_POST['city'],
            'state' => $_POST['state'],
            'pinCode' => $_POST['pinCode'],
            'delivery' => $_POST['delivery']
        ];
        
        $pdo->commit();
        header('Location: payment.html');
        exit;
        
    } catch (Exception $e) {
        $pdo->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?> 