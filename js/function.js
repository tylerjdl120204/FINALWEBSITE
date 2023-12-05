document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Get the values from the email and password inputs
    var emailValue = document.getElementById('loginEmail').value;
    var passwordValue = document.getElementById('loginPassword').value;
    
    // Check if the email contains "@" and ends with ".com"
    if (emailValue.includes('@') && emailValue.endsWith('.com')) {
        // Check if the password is at least 8 characters long
        if (passwordValue.length >= 8) {
            // Redirect to index.html
            window.location.href = 'index.html';
        } else {
            // Show an error message for invalid password length
            alert('Password should be at least 8 characters long');
        }
    } else {
        // Show an error message for invalid email format
        alert('Please enter a valid email address ending with .com');
    }
});