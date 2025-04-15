console.log("Enters into auth.js")

// Form validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password);
}

function validateUsername(username) {
    return username.length >= 3 && username.length <= 50;
}

// Login function
async function loginUser() {
    console.log("auth loginUser()");
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    localStorage.setItem('inputUser', username);

    if (!validateUsername(username)) {
        alert('Username must be between 3 and 50 characters');
        return;
    }

    try {
        const response = await fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        
        if (data.success) {
            localStorage.setItem('currentUser', username);
            updateLoginStatus();
            showNotification('Successfully logged in!');
            document.getElementById('loginModal').style.display = 'none';
            // window.location.href = 'profile.php';
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        alert('An error occurred during login');
    }
}

window.loginUser = loginUser; // Make function globally accessible

// Register function
async function registerUser() {
    console.log("auth registerUser()");
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Validate username
    if (!validateUsername(username)) {
        alert('Username must be between 3 and 50 characters');
        return;
    }

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Validate password
    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters and contain uppercase, lowercase, and numbers');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const response = await fetch('register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        const data = await response.json();
        
        if (data.success) {
            showNotification('Registration successfull!');
            toggleAuthForms(); // Switch to login form
        } else {
            alert(data.error || 'Registration failed');
        }
    } catch (error) {
        alert(`An error occurred during registration ${error}`);
    }
}

window.registerUser = registerUser;

// Toggle between login and registration forms
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

function updateLoginStatus() {
    console.log("updateLoginStatus()")
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
}
window.updateLoginStatus = updateLoginStatus;


function logout() {
    fetch("logout.php") // Call logout script
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let profileUser = document.getElementById("profileUser");
                let profileEmail = document.getElementById("profileEmail");

                // Only update if elements exist
                if (profileUser) profileUser.textContent = "Guest";
                if (profileEmail) profileEmail.textContent = "";

                localStorage.removeItem('inputUser');
                localStorage.removeItem('currentUser');
                localStorage.removeItem('cart');

                cart = [];

                showNotification('Successfully logged out!');
                window.location.href = "index.php"; 
            }
        })
        .catch(error => console.error("Error logging out:", error));
}


window.logout = logout;

document.getElementById("loginBtn").addEventListener("click", async function() {
    const loginSuccess = await loginUser(); // Wait for loginUser to complete
    console.log("loginSuccess");
    if (loginSuccess) {
        console.log("Enter into if block");
    }
});


