<?php
session_start();
require_once 'config/database.php';

// Fetch order details if order number exists in session
$orderNumber = isset($_SESSION['order_number']) ? $_SESSION['order_number'] : 'FM2025022301';

try {
    // Fetch order and user details
    $stmt = $pdo->prepare("
        SELECT o.*, u.*,
        o.delivery_method as delivery_type,
        o.total_amount as order_total
        FROM orders o 
        JOIN users u ON o.user_id = u.id 
        WHERE o.order_number = ?
    ");
    $stmt->execute([$orderNumber]);
    $orderData = $stmt->fetch(PDO::FETCH_ASSOC);

    // Fetch order items
    $stmt = $pdo->prepare("
        SELECT * FROM order_items 
        WHERE order_id = ?
    ");
    $stmt->execute([$orderData['id']]);
    $orderItems = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $e) {
    // For demo purposes, use sample data if query fails
    $orderData = [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'address' => '123 Main Street',
        'city' => 'Hyderabad',
        'state' => 'Telangana',
        'pin_code' => '500001',
        'phone' => '+91 9959552795',
        'order_total' => 22.95,
        'delivery_fee' => 4.99,
        'discount' => 1.00
    ];
    
    $orderItems = [
        ['product_name' => 'Organic Bananas', 'quantity' => 1, 'price' => 4.99],
        ['product_name' => 'Fresh Apples', 'quantity' => 2, 'price' => 7.98],
        ['product_name' => 'Organic Milk', 'quantity' => 1, 'price' => 5.99]
    ];
}
?>

<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <!-- Keep existing head content -->
    <?php include('header.php'); ?>
</head>
<body>
    <header style="background-color:aqua">
        <!-- Keep existing header content -->
    </header>

    <main>
        <div class="container">
            <div class="checkout-progress no-print">
                <!-- Keep existing progress steps -->
            </div>

            <div class="confirmation-container">
                <i class="fas fa-check-circle success-icon"></i>
                <h1>Thank You for Your Order!</h1>
                <p>Your order has been successfully placed and will be processed soon.</p>

                <div class="order-number">
                    <strong>Order Number:</strong> <?php echo htmlspecialchars($orderNumber); ?>
                </div>

                <div class="order-details">
                    <div class="detail-section">
                        <h3>Delivery Address</h3>
                        <p><?php echo htmlspecialchars($orderData['first_name'] . ' ' . $orderData['last_name']); ?><br>
                           <?php echo htmlspecialchars($orderData['address']); ?><br>
                           <?php echo htmlspecialchars($orderData['city'] . ', ' . $orderData['state'] . ' ' . $orderData['pin_code']); ?><br>
                           Phone: <?php echo htmlspecialchars($orderData['phone']); ?></p>
                    </div>

                    <div class="detail-section">
                        <h3>Order Summary</h3>
                        <div class="items-list">
                            <?php foreach ($orderItems as $item): ?>
                            <div class="item">
                                <span><?php echo htmlspecialchars($item['product_name']); ?>
                                      <?php if($item['quantity'] > 1) echo " (x" . $item['quantity'] . ")"; ?></span>
                                <span>$<?php echo number_format($item['price'], 2); ?></span>
                            </div>
                            <?php endforeach; ?>

                            <div class="price-summary">
                                <div class="price-row">
                                    <span>Subtotal</span>
                                    <span>$<?php echo number_format($orderData['order_total'] - $orderData['delivery_fee'] + $orderData['discount'], 2); ?></span>
                                </div>
                                <div class="price-row">
                                    <span>Shipping</span>
                                    <span>$<?php echo number_format($orderData['delivery_fee'], 2); ?></span>
                                </div>
                                <div class="price-row">
                                    <span>Discount</span>
                                    <span>-$<?php echo number_format($orderData['discount'], 2); ?></span>
                                </div>
                                <div class="price-row total-row">
                                    <span>Total</span>
                                    <span>$<?php echo number_format($orderData['order_total'], 2); ?></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="detail-section">
                        <h3>Estimated Delivery</h3>
                        <p>Your order will be delivered within 2-3 business days.</p>
                    </div>
                </div>

                <div class="action-buttons no-print">
                    <!-- Keep existing buttons -->
                </div>
            </div>
        </div>
    </main>

    <footer class="no-print">
        <!-- Keep existing footer content -->
    </footer>

    <script src="script.js"></script>
</body>
</html> 