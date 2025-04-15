<?php
session_start();
if (isset($_SESSION['error'])) {
    echo "<script>alert('" . $_SESSION['error'] . "');</script>";
    unset($_SESSION['error']); // Clear the message after displaying
}
?>


<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fresh Mart - Online Grocery Store</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Auth Modal Styles */
        .auth-form {
            padding: 20px;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
        }

        .auth-form input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            box-sizing: border-box;
        }

        .auth-form button {
            width: 100%;
            padding: 12px;
            margin: 15px 0;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .auth-form button:hover {
            background-color: #45a049;
        }

        .auth-form p {
            text-align: center;
            margin-top: 15px;
        }

        .auth-form a {
            color: #4CAF50;
            text-decoration: none;
        }

        .auth-form a:hover {
            text-decoration: underline;
        }

        #loginModal .modal-content {
            max-width: 450px;
            margin: 50px auto;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        #loginModal .modal-header {
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #loginModal .modal-header h2 {
            margin: 0;
            font-size: 24px;
        }

        #loginModal .close {
            color: white;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        #loginModal .close:hover {
            color: #f1f1f1;
        }
        /* Ensure styles apply only to the #locationModal */
    #locationModal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
    }

    /* Style for the modal content */
    #locationModal .modal-content {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        width: 90%;
        max-width: 400px;
        position: relative;
        animation: fadeIn 0.3s ease-in-out;
    }

    /* Animation for modal appearance */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Modal header styling */
    #locationModal .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
    }

    /* Close button */
    #locationModal .close {
        cursor: pointer;
        font-size: 24px;
    }

    /* Input field */
    #locationModal input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    /* Button styling */
    #locationModal button {
        width: 100%;
        padding: 10px;
        background: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    #locationModal button:hover {
        background: #0056b3;
    }

    /* Selected location text */
    #locationModal #selectedLocation {
        margin-top: 10px;
        font-weight: bold;
    }

    </style>
</head>
<body>
    <header>
        <div class="promo-banner" id="promoBanner">
            Special Offer: Free delivery on orders above $50! Use code: FRESH50 
            <button class="close-banner" onclick="closeBanner()">&times;</button>
        </div>
        <!-- style of navbar -->
        <nav class="navbar">
            <div class="left-section">
                <a href="profile.php" class="profile-btn">
                    <div class="profile-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <span class="profile-text">My Profile</span>
                </a>
                <div class="logo">Fresh Mart</div>
            </div>
            <div class="search-bar">
                <input type="text" id="searchInput" placeholder="Search products...">
                <button onclick="searchProducts()"><i class="fas fa-search"></i></button>
            </div>
            <div class="nav-links">
                <button class="theme-toggle" onclick="toggleTheme()">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="wishlist-btn" onclick="toggleWishlist()">
                    <i class="fas fa-heart"></i>
                    <span id="wishlistCount">0</span>
                </button>
                <button class="cart-btn" onclick="toggleCart()">
                    <i class="fas fa-shopping-cart"></i>
                    <span id="cartCount">0</span>
                </button>
                <button class="login-btn" id="tloginBtn" onclick="toggleLoginForm();" ></button>
                <div class="location-picker" onclick="toggleLocationPicker()">
                    <i class="fas fa-map-marker-alt"></i>
                    <span id="currentLocation">Select Location</span>
                </div>
            </div>
        </nav>
        <nav class="category-nav">
            <button class="category-btn active" onclick="filterByCategory('all')">All</button>
            <button class="category-btn" onclick="filterByCategory('fruits')">Fruits</button>
            <button class="category-btn" onclick="filterByCategory('vegetables')">Vegetables</button>
            <button class="category-btn" onclick="filterByCategory('dairy')">Dairy</button>
            <button class="category-btn" onclick="filterByCategory('beverages')">Beverages</button>
        </nav>
    </header>

    
    <main>
        <div class="sort-options">
            <h3>Sort By:</h3>
            <select id="sortSelect">
                <option value="default">Select</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="ratingAsc">Rating: Low to High</option>
                <option value="ratingDesc">Rating: High to Low</option>
            </select>
        </div>
        <div id="productsContainer" class="product-grid">
            <!-- Products will be dynamically loaded here -->
        </div>
    </main>

    <!-- Shopping Cart Modal -->
    <div id="cartModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Shopping Cart</h2>
                <span class="close" onclick="toggleCart()">&times;</span>
            </div>
            <div id="cartItems" class="cart-items">
                <!-- Cart items will be displayed here -->
            </div>
            <div class="cart-total">
                <h3>Total: $<span id="cartTotal">0.00</span></h3>
                <button class="checkout-btn" onclick="checkout()">Checkout</button>
            </div>
        </div>
    </div>

    <!-- Wishlist Modal -->
    <div id="wishlistModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>My Wishlist</h2>
                <span class="close" onclick="toggleWishlist()">&times;</span>
            </div>
            <div id="wishlistItems" class="wishlist-items">
                <!-- Wishlist items will be displayed here -->
            </div>
        </div>
    </div>

 
     <!-- Login Modal -->
     <div id="loginModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="authTitle">Login</h2>
                <span class="close" onclick="toggleLoginForm()">&times;</span>
            </div>
            <div id="loginForm" class="auth-form">
                <input type="text" placeholder="Username" id="loginUsername" required>
                <input type="password" placeholder="Password" id="loginPassword" required>
                <button id="loginBtn">Login</button>
                <p>Not registered? <a href="#" onclick="toggleAuthForms()">Register here</a></p>
            </div>
            <div id="registrationForm" class="auth-form" style="display:none;">
                <input type="text" placeholder="Username" id="registerUsername" required>
                <input type="email" placeholder="Email" id="registerEmail" required>
                <input type="password" placeholder="Password" id="registerPassword" required>
                <input type="password" placeholder="Confirm Password" id="registerConfirmPassword" required>
                <button onclick="registerUser()">Register</button>
                <p>Already registered? <a href="#" onclick="toggleAuthForms()">Login here</a></p>
            </div>
        </div>
    </div>

    <!-- Product Quick View Modal -->
    <div id="quickViewModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Product Details</h2>
                <span class="close" onclick="closeQuickView()">&times;</span>
            </div>
            <div id="quickViewContent">
                <!-- Product details will be displayed here -->
            </div>
        </div>
    </div>

    
html
Copy
Edit
<!-- Location Picker Modal -->
<div id="locationModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Select Your Location</h2>
            <span class="close" onclick="toggleLocationPicker()">&times;</span>
        </div>

        <div class="location-form">
            <input type="text" id="locationSearch" placeholder="Enter your address">
            <div id="locationSuggestions"></div>

            <button onclick="useCurrentLocation()">📍 Use Current Location</button>
        </div>

        <p id="selectedLocation"></p>
    </div>
</div>

    <!-- Inventory Alert Modal -->
    <div id="inventoryModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Low Stock Alert</h2>
                <span class="close" onclick="closeInventoryAlert()">&times;</span>
            </div>
            <div class="inventory-content">
                <p>Some items in your cart are running low:</p>
                <ul id="lowStockList"></ul>
                <button onclick="proceedToCheckout()">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <div id="authContainer" style="display:none;">
        <!-- Removed duplicate login/registration forms -->
    </div>

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
                <h3>Quick Links</h3>
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
            <div class="footer-section">
                <h3>Download Our App</h3>
                <div class="app-links">
                    <a href="#" class="app-button">
                        <i class="fab fa-apple"></i> App Store
                    </a>
                    <a href="#" class="app-button">
                        <i class="fab fa-google-play"></i> Google Play
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Fresh Mart. All rights reserved.</p>
        </div>
    </footer>

    
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initAutocomplete" async defer></script>
    <script src="script.js"></script>
    <script  src="auth.js"></script>
    <script>
        
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registrationForm').style.display = 'none';

            const loginBtn = document.getElementById("tloginBtn");
            const currentUser = localStorage.getItem('currentUser');
            
            if (currentUser) {
                loginBtn.textContent = 'Logout';
                loginBtn.onclick = logout;
                loginBtn.style.backgroundColor = "#dc3545";

            } else {
                loginBtn.textContent = 'Login';
                loginBtn.onclick = toggleLoginForm;
                loginBtn.style.backgroundColor = "#3498db";

            }
        });


        function toggleTheme() {
            const html = document.documentElement;
            if (html.getAttribute('data-theme') === 'light') {
                html.setAttribute('data-theme', 'dark');
            } else {
                html.setAttribute('data-theme', 'light');
            }
        }



        function toggleAuthForms() {
            const loginForm = document.getElementById('loginForm');
            const registrationForm = document.getElementById('registrationForm');
            const authTitle = document.getElementById('authTitle');
            if (loginForm.style.display === 'none') {
                loginForm.style.display = 'block';
                registrationForm.style.display = 'none';
                authTitle.textContent = 'Login';
            } else {
                loginForm.style.display = 'none';
                registrationForm.style.display = 'block';
                authTitle.textContent = 'Register';
            }
        }

        function toggleLocationPicker() {
        const modal = document.getElementById("locationModal");
        modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    }

    function useCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    document.getElementById("selectedLocation").innerHTML = `Latitude: ${lat}, Longitude: ${lng}`;
                    localStorage.setItem("userLocation", `${lat}, ${lng}`);
                },
                () => alert("Location access denied.")
            );
        } else {
            alert("Geolocation not supported by this browser.");
        }
    }

    // Google Places API Autocomplete
    function initAutocomplete() {
        const input = document.getElementById("locationSearch");
        const autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            document.getElementById("selectedLocation").innerHTML = `Selected: ${place.formatted_address}`;
            localStorage.setItem("userLocation", place.formatted_address);
        });
    }
    </script>

</body>
</html>
