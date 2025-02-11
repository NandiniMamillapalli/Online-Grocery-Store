// Sample product data
const products = [
    // Fruits Category (10 items)
    {
        id: 1,
        name: "Fresh Apples",
        price: 249,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
        description: "Sweet and crispy apples"
    },
    {
        id: 2,
        name: "Organic Bananas",
        price: 165,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
        description: "Organic yellow bananas"
    },
    {
        id: 3,
        name: "Fresh Strawberries",
        price: 399,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
        description: "Sweet and juicy strawberries"
    },
    {
        id: 4,
        name: "Mangoes",
        price: 249,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
        description: "Ripe and sweet mangoes"
    },
    {
        id: 5,
        name: "Blueberries",
        price: 499,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
        description: "Fresh organic blueberries"
    },
    {
        id: 6,
        name: "Green Grapes",
        price: 349,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
        description: "Seedless green grapes"
    },
    {
        id: 7,
        name: "Oranges",
        price: 165,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1547514703725-719777637510",
        description: "Juicy navel oranges"
    },
    {
        id: 8,
        name: "Pineapple",
        price: 399,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
        description: "Fresh tropical pineapple"
    },
    {
        id: 9,
        name: "Kiwi",
        price: 165,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a",
        description: "Ripe kiwi fruit"
    },
    {
        id: 10,
        name: "Peaches",
        price: 249,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1595124245030-41448b199d6d",
        description: "Sweet and juicy peaches"
    },
    
    // Vegetables Category (10 items)
    {
        id: 11,
        name: "Fresh Carrots",
        price: 149,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37",
        description: "Organic carrots"
    },
    {
        id: 12,
        name: "Fresh Spinach",
        price: 299,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
        description: "Organic baby spinach"
    },
    {
        id: 13,
        name: "Bell Peppers",
        price: 165,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83",
        description: "Colorful bell peppers mix"
    },
    {
        id: 14,
        name: "Broccoli",
        price: 249,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
        description: "Fresh broccoli crowns"
    },
    {
        id: 15,
        name: "Tomatoes",
        price: 249,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2",
        description: "Ripe vine tomatoes"
    },
    {
        id: 16,
        name: "Cucumber",
        price: 99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e",
        description: "Fresh green cucumbers"
    },
    {
        id: 17,
        name: "Sweet Potatoes",
        price: 165,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1596097635121-52452f7691ef",
        description: "Nutritious sweet potatoes"
    },
    {
        id: 18,
        name: "Onions",
        price: 129,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510",
        description: "Fresh yellow onions"
    },
    {
        id: 19,
        name: "Cauliflower",
        price: 299,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc",
        description: "Fresh cauliflower head"
    },
    {
        id: 20,
        name: "Green Beans",
        price: 249,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0",
        description: "Crisp green beans"
    },

    // Dairy Category (10 items)
    {
        id: 21,
        name: "Whole Milk",
        price: 332,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        description: "Fresh whole milk"
    },
    {
        id: 22,
        name: "Greek Yogurt",
        price: 449,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        description: "Creamy Greek yogurt"
    },
    {
        id: 23,
        name: "Cheddar Cheese",
        price: 599,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a",
        description: "Aged cheddar cheese"
    },
    {
        id: 24,
        name: "Butter",
        price: 332,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
        description: "Premium unsalted butter"
    },
    {
        id: 25,
        name: "Mozzarella",
        price: 499,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1551500519-44e95fa4e616",
        description: "Fresh mozzarella cheese"
    },
    {
        id: 26,
        name: "Heavy Cream",
        price: 349,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1557825835-70d97c4aa567",
        description: "Fresh heavy cream"
    },
    {
        id: 27,
        name: "Cottage Cheese",
        price: 332,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1551500519-44e95fa4e616",
        description: "Low-fat cottage cheese"
    },
    {
        id: 28,
        name: "Sour Cream",
        price: 299,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1557825835-70d97c4aa567",
        description: "Fresh sour cream"
    },
    {
        id: 29,
        name: "Swiss Cheese",
        price: 699,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a",
        description: "Premium Swiss cheese"
    },
    {
        id: 30,
        name: "Almond Milk",
        price: 449,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
        description: "Unsweetened almond milk"
    },

    // Bakery Category (10 items)
    {
        id: 31,
        name: "Sourdough Bread",
        price: 499,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb",
        description: "Freshly baked sourdough"
    },
    {
        id: 32,
        name: "Croissants",
        price: 399,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
        description: "Buttery French croissants"
    },
    {
        id: 33,
        name: "Bagels",
        price: 449,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1585445490387-f47934b73b54",
        description: "Fresh New York style bagels"
    },
    {
        id: 34,
        name: "Whole Wheat Bread",
        price: 399,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        description: "Healthy whole wheat bread"
    },
    {
        id: 35,
        name: "Muffins",
        price: 499,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
        description: "Assorted fresh muffins"
    },
    {
        id: 36,
        name: "Baguette",
        price: 299,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1597079910443-60c43fc4f729",
        description: "Traditional French baguette"
    },
    {
        id: 37,
        name: "Cinnamon Rolls",
        price: 599,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
        description: "Fresh baked cinnamon rolls"
    },
    {
        id: 38,
        name: "Dinner Rolls",
        price: 349,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef",
        description: "Soft dinner rolls"
    },
    {
        id: 39,
        name: "Rye Bread",
        price: 449,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        description: "Traditional rye bread"
    },
    {
        id: 40,
        name: "Danish Pastry",
        price: 399,
        category: "bakery",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
        description: "Assorted Danish pastries"
    },

    // Meat Category (10 items)
    {
        id: 41,
        name: "Chicken Breast",
        price: 799,
        category: "meat",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
        description: "Fresh boneless chicken breast"
    },
    {
        id: 42,
        name: "Ground Beef",
        price: 699,
        category: "meat",
        image: "https://images.unsplash.com/photo-1588347785102-2944b1483755",
        description: "Lean ground beef"
    },
    {
        id: 43,
        name: "Salmon Fillet",
        price: 1299,
        category: "meat",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369",
        description: "Fresh Atlantic salmon fillet"
    },
    {
        id: 44,
        name: "Pork Chops",
        price: 899,
        category: "meat",
        image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6",
        description: "Premium cut pork chops"
    },
    {
        id: 45,
        name: "Turkey Breast",
        price: 999,
        category: "meat",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
        description: "Fresh turkey breast"
    },
    {
        id: 46,
        name: "Lamb Chops",
        price: 1499,
        category: "meat",
        image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6",
        description: "Premium lamb chops"
    },
    {
        id: 47,
        name: "Tilapia Fillet",
        price: 899,
        category: "meat",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369",
        description: "Fresh tilapia fillet"
    },
    {
        id: 48,
        name: "Beef Steak",
        price: 1599,
        category: "meat",
        image: "https://images.unsplash.com/photo-1588347785102-2944b1483755",
        description: "Premium cut beef steak"
    },
    {
        id: 49,
        name: "Chicken Wings",
        price: 699,
        category: "meat",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
        description: "Fresh chicken wings"
    },
    {
        id: 50,
        name: "Shrimp",
        price: 1399,
        category: "meat",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47",
        description: "Fresh jumbo shrimp"
    },

    // Beverage Category (8 items)
    {
        id: 101,
        name: "Fresh Orange Juice",
        price: 149,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
        description: "100% natural freshly squeezed orange juice",
        isOrganic: true,
        stock: 25
    },
    {
        id: 102,
        name: "Green Tea",
        price: 199,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5",
        description: "Premium Japanese green tea leaves",
        isOrganic: true,
        stock: 30
    },
    {
        id: 103,
        name: "Coconut Water",
        price: 89,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec",
        description: "Natural tender coconut water",
        isOrganic: true,
        stock: 40
    },
    {
        id: 104,
        name: "Mango Smoothie",
        price: 179,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
        description: "Fresh mango blended smoothie",
        isOrganic: false,
        stock: 15
    },
    {
        id: 105,
        name: "Lemonade",
        price: 99,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
        description: "Refreshing homemade lemonade",
        isOrganic: true,
        stock: 35
    },
    {
        id: 106,
        name: "Cold Coffee",
        price: 199,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
        description: "Chilled coffee with cream",
        isOrganic: false,
        stock: 20
    },
    {
        id: 107,
        name: "Berry Punch",
        price: 169,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e",
        description: "Mixed berry juice punch",
        isOrganic: true,
        stock: 25
    },
    {
        id: 108,
        name: "Mint Mojito",
        price: 159,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        description: "Refreshing mint mojito",
        isOrganic: false,
        stock: 30
    }
];

// Update product data to include ratings, reviews, stock, organic status, and dietary information
products.forEach(product => {
    product.rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3 and 5
    product.reviews = [];
    product.stock = Math.floor(Math.random() * 50) + 1; // Random stock between 1 and 50
    product.isOrganic = Math.random() > 0.5;
    product.dietary = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'][Math.floor(Math.random() * 4)];
});

// Recipe data
const recipes = [
    {
        id: 1,
        name: "Fresh Summer Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        description: "A refreshing summer salad with seasonal vegetables",
        ingredients: [1, 2, 3], // Product IDs
        instructions: "1. Wash and chop vegetables\n2. Mix in a bowl\n3. Add dressing"
    },
    {
        id: 2,
        name: "Healthy Smoothie Bowl",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f4b7369",
        description: "Nutritious breakfast bowl with fresh fruits",
        ingredients: [2, 4, 5],
        instructions: "1. Blend fruits\n2. Pour in bowl\n3. Add toppings"
    }
];

// Subscription data
let currentSubscription = null;
const subscriptionPlans = {};

// Location and delivery data
let currentLocation = null;
let deliveryTime = null;

// Cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = null;

// Additional state variables
let wishlist = [];
let currentTheme = 'light';
let selectedProduct = null;
let currentRating = 0;

// User Profile Data
let userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
    preferences: {
        dietary: ['vegetarian'],
        notifications: ['orders', 'points']
    }
};

// Order History Data
let orderHistory = [
    {
        id: 'ORD-001',
        date: '2025-01-28',
        total: 4729,
        status: 'Delivered',
        products: [
            {
                id: 1,
                name: 'Fresh Apples',
                quantity: 2,
                price: 249,
                image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6'
            },
            {
                id: 4,
                name: 'Whole Milk',
                quantity: 1,
                price: 332,
                image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150'
            }
        ]
    }
];

// Profile Page Functions
function loadProfile() {
    if (!document.querySelector('.profile-page')) return;

    // Load user info
    document.getElementById('userName').textContent = userProfile.name;
    document.getElementById('userEmail').textContent = userProfile.email;
    document.getElementById('userAvatar').src = userProfile.avatar;

    // Load loyalty info
    document.getElementById('userTier').textContent = userLoyalty.tier;
    document.getElementById('userPoints').textContent = `${userLoyalty.points} points`;
    updateTierProgress();

    // Load points history
    loadPointsHistory();

    // Load order history
    loadOrderHistory();

    // Load preferences
    loadPreferences();
}

function updateTierProgress() {
    const currentTier = loyaltyProgram.tiers.find(tier => tier.name === userLoyalty.tier);
    const nextTier = loyaltyProgram.tiers.find(tier => tier.minPoints > userLoyalty.points);
    
    if (nextTier) {
        const pointsNeeded = nextTier.minPoints - userLoyalty.points;
        document.getElementById('nextTierInfo').textContent = 
            `${pointsNeeded} points to ${nextTier.name}`;
        
        const progress = ((userLoyalty.points - currentTier.minPoints) / 
            (nextTier.minPoints - currentTier.minPoints)) * 100;
        document.getElementById('tierProgress').style.width = `${progress}%`;
    } else {
        document.getElementById('nextTierInfo').textContent = 'Maximum tier reached!';
        document.getElementById('tierProgress').style.width = '100%';
    }
}

function loadPointsHistory() {
    const historyList = document.getElementById('pointsHistoryList');
    if (!historyList) return;

    historyList.innerHTML = userLoyalty.pointsHistory
        .slice()
        .reverse()
        .map(entry => `
            <div class="history-item">
                <div>
                    <strong>${entry.product}</strong>
                    <div class="text-secondary">${formatDate(entry.date)}</div>
                </div>
                <div class="points">+${entry.points}</div>
            </div>
        `)
        .join('');
}

function loadOrderHistory() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;

    ordersList.innerHTML = orderHistory
        .map(order => `
            <div class="order-item">
                <div class="order-header">
                    <div>
                        <strong>Order ${order.id}</strong>
                        <div class="text-secondary">${formatDate(new Date(order.date))}</div>
                    </div>
                    <div class="order-status">${order.status}</div>
                </div>
                <div class="order-products">
                    ${order.products.map(product => `
                        <div class="order-product">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="product-info">
                                <div>${product.name}</div>
                                <div class="text-secondary">
                                    ${product.quantity} × ₹${product.price.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-total">
                    Total: ₹${order.total.toFixed(2)}
                </div>
            </div>
        `)
        .join('');
}

function loadPreferences() {
    const dietaryCheckboxes = document.querySelectorAll('input[name="dietary"]');
    const notificationCheckboxes = document.querySelectorAll('input[name="notifications"]');

    dietaryCheckboxes.forEach(checkbox => {
        checkbox.checked = userProfile.preferences.dietary.includes(checkbox.value);
    });

    notificationCheckboxes.forEach(checkbox => {
        checkbox.checked = userProfile.preferences.notifications.includes(checkbox.value);
    });
}

function savePreferences() {
    const dietaryPreferences = Array.from(document.querySelectorAll('input[name="dietary"]:checked'))
        .map(checkbox => checkbox.value);
    
    const notificationPreferences = Array.from(document.querySelectorAll('input[name="notifications"]:checked'))
        .map(checkbox => checkbox.value);

    userProfile.preferences = {
        dietary: dietaryPreferences,
        notifications: notificationPreferences
    };

    showNotification('Preferences saved successfully!');
}

function editProfile() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Edit Profile</h2>
            <form id="editProfileForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="editName" value="${userProfile.name}" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="editEmail" value="${userProfile.email}" required>
                </div>
                <div class="form-actions">
                    <button type="button" onclick="closeModal()">Cancel</button>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('editProfileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        userProfile.name = document.getElementById('editName').value;
        userProfile.email = document.getElementById('editEmail').value;
        loadProfile();
        closeModal();
        showNotification('Profile updated successfully!');
    });
}

function editAvatar() {
    // In a real application, this would open a file picker
    // For demo purposes, we'll just cycle through some sample avatars
    const avatars = [
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    ];
    
    const currentIndex = avatars.indexOf(userProfile.avatar);
    userProfile.avatar = avatars[(currentIndex + 1) % avatars.length];
    document.getElementById('userAvatar').src = userProfile.avatar;
    showNotification('Profile picture updated!');
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
    updateWishlistCount();
    loadTheme();
    setupPriceFilter();
    loadRandomRecipe();
    setupLocationServices();
    setupInventoryTracking();
    loadProfile();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
    updateLoginStatus();
});

// Display products with new features
function displayProducts(productsToShow) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <div class="product-rating">
                    <span class="stars">${getStarRating(product.rating)}</span>
                    <span>(${product.rating})</span>
                </div>
                <p>${product.description}</p>
                ${product.isOrganic ? '<span class="organic-badge">Organic</span>' : ''}
                <p class="stock-status ${product.stock < 5 ? 'low-stock' : ''}">
                    ${product.stock === 0 ? 'Out of Stock' : 
                      product.stock < 5 ? `Only ${product.stock} left!` : 'In Stock'}
                </p>
                <div class="product-actions">
                    <button class="add-to-wishlist" onclick="toggleWishlistItem(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})"
                    ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        `;
        container.appendChild(productElement);
    });
}

// Price Filter Setup
function setupPriceFilter() {
    const minPrice = Math.min(...products.map(p => p.price));
    const maxPrice = Math.max(...products.map(p => p.price));
    
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const minPriceDisplay = document.getElementById('minPriceInput');
    const maxPriceDisplay = document.getElementById('maxPriceInput');

    minPriceInput.min = minPrice;
    minPriceInput.max = maxPrice;
    maxPriceInput.min = minPrice;
    maxPriceInput.max = maxPrice;

    minPriceInput.value = minPrice;
    maxPriceInput.value = maxPrice;
    minPriceDisplay.value = minPrice;
    maxPriceDisplay.value = maxPrice;

    // Update display values when sliders change
    minPriceInput.addEventListener('input', () => {
        minPriceDisplay.value = minPriceInput.value;
    });

    maxPriceInput.addEventListener('input', () => {
        maxPriceDisplay.value = maxPriceInput.value;
    });
}

// Apply price filter
function applyPriceFilter() {
    const minPrice = parseFloat(document.getElementById('minPrice').value);
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);
    
    const filteredProducts = products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    
    displayProducts(filteredProducts);
}

// Sort products
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sortedProducts = [...products];

    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            sortedProducts = [...products];
    }

    displayProducts(sortedProducts);
}

// Filter products by category
function filterByCategory(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category) {
            btn.classList.add('active');
        }
    });

    // Filter products
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

    // Display filtered products
    displayProducts(filteredProducts);
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Cart functions
function addToCart(productId) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Please login to add items to cart');
        toggleLoginForm();
        return;
    }

    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Item added to cart!');
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

window.updateCartCount = updateCartCount;

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    
    if (modal.style.display === 'block') {
        displayCartItems();
    }
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div>
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
    });

    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        updateCartCount();
        displayCartItems();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

// Wishlist functions
function toggleWishlistItem(productId) {
    console.log('Current Wishlist:', wishlist);
    const index = wishlist.indexOf(productId);
    const button = document.querySelector(`.wishlist-btn[onclick*='${productId}']`);
    if (index === -1) {
        wishlist.push(productId);
        showNotification('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist!');
    }
    updateWishlistCount();
    displayWishlistItems();
}

function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlistCount');
    wishlistCount.textContent = wishlist.length;
}

function toggleWishlist() {
    const modal = document.getElementById('wishlistModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    
    if (modal.style.display === 'block') {
        displayWishlistItems();
    }
}

function displayWishlistItems() {
    const wishlistItems = document.getElementById('wishlistItems');
    wishlistItems.innerHTML = '';

    wishlist.forEach(productId => {
        const product = products.find(p => p.id === productId);
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h4>${product.name}</h4>
                <p>₹${product.price.toFixed(2)}</p>
            </div>
            <div>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="toggleWishlistItem(${product.id})">Remove</button>
            </div>
        `;
        wishlistItems.appendChild(itemElement);
    });
}

// Quick View functions
function quickView(productId) {
    selectedProduct = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    
    content.innerHTML = `
        <img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="product-image-large">
        <div class="product-details">
            <h2>${selectedProduct.name}</h2>
            <p class="product-price">₹${selectedProduct.price.toFixed(2)}</p>
            <div class="product-rating">
                <span class="stars">${getStarRating(selectedProduct.rating)}</span>
                <span>(${selectedProduct.rating})</span>
            </div>
            <p>${selectedProduct.description}</p>
            <button class="add-to-cart" onclick="addToCart(${selectedProduct.id})">
                Add to Cart
            </button>
        </div>
    `;

    displayReviews();
    modal.style.display = 'block';
}

function closeQuickView() {
    document.getElementById('quickViewModal').style.display = 'none';
    selectedProduct = null;
    currentRating = 0;
}

// Review functions
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (halfStar) stars += '½';
    return stars;
}

function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';

    selectedProduct.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        reviewElement.innerHTML = `
            <div class="review-header">
                <span class="review-rating">${getStarRating(review.rating)}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <p>${review.text}</p>
        `;
        reviewsList.appendChild(reviewElement);
    });
}

function setRating(rating) {
    currentRating = rating;
    const stars = document.querySelectorAll('.rating-input .star');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < rating);
    });
}

function submitReview() {
    if (!currentUser) {
        alert('Please login to submit a review');
        return;
    }

    const reviewText = document.getElementById('reviewText').value;
    if (!currentRating || !reviewText) {
        alert('Please provide both rating and review text');
        return;
    }

    const review = {
        rating: currentRating,
        text: reviewText,
        date: new Date().toLocaleDateString(),
        user: currentUser.email
    };

    selectedProduct.reviews.push(review);
    displayReviews();
    document.getElementById('reviewText').value = '';
    setRating(0);
    showNotification('Review submitted successfully!');
}

// Login functions
function toggleLoginForm() {
    const modal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');
    const authTitle = document.getElementById('authTitle');
    
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
        authTitle.textContent = 'Login';
    }
}


/*
function lloginUser() {
    console.log("lloginUser()")
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    if (!users[username]) {
        alert('User does not exist. Please register first.');
        toggleAuthForms(); // Switch to registration form
        return;
    }

    if (users[username] === password) {
        
        
        
    } else {
        alert('Invalid password.');
    }
}

function lregisterUser() {
    console.log("lregisterUser()")
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    if (users[username]) {
        alert('Username already exists.');
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now log in.');
        toggleAuthForms();
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
*/

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Open checkout in new tab
    window.open('checkout.html', '_blank');
}

// Theme functions
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function loadTheme() {
    currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Promotional banner
function closeBanner() {
    document.getElementById('promoBanner').style.display = 'none';
}

// Utility functions
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem;
        border-radius: 4px;
        animation: slideIn 0.5s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Recipe functions
function loadRandomRecipe() {
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    const recipeContent = document.querySelector('.recipe-content');
    
    recipeContent.innerHTML = `
        <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="recipe-details">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <div class="recipe-ingredients">
                <h4>Ingredients Needed:</h4>
                <ul>
                    ${recipe.ingredients.map(id => {
                        const product = products.find(p => p.id === id);
                        return `<li>${product.name}</li>`;
                    }).join('')}
                </ul>
            </div>
        </div>
    `;
}

function addIngredientsToCart() {
    if (!currentUser) {
        alert('Please login to add recipe ingredients to cart');
        toggleLoginForm();
        return;
    }

    const recipe = recipes[0]; // Currently displayed recipe
    recipe.ingredients.forEach(productId => {
        addToCart(productId);
    });
    showNotification('Recipe ingredients added to cart!');
}

// Location and delivery functions
function setupLocationServices() {
    if ("geolocation" in navigator) {
        const locationBtn = document.querySelector('.location-picker');
        locationBtn.style.display = 'flex';
    }
}

function toggleLocationPicker() {
    const modal = document.getElementById('locationModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function detectLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            // In a real app, we would use these coordinates to get the address
            // For demo, we'll just show a success message
            updateDeliveryLocation("Your Location");
        }, () => {
            alert('Unable to detect location. Please enter your address manually.');
        });
    }
}

function updateDeliveryLocation(location) {
    currentLocation = location;
    document.getElementById('currentLocation').textContent = location;
    
    // Simulate delivery time calculation
    const deliveryHours = Math.floor(Math.random() * 3) + 1;
    document.getElementById('deliveryTime').textContent = 
        `Estimated delivery in ${deliveryHours} hours`;
    
    toggleLocationPicker();
    showNotification('Delivery location updated!');
}

// Inventory tracking
function setupInventoryTracking() {
    // Check inventory levels when adding to cart
    const originalAddToCart = window.addToCart;
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product.stock < 5) {
            showLowStockAlert(product);
        }
        originalAddToCart(productId);
    };
}

function showLowStockAlert(product) {
    const modal = document.getElementById('inventoryModal');
    const list = document.getElementById('lowStockList');
    
    list.innerHTML = `
        <li>${product.name} - Only ${product.stock} left in stock!</li>
    `;
    
    modal.style.display = 'block';
}

function closeInventoryAlert() {
    document.getElementById('inventoryModal').style.display = 'none';
}

// Enhanced filtering
function applyFilters() {
    const minPrice = parseFloat(document.getElementById('minPrice').value);
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);
    const organicOnly = document.getElementById('organicOnly').checked;
    const inStockOnly = document.getElementById('inStock').checked;
    const dietary = document.getElementById('dietaryFilter').value;
    
    let filteredProducts = products.filter(product => {
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        const organicMatch = !organicOnly || product.isOrganic;
        const stockMatch = !inStockOnly || product.stock > 0;
        const dietaryMatch = !dietary || product.dietary === dietary;
        
        return priceMatch && organicMatch && stockMatch && dietaryMatch;
    });
    
    displayProducts(filteredProducts);
}

document.getElementById('sortSelect').addEventListener('change', function() {
    const selectedOption = this.value;
    let sortedProducts;

    switch (selectedOption) {
        case 'priceAsc':
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
            break;
        case 'priceDesc':
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
            break;
        case 'ratingAsc':
            sortedProducts = [...products].sort((a, b) => a.rating - b.rating);
            break;
        case 'ratingDesc':
            sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
            break;
        default:
            sortedProducts = products;
    }

    displayProducts(sortedProducts);
});