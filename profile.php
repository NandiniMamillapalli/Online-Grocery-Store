


<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    $_SESSION['error'] = 'Sign in to view your profile.';
    header('Location: index.php');
    exit;
}

require_once 'config/db.php';

// Get user details
$stmt = $conn->prepare("SELECT username, email FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile - Fresh Mart</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #007bff;
    padding: 15px 30px;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover, .nav-links .active {
    color: #ffdd57;
}

/* Profile Page */
.profile-container {
    width: 80%;
    margin: 40px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 20px;
}

.profile-avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #007bff;
}

.profile-details h2 {
    margin: 0;
    color: #007bff;
}

.profile-section {
    margin-top: 30px;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Loyalty Section */
.loyalty-card {
    background: #ffdd57;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}

.progress-bar {
    width: 100%;
    background: #e0e0e0;
    border-radius: 5px;
    margin-top: 10px;
}

.progress {
    height: 10px;
    background: #007bff;
    border-radius: 5px;
    width: 70%;
}

/* Preferences Section */
.preference-options .checkbox-group label {
    display: block;
    margin: 5px 0;
    cursor: pointer;
}

/* Button Styles */
button {
    background: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #0056b3;
}

/* Footer */
.footer-content {
    display: flex;
    justify-content: space-around;
    background: #007bff;
    color: white;
    padding: 20px 0;
    text-align: center;
}

.footer-bottom {
    text-align: center;
    background: #0056b3;
    padding: 10px;
    color: white;
}

    </style>
</head>
<body class="profile-page">
    <header>
        <nav class="navbar">
            <div class="logo">Fresh Mart</div>
            <div class="nav-links">
                <a href="index.php">Home</a>
                <a href="products.html">Products</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="profile.php" class="active">Profile</a>
                <button class="theme-toggle" onclick="toggleTheme()">
                    <i class="fas fa-moon"></i>
                </button>
                <a href="cart.html" class="cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count">0</span>
                </a>
            </div>
            <button id="plogoutBtn" class="logout-btn" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        </nav>
    </header>

    <main class="profile-page">
        <div class="profile-container">
            <!-- User Info Section -->
            <section class="profile-section user-info">
                <div class="profile-header">
                    <div class="profile-avatar">
                        <img id="userAvatar" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" alt="Profile Picture">
                        <button class="edit-avatar" onclick="editAvatar()">
                            <i class="fas fa-camera"></i>
                        </button>
                    </div>
                    <div class="profile-details">
                        <h2 id="profileUser"><?= htmlspecialchars($user['username']); ?></h2>
                        <p id="profileEmail"><?= htmlspecialchars($user['email']); ?></p>
                    </div>
                </div>
            </section>

            <!-- Loyalty Status Section -->
            <section class="profile-section loyalty-status">
                <h2>Loyalty Status</h2>
                <div class="loyalty-card">
                    <div class="loyalty-tier">
                        <span class="tier-badge" id="userTier">Gold</span>
                        <span class="points" id="userPoints">5,240 points</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" id="tierProgress"></div>
                    </div>
                    <p class="next-tier" id="nextTierInfo">760 points to Platinum</p>
                </div>
                <div class="points-history">
                    <h3>Points History</h3>
                    <div id="pointsHistoryList" class="history-list">
                        <!-- Points history will be populated here -->
                    </div>
                </div>
            </section>

            <!-- Order History Section -->
            <section class="profile-section order-history">
                <h2>Order History</h2>
                <div class="orders-list" id="ordersList">
                    <!-- Order history will be populated here -->
                </div>
            </section>

            <!-- Preferences Section -->
            <section class="profile-section preferences">
                <h2>Preferences</h2>
                <div class="preference-options">
                    <div class="preference-group">
                        <h3>Dietary Preferences</h3>
                        <div class="checkbox-group">
                            <label><input type="checkbox" name="dietary" value="vegetarian"> Vegetarian</label>
                            <label><input type="checkbox" name="dietary" value="vegan"> Vegan</label>
                            <label><input type="checkbox" name="dietary" value="gluten-free"> Gluten-Free</label>
                            <label><input type="checkbox" name="dietary" value="dairy-free"> Dairy-Free</label>
                        </div>
                    </div>
                    <div class="preference-group">
                        <h3>Notification Settings</h3>
                        <div class="checkbox-group">
                            <label><input type="checkbox" name="notifications" value="orders"> Order Updates</label>
                            <label><input type="checkbox" name="notifications" value="deals"> Special Deals</label>
                            <label><input type="checkbox" name="notifications" value="points"> Points Updates</label>
                            <label><input type="checkbox" name="notifications" value="newsletter"> Newsletter</label>
                        </div>
                    </div>
                </div>
                <button class="save-preferences-btn" onclick="savePreferences()">Save Preferences</button>
            </section>
        </div>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: support@freshmart.com</p>
                <p>Phone: (555) 123-4567</p>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Newsletter</h3>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email">
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Fresh Mart. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
    <script  src="auth.js"></script>
</body>
</html>